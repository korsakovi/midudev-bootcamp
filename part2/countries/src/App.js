import { useState, useEffect } from "react";
import axios from "axios";

import { Country, Name } from "./Country";

function App() {
 const [APIData, setAPIData] = useState([]);
 const [inputValue, setInputValue] = useState("");
 const [filteredResults, setFilteredResults] = useState([]);

 useEffect(() => {
  axios.get("https://restcountries.com/v3.1/all").then((res) => {
   const { data } = res;
   console.log(data);
   setAPIData(data);
  });
 }, []);

 const searchItems = (e) => {
  setInputValue(e.target.value);
  if (e.target.value !== "") {
   const filteredData = APIData.filter((item) => {
    return Object.values(item.name.common)
     .join("")
     .toLowerCase()
     .includes(e.target.value.toLowerCase());
   });
   console.log(filteredData);

   setFilteredResults(filteredData);
  } else {
   setFilteredResults(APIData);
  }
 };

 return (
  <div>
   <label htmlFor="countries">Find countries</label>
   <input onChange={searchItems} value={inputValue} />

   {(() => {
    if (filteredResults.length > 10) {
     return <div>"Demasiados resultados"</div>;
    } else if (filteredResults.length < 10 && filteredResults.length > 1) {
     return (
      <div>
       {filteredResults.map((item, key) => {
        return <Name key={key} country={item} />;
       })}
      </div>
     );
    } else if (filteredResults.length === 1) {
     return (
      <div>
       {filteredResults.map((item, key) => {
        return <Country key={key} country={item} />;
       })}
      </div>
     );
    }
   })()}
  </div>
 );
}

export default App;


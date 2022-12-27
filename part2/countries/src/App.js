import { useState, useEffect } from "react";
import axios from "axios";

import { Country, Countries, ManyMatches } from "./Country";

function App() {
 const [APIData, setAPIData] = useState([]);
 const [inputValue, setInputValue] = useState("");
 const [filteredResults, setFilteredResults] = useState([]);

 useEffect(() => {
  axios.get("https://restcountries.com/v3.1/all").then((res) => {
   const { data } = res;
   setAPIData(data);
  });
 }, []);

 const handleShowInput = (e) => {
  setInputValue(e.target.value);
  setFilteredResults(
   APIData.filter((country) =>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
   )
  );
 };

 return (
  <div>
   <label htmlFor="countries">Find countries</label>
   <input onChange={handleShowInput} value={inputValue} />

   {filteredResults.length === 1
    ? filteredResults.map((item, key) => {
       return <Country key={key} country={item} myKey={key} />;
      })
    : null}

   {filteredResults.length > 10 ? (
    <ManyMatches />
   ) : (
    <Countries
     filteredResults={filteredResults}
     setFilteredResults={setFilteredResults}
    />
   )}
  </div>
 );
}

export default App;


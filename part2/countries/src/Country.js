export function Country({ country, myKey }) {
 return <Data key={myKey} country={country} />;
}

const Lenguaje = ({ country, languages }) => {
 if (country.hasOwnProperty("languages")) {
  const paises = Object.values(languages);
  const result = paises.map((pais, index) => <li key={index}>{pais}</li>);
  return result;
 }
};

export const ManyMatches = () => {
 return (
  <p style={{ color: "red", fontSize: "2rem" }}>
   Too many matches, specify another filter
  </p>
 );
};

export const Countries = ({ filteredResults, setFilteredResults }) => {
 if (filteredResults.length === 1) return null;

 return filteredResults.map((country, key) => (
  <div key={key}>
   {country.name.common}
   <button onClick={() => setFilteredResults([country])}>show</button>
  </div>
 ));
};

const Data = ({ country }) => {
 return (
  <>
   <h2>{country.name.common}</h2>
   <div>
    <span>capital {country.capital}</span>
    <br></br>
    <span>population {country.population}</span>
   </div>
   <div>
    <h3>Languages</h3>
    <Lenguaje country={country} languages={country.languages} />
   </div>
   <div>
    <img src={country.flags.png} alt="Bandera" />
   </div>
  </>
 );
};

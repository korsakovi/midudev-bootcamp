export function Country({ country }) {
 return <Data country={country} />;
}

const Lenguaje = ({ country, languages }) => {
 if (country.hasOwnProperty("languages")) {
  const paises = Object.values(languages);
  const result = paises.map((pais, index) => <li key={index}>{pais}</li>);
  return result;
 }
};

export const Name = ({ country }) => {
 return (
  <>
   <li>{country.name.common}</li>
  </>
 );
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

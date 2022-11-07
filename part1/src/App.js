import "./App.css";
import Description from "./Description";
import Mensaje from "./Mensaje";

function App() {
 return (
  <div className="App">
   <Mensaje message="Estamos trabajando en un curso" />
   <Mensaje message="Lo estamos haciendo" />
   <Description text="Probando las props de description" color="red" />
   <Description text="Seguimos con las pruebas de description" color="yellow" />
  </div>
 );
}

export default App;


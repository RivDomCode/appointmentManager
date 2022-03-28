import { useState, useEffect } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoCitas } from "./components/ListadoCitas";

function App() {
  const [listaCitas, setListaCitas] = useState([]);
  const [cita, setCita] = useState({});

  //Trae los datos de local storage si los hay en la primera carga de la app
  //JSON.parse convierte el string que traemos de LS en array de nuevo
  useEffect(() => {
    const listaCitasLS = JSON.parse(localStorage.getItem("listaCitas")) ?? [];
    setListaCitas(listaCitasLS); //actualiza el estado con lista de citas que haya en LS
  }, []);

  //guarda datos en LS cuando se produzcan cambios en listaCitas
  //JSON.stringify pasa el array a string pq LS sólo almacena strings
  useEffect(() => {
    localStorage.setItem("listaCitas", JSON.stringify(listaCitas));
  }, [listaCitas]);

  const eliminarCita = (id) => {
    //trae todas las citas excepto la que tiene el id igual al que le estoy pasando
    //por argumento
    const listaCitasActualizada = listaCitas.filter((cita) => cita.id !== id);
    //actualiza lista de citas con todas la citasActualizadas
    setListaCitas(listaCitasActualizada);
  };

  return (
    <div className="App">
      <Header />
      <div className="mt-12 sm:flex ">
        <Formulario
          listaCitas={listaCitas}
          setListaCitas={setListaCitas}
          cita={cita}
          setCita={setCita}
        />
        <ListadoCitas
          listaCitas={listaCitas}
          setCita={setCita}
          eliminarCita={eliminarCita}
        />
      </div>
    </div>
  );
}

export default App;

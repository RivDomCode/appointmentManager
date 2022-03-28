import { useState, useEffect } from "react";
import { Error } from "./Error";
import { generarId } from "../helpers/generarId";

export const Formulario = ({ listaCitas, setListaCitas, cita, setCita }) => {
  //Inputs del formulario
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [observaciones, setObservaciones] = useState("");
  //Lanzar mensaje de error si no cumple validación
  const [error, setError] = useState(false);

  //Llenar el formulario para editarlo, utilizamos useEffect para que se ejecute un
  //codigo cuando se de un cambio en cita, cuando presionemos en editar, capturamos los
  //datos de esa cita
  useEffect(() => {
    if (Object.keys(cita).length > 0) {
      setNombre(cita.nombre);
      setEmpresa(cita.empresa);
      setEmail(cita.email);
      setFecha(cita.fecha);
      setObservaciones(cita.observaciones);
    }
  }, [cita]);

  //Añadir citas al formulario con validacion
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validación formularrio
    if ([nombre, empresa, email, fecha, observaciones].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const objetoCita = {
      nombre,
      empresa,
      email,
      fecha,
      observaciones,
    };

    //Validación para saber si estamos editando o añadiendo una nueva cita
    if (cita.id) {
      //editando
      objetoCita.id = cita.id; //le asignamos el id de la cita a editar

      const listaCitasActulizada = listaCitas.map((citaState) =>
        citaState.id === cita.id ? objetoCita : citaState
      ); //iteramos sobre la lista de citas para identificar que registro estamos editando

      setListaCitas(listaCitasActulizada); //actulizamos lista de pacientes con registro editado

      setCita({}); //regresamos el formulario al estado inicial
    } else {
      //nuevo registro
      objetoCita.id = generarId(); //añade id al objeto cita
      setListaCitas([objetoCita, ...listaCitas]);
    }

    //reinicia el formulario
    setNombre("");
    setEmpresa("");
    setFecha("");
    setEmail("");
    setObservaciones("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 p-5">
      <h2 className="font-black text-3xl text-center">Datos Cita</h2>
      <p className="mt-5 text-center text-xl">
        Añade citas y{" "}
        <span className="text-indigo-500 font-bold">administralas</span>
      </p>

      <form
        className="bg-white py-10 shadow-md rounded-lg mt-5 px-2 w-full ml-5 mb-5"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            className="border-2 w-full p-2 placeholder-slate-400 rounded-xl"
            placeholder="Nombre del cliente"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="empresa"
            className="block text-gray-700 uppercase font-bold"
          >
            Empresa
          </label>
          <input
            id="empresa"
            type="text"
            className="border-2 w-full p-2 placeholder-slate-400 rounded-xl"
            placeholder="Empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border-2 w-full p-2 placeholder-slate-400 rounded-xl"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de cita
          </label>
          <input
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border-2 w-full p-2 placeholder-slate-400 rounded-xl"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Observaciones
          </label>
          <textarea
            id="fecha"
            type="text"
            className="border-2 w-full p-2 placeholder-slate-400 rounded-xl"
            placeholder="Observaciones"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={cita.id ? "Editar Cita" : "Añadir Cita"}
          className="bg-indigo-400 tracking-wider text-white p-2 text-lg font-medium w-full uppercase hover:bg-indigo-500 cursor-pointer shadow-md rounded-lg"
        />
      </form>
    </div>
  );
};

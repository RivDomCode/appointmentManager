import { useEffect } from "react";
import { Cita } from "./Cita";

export const ListadoCitas = ({ listaCitas, setCita, eliminarCita }) => {
  return (
    <>
      {listaCitas && listaCitas.length ? (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
          <h2 className="font-black text-3xl text-center">Lista de citas</h2>
          <p className="mt-5 text-center text-xl">
            Administra tus{" "}
            <span className="text-indigo-500 font-bold"> citas</span>
          </p>
          {listaCitas.map((cita) => (
            <Cita
              key={cita.id}
              cita={cita}
              setCita={setCita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      ) : (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
          <h2 className="font-black text-3xl text-center">Lista de citas</h2>
          <p className="mt-5 text-center text-xl">
            No hay citas agendadas. Empieza a agregar tus
            <span className="text-indigo-500 font-bold"> citas </span>
          </p>
        </div>
      )}
    </>
  );
};

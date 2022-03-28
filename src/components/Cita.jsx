export const Cita = ({ cita, setCita, eliminarCita }) => {
  const { nombre, empresa, email, fecha, observaciones, id } = cita;

  const handleEliminar = () => {
    const respuesta = confirm("Seguro que quieres eliminar esta cita");

    if (respuesta) {
      eliminarCita(id);
    }
  };

  return (
    <div className="m-5 bg-white shadow-md rounded-lg py-10 px-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Empresa: <span className="font-normal normal-case">{empresa}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha cita: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Observaciones:{" "}
        <span className="font-normal normal-case">{observaciones}</span>
      </p>
      <div className="flex justify-around mt-8">
        <button
          type="button"
          className="px-2 py-2 w-1/3 bg-indigo-300 hover:bg-indigo-400 uppercase text-white rounded-lg font-bold tracking-wider"
          onClick={() => setCita(cita)}
        >
          Editar
        </button>
        <button
          type="button"
          className="px-2 py-2 w-1/3  bg-red-300 hover:bg-red-400  uppercase text-white rounded-lg font-bold tracking-wider"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

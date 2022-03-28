export const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-400 p-2 text-center text-white font-black rounded-md shadow-md mb-3">
      {mensaje}
    </div>
  );
};

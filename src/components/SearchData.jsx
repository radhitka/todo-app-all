import { Link } from 'react-router-dom';

function SearchData(params) {
  const { todo, onClick, searchQuery } = params;

  return (
    <div className="absolute mt-2 lg:mt-3 flex flex-col gap-3 w-full lg:max-w-xs bg-slate-100 p-3 lg:p-4 text-sm lg:text-base rounded-lg z-50">
      {todo.map((e, key) => {
        return (
          <Link
            onClick={(e) => onClick()}
            to={'task/' + e.id}
            key={key}
            className={`grid grid-flow-col justify-between hover:text-red-300 cursor-pointer`}
          >
            <h1>{e.title}</h1>
            <h1>{e.date}</h1>
          </Link>
        );
      })}
      {todo.length > 0 && (
        <div className="bg-rose-100 w-full p-2 rounded-md text-rose-600 text-center">
          Pencarian untuk : {searchQuery}
        </div>
      )}
      {todo.length == 0 && (
        <div className="">
          <h1>Tugas tidak ditemukan....</h1>
        </div>
      )}
    </div>
  );
}

export default SearchData;

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment/moment';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { openCreate } from '../redux/slices/modalSlice';
import { changeFilter } from '../redux/slices/todoSlice';

function Navbar(params) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [todo, setTodo] = useState([]);
  const menuRef = useRef();

  function handleSearch(e) {
    const value = e.target.value;

    setSearch(value);

    if (value.length == 0) {
      setIsSearch(false);
      return;
    }

    const query = value.toLowerCase();

    const newTodo = todos.filter(
      (item) => item.title.toLowerCase().indexOf(query) > -1
    );

    setTodo(newTodo);

    setIsSearch(true);
  }

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current.contains(e.target) == false) {
        setIsSearch(false);
        setSearch('');
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const handleFilterChange = () => {
    dispatch(changeFilter({ filter: 'SEARCH' }));

    setIsSearch(false);
  };

  return (
    <div className="hidden lg:grid items-center grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex">
      <div className="flex flex-col flex-1 gap-2" ref={menuRef}>
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            className="input input-bordered input-primary w-full"
            placeholder="Cari Tugas"
            onChange={(e) => handleSearch(e)}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute w-4 sm:w-5 right-4 top-4 text-slate-400"
          />
        </div>
        {isSearch && (
          <div className="absolute top-[4.7rem] flex flex-col gap-3 w-full max-w-xs bg-slate-100 p-4 rounded-lg z-50">
            {todo.map((e, key) => {
              return (
                <Link
                  onClick={(e) => handleFilterChange()}
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
                Pencarian untuk : {search}
              </div>
            )}
            {todo.length == 0 && (
              <div className="">
                <h1>Tugas tidak ditemukan....</h1>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex text-center">
        <span className="">{moment().format('YYYY, MMMM DD')}</span>
      </div>
      <div className="flex flex-1">
        <div className="ml-auto">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(openCreate({ id: 100 }))}
          >
            Tambah Tugas Baru
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

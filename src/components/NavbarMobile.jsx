import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/slices/todoSlice';
import SearchData from './SearchData';

function NavbarMobile(params) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current.contains(e.target) == false) {
        setState((prev) => ({
          ...prev,
          isSearch: false,
        }));
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const [state, setState] = useState({
    search: '',
    isSearch: false,
    todo: [],
  });

  function handleSearch(e) {
    const value = e.target.value;

    const query = value.toLowerCase();

    const newTodo = todos.filter(
      (item) => item.title.toLowerCase().indexOf(query) > -1
    );

    setState({
      search: value,
      isSearch: value.length > 0,
      todo: newTodo,
    });
  }

  const handleFilterChange = () => {
    dispatch(changeFilter({ filter: 'SEARCH' }));

    setIsSearch(false);
  };

  return (
    <div className="flex lg:hidden">
      <div className="flex-1">
        <div className="relative w-full" ref={menuRef}>
          <input
            type="text"
            className="input input-primary w-full bg-slate-100 border-transparent border-2 rounded-lg text-sm text-slate-600 "
            placeholder="Cari Tugas"
            onChange={(e) => handleSearch(e)}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute w-4 right-4 top-4 text-slate-400"
          />
          {state.isSearch && (
            <SearchData
              searchQuery={state.search}
              todo={state.todo}
              onClick={(e) => handleFilterChange()}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;

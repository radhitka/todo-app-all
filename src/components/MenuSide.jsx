import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { changeFilter } from '../redux/slices/todoSlice';

const routes = [
  {
    type: 'ALL',
    path: '/',
    title: 'Semua Tugas',
  },
  {
    type: 'IMPORTANT',
    path: '/important',
    title: 'Tugas Penting',
  },
  {
    type: 'COMPLETED',
    path: '/completed',
    title: 'Tugas Selesai',
  },
  {
    type: 'UNCOMPLETED',
    path: '/uncompleted',
    title: 'Tugas Belum Selesai',
  },
];

function Menuside(params) {
  const route = useLocation();
  const currentPath = route.pathname;
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(changeFilter({ filter: filter }));
  };

  return (
    <ul className="grid gap-2">
      {routes.map((item, key) => {
        return (
          <li key={key}>
            <Link
              onClick={(e) => handleFilterChange(item.type)}
              to={item.path}
              key={key}
              className={`px-4 py-2 block w-full text-xs lg:text-base ${
                currentPath == item.path ? 'menu-active' : ''
              } `}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Menuside;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ModalTask from '../components/ModalTask';
import TaskCard from '../components/TaskCard';
import { openCreate } from '../redux/slices/modalSlice';

function Home(params) {
  const dispatch = useDispatch();
  const { todo, filter } = useSelector((state) => ({
    todo: state.todo.data,
    filter: state.todo.filter,
  }));
  const { id } = useParams();

  let title = params.title;
  let filteredTodos;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);

  switch (filter) {
    case 'IMPORTANT':
      filteredTodos = todo.filter((e) => e.important == true);
      break;
    case 'COMPLETED':
      filteredTodos = todo.filter((e) => e.done == true);
      break;
    case 'UNCOMPLETED':
      filteredTodos = todo.filter((e) => e.done == false);
      break;
    case 'SEARCH':
      filteredTodos = todo.filter((e) => e.id == id);
      title = `Tugas ${filteredTodos[0]?.title} (${filteredTodos.length} tugas)`;
      break;

    default:
      filteredTodos = todo;
      break;
  }

  return (
    <div className="mt-5 flex flex-col gap-5">
      <h1 className="font-medium text-center lg:text-left sm:mt-8 sm:mb-4 md:text-2xl text-lg">
        {title}
      </h1>
      <div className="mt-1 lg:mt-3 grid grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-6 items-end">
        {filteredTodos?.map((e, key) => {
          return <TaskCard data={e} key={key} />;
        })}
        <div
          className="flex bg-slate-200 border-2 border-dashed border-slate-300 h-44 xl:h-64 rounded-lg items-center justify-center text-slate-400 hover:text-slate-500 hover:bg-slate-300 cursor-pointer"
          onClick={() => dispatch(openCreate())}
        >
          <h1 className="text-sm lg:text-base">Tambah Tugas Baru</h1>
        </div>
        <ModalTask data={todo} />
      </div>
    </div>
  );
}

export default Home;

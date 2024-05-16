import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../redux/slices/showMenuSlice';

function MenuRightSide(params) {
  const dispatch = useDispatch();
  const { todo, showMenu } = useSelector((state) => ({
    todo: state.todo.data,
    showMenu: state.showMenu.data,
  }));
  const [totalStats, setTotalStats] = useState({ all: 0, done: 0, width: 0 });
  const [todayStats, setTodayStats] = useState({ all: 0, done: 0, width: 0 });

  useEffect(() => {
    updateStats();
  }, [todo]);

  function updateStats() {
    const newTotal = calculateStats(todo);
    const newToday = calculateStats(todo.filter((task) => isToday(task.date)));

    setTotalStats(newTotal);
    setTodayStats(newToday);
  }

  function calculateStats(tasks) {
    const totalTasks = tasks.length;
    const doneTasks = tasks.filter((task) => task.done).length;
    const width = (doneTasks / totalTasks) * 100 || 0;

    return { all: totalTasks, done: doneTasks, width };
  }

  function isToday(date) {
    const today = moment().startOf('day');
    return moment(date).isSame(today, 'day');
  }

  return (
    <div>
      <div
        className={`bg-slate-100 h-screen w-60 xl:w-2/12 xl:block right-0 fixed z-20 ${
          showMenu.showLeft ? 'block' : 'hidden'
        } `}
      >
        <div className="h-full flex flex-col text-sm lg:text-base z-20">
          <div className="my-8">
            <h1 className="font-bold uppercase text-center xl:text-lg tracking-wide block">
              Haloo
            </h1>
          </div>
          <hr />
          <div className="mt-8 px-6">
            <div className="flex flex-col gap-1">
              <div className="grid grid-flow-col justify-between">
                <h1>Semua Tugas</h1>
                <h1>
                  {totalStats.done}/{totalStats.all}
                </h1>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                <div
                  className={`bg-violet-600 rounded-full h-2.5`}
                  style={{ width: `${totalStats.width}%` }}
                ></div>
              </div>
            </div>
          </div>
          {todayStats.all != 0 && (
            <div className="mt-8 px-6">
              <div className="flex flex-col gap-1">
                <div className="grid grid-flow-col justify-between">
                  <h1>Tugas Hari ini</h1>
                  <h1>
                    {todayStats.done}/{todayStats.all}
                  </h1>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                  <div
                    className={`bg-violet-600 rounded-full h-2.5`}
                    style={{ width: `${todayStats.width}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showMenu.showLeft && (
        <div
          className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
          onClick={(e) => dispatch(closeMenu())}
        ></div>
      )}
    </div>
  );
}

export default MenuRightSide;

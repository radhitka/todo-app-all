import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function MenuRightSide(params) {
  const todo = useSelector((state) => state.todo.data);
  const [all, setAll] = useState(0);
  const [done, setDone] = useState(0);
  const [width, setWidth] = useState(0);

  const [allToday, setAllToday] = useState(0);
  const [doneToday, setDoneToday] = useState(0);
  const [widthToday, setWidthToday] = useState(0);

  useEffect(() => {
    const NewallTask = allTask();
    const NewallTaskToday = todayTask();

    setWidth(NewallTask);
    setWidthToday(NewallTaskToday);
  }, [todo]);

  function allTask() {
    const newAll = todo.length;
    const newDone = todo.filter((e) => e.done == true).length;

    setAll(newAll);

    setDone(newDone);

    return getWith(newDone, newAll);
  }

  function todayTask() {
    const newTodo = todo.filter((e) => {
      const newDate = moment(new Date(e.date)).format('YYYY, MMMM DD');
      const nowDate = moment().format('YYYY, MMMM DD');

      return newDate == nowDate;
    });

    const newAll = newTodo.length;
    const newDone = newTodo.filter((e) => e.done == true).length;

    setAllToday(newAll);
    setDoneToday(newDone);

    return getWith(newDone, newAll);
  }

  function getWith(first, last) {
    return (first / last) * 100;
  }

  return (
    <div className="bg-slate-100 h-screen w-2/12 hidden xl:block right-0 fixed">
      <div className="h-full flex flex-col">
        <div className="my-8">
          <h1 className="font-bold uppercase text-center text-lg tracking-wide hidden xl:block">
            Haloo
          </h1>
        </div>
        <hr />
        <div className="mt-8 px-6">
          <div className="flex flex-col gap-1">
            <div className="grid grid-flow-col justify-between">
              <h1>Semua Tugas</h1>
              <h1>
                {done}/{all}
              </h1>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 ">
              <div
                className={`bg-violet-600 rounded-full h-2.5`}
                style={{ width: `${width}%` }}
              ></div>
            </div>
          </div>
        </div>
        {allToday != 0 && (
          <div className="mt-8 px-6">
            <div className="flex flex-col gap-1">
              <div className="grid grid-flow-col justify-between">
                <h1>Tugas Hari ini</h1>
                <h1>
                  {doneToday}/{allToday}
                </h1>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                <div
                  className={`bg-violet-600 rounded-full h-2.5`}
                  style={{ width: `${widthToday}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuRightSide;

import {
  faCalendarDays,
  faStar,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';
import {
  faEllipsisVertical,
  faStar as faStar2,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/slices/modalDeleteSlice';
import { editCreate } from '../redux/slices/modalSlice';
import {
  changeStatusImportant,
  changeStatusTodo,
} from '../redux/slices/todoSlice';
import ButtonStar from './ButtonStar';

function TaskCard(params) {
  const data = params?.data;
  const dispatch = useDispatch();

  function handleClick() {
    const body = {
      id: data.id,
    };

    dispatch(changeStatusTodo(body));
  }

  function handleStar() {
    const body = {
      id: data.id,
    };

    dispatch(changeStatusImportant(body));
  }

  function handleDelete() {
    const body = {
      id: data.id,
    };

    dispatch(showModal(body));
  }

  let button, star;
  if (data.done) {
    button = (
      <ButtonStar
        title="Selesai"
        className="bg-emerald-200 text-emerald-800 "
        handleClick={(e) => handleClick()}
      />
    );
  } else {
    button = (
      <ButtonStar
        title="Belum Selesai"
        className="bg-amber-200 text-amber-800"
        handleClick={(e) => handleClick()}
      />
    );
  }

  if (data.important) {
    star = (
      <FontAwesomeIcon
        icon={faStar2}
        className="w-4 h-4 lg:w-5 lg:h-5 text-slate-50 lg:hover:text-slate-700"
        onClick={(e) => handleStar()}
      />
    );
  } else {
    star = (
      <FontAwesomeIcon
        icon={faStar}
        className="w-4 h-4 lg:w-5 lg:h-5 text-slate-50 lg:hover:text-slate-700"
        onClick={(e) => handleStar()}
      />
    );
  }

  return (
    <div className="flex flex-col gap-5 bg-violet-600 h-44 xl:h-64 rounded-lg p-3 lg:p-5">
      <div className="flex flex-col flex-1 gap-2">
        <h1 className="text-slate-100 text-xs lg:text-sm">{data.title}</h1>
        <p className="text-violet-300 line-clamp-3 text-xs lg:text-sm">
          {data.desc}
        </p>
        <p className="text-slate-100 mt-auto items-center justify-center text-sm xl:text-base">
          <FontAwesomeIcon icon={faCalendarDays} className="me-3" />
          <span className="text-xs lg:text-base">
            {moment(new Date(data.date)).format('YYYY, MMMM DD')}
          </span>
        </p>
      </div>
      <div className="flex border-dashed border-violet-200 w-full border-t-2 justify-between pt-2 xl:pt-4">
        {button}
        <div className="flex gap-2 items-center justify-center">
          <div className="mr-1 cursor-pointer">{star}</div>
          <div className="cursor-pointer" onClick={(e) => handleDelete()}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className="w-4 h-4 lg:w-5 lg:h-5 text-slate-50 hover:text-slate-700"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(editCreate({ data }))}
          >
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="w-4 h-4 lg:w-5 lg:h-5 text-slate-50 hover:text-slate-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;

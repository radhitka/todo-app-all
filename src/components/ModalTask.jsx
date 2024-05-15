import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModals } from '../redux/slices/modalSlice';
import { addTodo } from '../redux/slices/todoSlice';
import Checkbox from './Checkbox';
import Input from './Input';
import Textarea from './Textarea';

function ModalTask(params) {
  const modal = useSelector((state) => state.modal.data);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    oldId: '',
    title: '',
    date: '',
    desc: '',
    check: false,
  });

  useEffect(() => {
    const { id, title, date, desc, important } = modal;

    setState({
      oldId: id,
      title: title,
      date: date ? moment(new Date(modal.date)).format('yyyy-MM-DD') : '',
      desc: desc,
      check: important,
    });
  }, [modal]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { oldId, title, date, desc, check } = state;

    var newData = {
      id: oldId || Math.floor(Math.random() * 100),
      title: title,
      date: date,
      desc: desc,
      important: check,
      done: false,
    };

    dispatch(addTodo(newData));

    handleClose();
  };

  function handleClose() {
    dispatch(closeModals());
  }

  return (
    <div>
      <dialog
        className={`modal cursor-default ${
          modal.isVisible ? 'modal-open' : ''
        }`}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">{modal?.name}</h3>
          <div className="modal-action flex-col">
            <form method="post" onSubmit={(e) => handleSubmit(e)}>
              <div className="flex flex-col gap-3">
                <div
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={(e) => handleClose()}
                >
                  ✕
                </div>
                <div className="w-full">
                  <Input
                    name="title"
                    required={true}
                    title="Judul"
                    type="text"
                    placeholder="Masukan Judul"
                    value={state.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <Input
                    name="date"
                    required={true}
                    title="Tanggal"
                    type="date"
                    placeholder="Masukan Judul"
                    value={state.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <Textarea
                    name="desc"
                    title="Deskripsi"
                    placeholder="Deskripsi"
                    onChange={handleChange}
                    value={state.desc}
                  />
                </div>
                <div className="">
                  <Checkbox
                    name="check"
                    title="Penting"
                    checked={state.check}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <button
                    className="btn btn-primary text-white w-full"
                    type="submit"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ModalTask;

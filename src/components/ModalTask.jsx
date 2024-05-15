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

  const [oldId, setNewId] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setNewId(modal.id);
    setTitle(modal.title);

    if (modal.date) {
      setDate(moment(new Date(modal.date)).format('yyyy-MM-DD'));
    } else {
      setDate('');
    }

    setDesc(modal.desc);
    setCheck(modal.important);
  }, [modal]);

  function onChangeDate(e) {
    setDate(e.target.value);
  }

  function onChangeCheck(e) {
    setCheck(e.target.checked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

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
                    required={true}
                    title="Judul"
                    type="text"
                    placeholder="Masukan Judul"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <Input
                    required={true}
                    title="Tanggal"
                    type="date"
                    placeholder="Masukan Judul"
                    value={date}
                    onChange={(e) => onChangeDate(e)}
                  />
                </div>
                <div className="w-full">
                  <Textarea
                    title="Deskripsi"
                    placeholder="Deskripsi"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                  />
                </div>
                <div className="">
                  <Checkbox
                    title="Penting"
                    checked={check}
                    onChange={(e) => onChangeCheck(e)}
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

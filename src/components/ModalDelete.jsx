import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/slices/modalDeleteSlice';
import { removeTodo } from '../redux/slices/todoSlice';

function ModalDelete(params) {
  const modal = useSelector((state) => state.modalDelete.data);
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(removeTodo({ id: modal.id }));

    hanldeClose();
  }

  function hanldeClose() {
    dispatch(closeModal());
  }

  return (
    <dialog className={`modal ${modal.isVisible ? 'modal-open' : ''}`}>
      <div className="modal-box w-80">
        <h3 className="font-bold text-lg">Ingin Menghapus?</h3>
        <p className="py-4">Data akan Hilang secara permanent!</p>
        <div className="modal-action justify-between">
          <form method="dialog" className="flex gap-2 ">
            <button
              className="btn btn-error text-white"
              onClick={(e) => handleDelete()}
            >
              Hapus
            </button>
            <button className="btn btn-primary" onClick={(e) => hanldeClose()}>
              Tidak
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ModalDelete;

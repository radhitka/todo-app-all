import { useDispatch, useSelector } from 'react-redux';
import { openCreate } from '../redux/slices/modalSlice';
import { closeMenu } from '../redux/slices/showMenuSlice';
import Menuside from './MenuSide';

function MenuSideMobile(params) {
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state) => ({
    showMenu: state.showMenu.data,
  }));

  return (
    <div>
      <div
        className={`bg-slate-100 h-screen w-60 xl:w-2/12 fixed z-20 left-0 ${
          showMenu.showRight ? 'block' : 'hidden'
        } lg:hidden `}
      >
        <div className="flex flex-col mt-8 gap-2">
          <div className="px-4 w-full">
            <button
              className="btn btn-primary text-xs w-full py-1"
              onClick={() => dispatch(openCreate())}
            >
              Tambah Tugas Baru
            </button>
          </div>
          <div className="mt-6">
            <Menuside />
          </div>
        </div>
      </div>
      {showMenu.showRight && (
        <div
          className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
          onClick={(e) => dispatch(closeMenu())}
        ></div>
      )}
    </div>
  );
}

export default MenuSideMobile;

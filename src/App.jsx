import { Route, Routes } from 'react-router-dom';
import MenuRightSide from './components/MenuRightSide';
import Menuside from './components/MenuSide';
import ModalDelete from './components/ModalDelete';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import { default as Home, default as HomeNew } from './pages/Home';

function App() {
  return (
    <>
      <div className="flex flex-row bg-slate-200 min-h-screen text-slate-600 mx-1 lg:mx-auto">
        <div className="bg-slate-100 h-screen w-60 xl:w-2/12 left-0 fixed hidden z-20 xl:block">
          <div className="h-full flex flex-col">
            <div className="my-8">
              <h1 className="font-bold uppercase text-center text-lg tracking-wide hidden xl:block">
                Todo List
              </h1>
            </div>
            <hr />
            <div className="mt-8">
              <Menuside />
            </div>
          </div>
        </div>
        <div className="pt-5 px-3 md:px-8 pb-8 min-h-screen w-full xl:w-8/12 m-auto">
          <Navbar />
          <NavbarMobile />
          <Routes>
            <Route
              path="/"
              element={<HomeNew title="Semua Tugas" type="all" />}
            />
            <Route
              path="/important"
              element={<HomeNew title="Tugas Penting" type="important" />}
            />
            <Route
              path="/completed"
              element={<Home title="Tugas Selesai" type="completed" />}
            />
            <Route
              path="/uncompleted"
              element={<Home title="Tugas Belum Selesai" type="uncompleted" />}
            />
            <Route path="/task/:id" element={<Home />} />
          </Routes>
        </div>
        <ModalDelete />
        <MenuRightSide />
      </div>
    </>
  );
}

export default App;

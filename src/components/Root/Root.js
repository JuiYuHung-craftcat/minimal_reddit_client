import { Outlet, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const Root = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Root;

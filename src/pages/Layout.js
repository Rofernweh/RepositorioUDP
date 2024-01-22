import { Outlet, Link } from "react-router-dom";
import '../layout.css'; // Import the CSS file
import pi from '../pi.svg';

const Layout = () => {
  return (
    <>
      <nav className='navbar'>
        <Link to="/"><img className="logo" src={pi} alt="logo" width="30px" /></Link>
        <div>
          <Link to="/Asignaturas">Asignaturas</Link>
          <Link to="/Recursos">Recursos</Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
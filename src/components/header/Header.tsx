import logo from '../../assets/logo.png';
import './Header.css';
function Header() {
  return (
    <nav className='navbar bg-body-tertiary col-12'>
      <div className='container-fluid col-6 col-sm-4 col-md-3 col-xl-2'>
        <img src={logo} alt='Logo' className='w-100' />
      </div>
    </nav>
  );
}

export default Header;

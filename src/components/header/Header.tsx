import logo from '../../assets/logo.png';
import './Header.css';
function Header() {
  return (
    <div className='d-flex flex-row justify-content-between align-items-center shadow p-2 mb-4 bg-body rounded'>
      <div className='col-3 col-md-2 col-xl-1'>
        <img src={logo} alt='Logo' className='w-100 shadow-lg rounded' />
      </div>
      <h2 className='title'>Expenses Tracker</h2>
    </div>
  );
}

export default Header;

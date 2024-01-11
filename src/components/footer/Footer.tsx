import { IoHeartSharp } from 'react-icons/io5';
import './Footer.css';
function Footer() {
  return (
    <div>
      <p className='text-center footer text-muted'>
        Made with{' '}
        <span className='text-danger heart'>
          <IoHeartSharp />
        </span>{' '}
        by Pedro Ramirez
      </p>
    </div>
  );
}

export default Footer;

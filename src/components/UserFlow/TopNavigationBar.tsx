import Link from 'next/link';
import NavBar from './NavBar';

const TopNavigationBar = () => {
  return (
    <header className="relative bg-[#f1f3f4] ">
     
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/images/background-image.png')` }}
      ></div>

      <NavBar></NavBar>
      
    </header>
  );
};

export default TopNavigationBar;

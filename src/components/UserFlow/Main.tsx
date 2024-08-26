
import Link from 'next/link';


const Main = () => {
  return (
    <header className=" bg-[#56C1FF] bg-cover bg-bottom bg-no-repeat text-white  py-28 sm:py-48 text-center p-10"
    style={{ backgroundImage: `url('/images/headerBg-false.png')` }}>
      <h1 className="text-5xl sm:text-7xl font-bold mb-4 custom-shadow text-center">
        Get your skills <br /> upgraded with us
      </h1>
      <p className="mb-6 text-center custom-shadow2">
      Transform your productivity and deliver high-quality solutions customers <br /> want, and respond to threats and opportunities.
      </p>
      <Link href="/userflow/signup">
        <span className=" h-14 w-auto inline-block bg-[#FDCE29] hover:bg-yellow-500 text-black text-center font-medium p-5 rounded
        md:w-96">
          Register to get Exclusive offers
        </span>
      </Link>
      <p className="mt-4"><b>500+</b> Free and paid courses</p>
    </header>
  );
};

export default Main;



// <header className="flex justify-between items-center p-5 bg-white shadow-md">
//       <div className="text-xl font-bold">Your Logo</div>
//       <nav>
//         <ul className="flex space-x-5">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Courses</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//       </nav>
//     </header>



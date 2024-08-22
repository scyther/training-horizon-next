import Categories from "@/Components/UserFlow/Categories";
import Main from "@/Components/UserFlow/Main";
import TopNavigationBar from "@/Components/UserFlow/TopNavigationBar";
import Testimonials from "@/Components/UserFlow/Testimonials";
import Footer from "@/Components/UserFlow/Footer";
import VacationCourses from "@/Components/UserFlow/VacationCourses";

export default function UserFlow() {
  return (
    <div className='bg-[#f7f7f7]'>
      <TopNavigationBar />
      <Main/>
      <Categories /> 
      <VacationCourses />
      <Testimonials />
      <Footer />
    </div>
  );
}
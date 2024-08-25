import Categories from "@/components/UserFlow/Categories";
import Main from "@/components/UserFlow/Main";
import TopNavigationBar from "@/components/UserFlow/TopNavigationBar";
import Testimonials from "@/components/UserFlow/Testimonials";
import Footer from "@/components/UserFlow/Footer";
import VacationCourses from "@/components/UserFlow/VacationCourses";

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
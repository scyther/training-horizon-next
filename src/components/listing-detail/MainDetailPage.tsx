"use client"
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
interface ChildComponentProps {
  category: string;
  title: string;
  price: number;
  mode: string;
  location: string;
  quantity: number;
  startDate: string;
  endDate: string;
  days: string;
  gender: string;
  startTime: string;
  endTime: string;
  ageGroup: string;
  description: string;
}

const  MainDetailPage = ()  =>{
  const tabs = ["Overview", "Instructors", "Curriculum", "Reviews", "FAQs"];
  const form = useSelector((state: RootState) => state.form);
  return (
    <>
        {/* Left Section: Image or Icon */}
        <div className="bg-white rounded-md p-4 mb-4">
          <div className="relative h-64 w-full">
            <img
              className="h-[25rem] w-[55rem]"
              src="/img/math.svg"
              alt="Calculator and Tools"
            />
          </div>
        </div>

        {/* Middle Section: Course Info */}
        <div className="flex-grow">
          <span className="bg-[#17A8FC] text-white p-1.5 rounded-3xl">
            {form.category}
          </span>
          <h2 className="text-2xl font-bold mt-2">{form.title}</h2>
          <p className="text-gray-600 mt-2">
            {form.description}
          </p>
          <div className="mt-4 flex space-x-6 text-sm text-gray-600">
            <span>50+ People Enrolled</span>
            <span>5 Projects</span>
            <span>37+ Reviews</span>
          </div>
          <div className="m-8">
            <button className="bg-[#17A8FC] text-white py-3 px-8 rounded mb-8 hover:bg-[#1782fc] shadow-xl">
              Learn {form.category}
            </button>
          </div>
        </div>
    </>
  );
}

export default MainDetailPage;

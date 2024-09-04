
function MainDetailPage() {
  const tabs = ["Overview", "Instructors", "Curriculum", "Reviews", "FAQs"];

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
            Education
          </span>
          <h2 className="text-2xl font-bold mt-2">Mathematics</h2>
          <p className="text-gray-600 mt-2">
            Mathematics is one of the most important subjects. Mathematics is a
            subject of numbers, shapes, data, measurements and also logical
            activities. It has a huge scope in every field of our life, such as
            medicine, engineering, finance, natural science, economics, etc. We
            are all surrounded by a mathematical world.
          </p>
          <div className="mt-4 flex space-x-6 text-sm text-gray-600">
            <span>50+ People Enrolled</span>
            <span>5 Projects</span>
            <span>37+ Reviews</span>
          </div>
          <div className="m-8">
            <button className="bg-[#17A8FC] text-white py-3 px-8 rounded mb-8 hover:bg-[#1782fc] shadow-xl">
              Learn Mathematics with Best Teachers
            </button>
          </div>
        </div>
    </>
  );
}

export default MainDetailPage;

"use client";

import { useSearchParams } from "next/navigation";

const PreviewPage = () => {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  if (!data) {
    return <div>No data provided</div>;
  }

  const parsedData = JSON.parse(data);

  const handlePost = () => {
    // Here you can send the data to the server for approval
    console.log(parsedData);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Preview Your Listing</h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">{parsedData.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {parsedData.category}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${parsedData.price}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {parsedData.location}
            </p>
            <p>
              <span className="font-semibold">Quantity:</span>{" "}
              {parsedData.quantity}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Start Date:</span>{" "}
              {parsedData.startDate}
            </p>
            <p>
              <span className="font-semibold">End Date:</span>{" "}
              {parsedData.endDate}
            </p>
            <p>
              <span className="font-semibold">Days:</span> {parsedData.days}
            </p>
            <p>
              <span className="font-semibold">Gender:</span> {parsedData.gender}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p>
              <span className="font-semibold">Start Time:</span>{" "}
              {parsedData.startTime}
            </p>
            <p>
              <span className="font-semibold">End Time:</span>{" "}
              {parsedData.endTime}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Age Group:</span>{" "}
              {parsedData.ageGroup}
            </p>
          </div>
        </div>

        <div>
          <p>
            <span className="font-semibold">Description:</span>
          </p>
          <p className="whitespace-pre-line">{parsedData.description}</p>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={handlePost}
        >
          Post Listing
        </button>
      </div>
    </div>
  );
};

export default PreviewPage;

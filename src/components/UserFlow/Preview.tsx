"use client";
import axios from "axios";

import { useSearchParams } from "next/navigation";

const PreviewPage = () => {
  const searchParams = useSearchParams();
  const listingId = searchParams.get("listingId");

  if (!listingId) {
    return <div>No data provided</div>;
  }

  const fetchListing = async (listingId: string) => {
    try {
      // Send a GET request to fetch the listing
      const response = await axios.get(`http://localhost:3005/api/v1/listing/listing/${listingId}`);
  
      // Extract the listing data from the response
      const listing = response.data.listing;
  
      console.log('Listing retrieved successfully:', listing);
      return listing;
    } catch (error) {
      console.error('Error fetching listing:');
      throw error;
    }
  };


  const listing = fetchListing(listingId);

  const handlePost = () => {
    // Here you can send the data to the server for approval
    fetchListing(listingId);
    console.log(listingId);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Preview Your Listing</h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">{}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {}
            </p>
            <p>
              <span className="font-semibold">Quantity:</span>{" "}
              {}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Start Date:</span>{" "}
              {}
            </p>
            <p>
              <span className="font-semibold">End Date:</span>{" "}
              {}
            </p>
            <p>
              <span className="font-semibold">Days:</span> {}
            </p>
            <p>
              <span className="font-semibold">Gender:</span> {}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p>
              <span className="font-semibold">Start Time:</span>{" "}
              {}
            </p>
            <p>
              <span className="font-semibold">End Time:</span>{" "}
              {}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Age Group:</span>{" "}
              {}
            </p>
          </div>
        </div>

        <div>
          <p>
            <span className="font-semibold">Description:</span>
          </p>
          <p className="whitespace-pre-line">{}</p>
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

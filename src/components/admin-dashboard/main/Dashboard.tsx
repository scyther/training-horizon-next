import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { ColDef , ICellRendererParams } from 'ag-grid-community';


const Dashboard = () => {


  const [rowData, setRowData] = useState<{ fname: string; lname: string; email: string; phone: string; }[]>([]);
  const [colDefs, setColDefs] = useState<ColDef[]>([
    { headerName:"Name", valueGetter: params => `${params.data.fname} ${params.data.lname}`  ,  headerClass:"font-bold border p-2 font-bold  text-md"},
    { headerName:"Email" , field: "email" , headerClass:"font-bold border p-2 font-bold  text-md"},
    { headerName:"Phone" , field: "phone" , headerClass:"font-bold border p-2 font-bold  text-md" },
    { headerName:"Action" , field: "action" ,  headerClass:"font-bold border p-2 font-bold  text-md",
      cellRenderer:(data:ICellRendererParams)=> <div className="flex gap-8">
      <button className='text-xl' onClick={() => handleApproveTrainer(data.data._id,data.data.email)}>✔</button>
      <button className='text-xl' onClick={() => handleRejectTrainer(data.data._id,data.data.email)}>✖</button>
    </div>},
  ])

  const [rowData2, setRowData2] = useState<{ title: string; price: string; location: string; mode: string; }[]>([]);
  const [colDefs2, setColDefs2] = useState<ColDef[]>([
    { headerName:"Title",  field:"title"  ,  headerClass:"font-bold border p-2 font-bold  text-md"},
    { headerName:"Price" , field: "price" , headerClass:"font-bold border p-2 font-bold  text-md"},
    { headerName:"Location" , field: "location" , headerClass:"font-bold border p-2 font-bold  text-md" },
    // { headerName:"Mode" , field: "mode" , headerClass:"font-bold border p-2 font-bold  text-md" },
    { headerName:"Action" , field: "action" ,  headerClass:"font-bold border p-2 font-bold  text-md",
      cellRenderer:(data:ICellRendererParams)=> <div className="flex gap-8">
      <button className='text-xl' onClick={() => handleApproveListing(data.data._id,data.data.title)}>✔</button>
      <button className='text-xl' onClick={() => handleRejectListing(data.data._id,data.data.title)}>✖</button>
    </div>},
  ])

 const handleRejectTrainer = async (trainerID:string,trainerEmail:string) => {
   const response = await axios.delete('http://localhost:3005/api/v1/admin/discard-trainer/'+ trainerID.toString());
  //  console.log(response.data);
   setRowData(prevData => prevData.filter(row => row.email != trainerEmail))
 }

 const handleApproveTrainer = async (trainerID:string,trainerEmail:string) =>{
    // console.log(trainerID);
    const response = await axios.post('http://localhost:3005/api/v1/admin/approve-trainer/'+ trainerID.toString());
    // console.log(response.data);
     setRowData(prevData => prevData.filter(row => row.email != trainerEmail))
 }


 const handleRejectListing = async (listingId:string,listingTitle:string) => {
  const response = await axios.delete('http://localhost:3005/api/v1/admin/discard-listing/'+ listingId.toString());
  //  console.log(response.data);
   setRowData2(prevData => prevData.filter(row => row.title != listingTitle))
 }


 const handleApproveListing = async (listingId:string,listingTitle:string) =>{
  // console.log(listingId);
  const response = await axios.post('http://localhost:3005/api/v1/admin/approve-listing/'+ listingId.toString());
  // console.log(response.data);
   setRowData2(prevData => prevData.filter(row => row.title != listingTitle))
}
  
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3005/api/v1/admin/pending-trainers');
      const res = await axios.get('http://localhost:3005/api/v1/admin/pending-listings');
      // console.log(response.data.pendingTrainers);
      // if(Array.isArray(response.data.data))
      setRowData(response.data.pendingTrainers)
      setRowData2(res.data.pendingListings);
      // else{ console.log("not an array")}
    } catch (error) {
     console.log("error");
    } 
  };
  fetchData();
  }, []); 

  



  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className=" mb-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/img/dashboard/admin.svg" alt="admin" />
          <div>
            <h2 className="text-xl font-semibold">James Thompson</h2>
            <p className="text-sm text-gray-500">Founder @ Training Horizons</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#17A8FC]"
          />
          <div className="text-gray-500 flex flex-row space-x-2">
            <span className="mr-2">16 June, 2023</span>
            <img src="/img/dashboard/notification.svg" alt="notificaiton" />
            <span className="bg-yellow-300 text-white px-2 py-1 rounded-full">
              4
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 ">
          <div className="flex flex-row gap-1">
            <img src="/img/dashboard/user.svg" alt="user" />
            <h3 className="text-sm text-gray-500 ">Users Engaged</h3>
          </div>

          <p className="text-2xl font-semibold">
            500 <span className="text-green-500 text-sm">+40</span>
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm text-gray-500 flex flex-row gap-1">
            <img src="/img/dashboard/transaction.svg" alt="transaction" />
            Total Transactions
          </h3>
          <p className="text-2xl font-semibold">
            $500 <span className="text-green-500 text-sm">+40</span>
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm text-gray-500 flex flex-row gap-1 ">
            <img src="/img/dashboard/revenue.svg" alt="" />
            Revenue Generated
          </h3>
          <p className="text-2xl font-semibold ">
            $500 <span className="text-green-500 text-sm">+40</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="col-span-2 bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Pending Trainers</h3>
          <div className="overflow-y-auto h-64">
                   <div className="ag-theme-quartz " style={{ height: '100%' , width: '100%'}}>
                        <AgGridReact rowData={rowData || []}  columnDefs={colDefs} />
                   </div>   
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Customer Reaction</h3>
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <img
                src="/img/dashboard/image.svg"
                alt="image"
                height={40}
                width={40}
              />
              <span className="font-semibold">Thomas</span>
            </div>
            <p className="text-sm text-gray-600">
              Everyone who knows buys crypto, that's a practical solution for
              funds transfer.
            </p>
            <div className="text-xs text-gray-500">👍 89 | 👎 12</div>
          </div>
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <img
                src="/img/dashboard/image.svg"
                alt="image"
                height={40}
                width={40}
              />
              <span className="font-semibold">Master Cat</span>
            </div>
            <p className="text-sm text-gray-600">
              Don't worry! When all other currencies are obsolete, every soul on
              earth will hold bitcoin!
            </p>
            <div className="text-xs text-gray-500">👍 128 | 👎 15</div>
          </div>
          <button className="w-full bg-[#17A8FC] text-white py-2 rounded-lg hover:bg-blue-600">
            Manage Reactions
          </button>
        </div>
        <div className="col-span-2 bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Pending Listings</h3>
          <div className="overflow-y-auto h-64">
                   <div className="ag-theme-quartz " style={{ height: '100%' , width: '100%'}}>
                        <AgGridReact rowData={rowData2 || []}  columnDefs={colDefs2} />
                   </div>   
          </div>
        </div>
      </div>
      

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Top Courses</h3>
          <ul>
            <li className="flex justify-between py-2">
              <span>Implementing SAFe</span>
              <span className="text-gray-600">$30.00</span>
            </li>
            {/* Repeat more items as needed */}
          </ul>
          <button className="mt-4 w-full bg-[#17A8FC] text-white py-2 rounded-lg hover:bg-blue-600">
            + Add New Courses
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Generate Coupon</h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Enter coupon name"
              className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Offer Value"
              className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-[#17A8FC] text-white py-2 rounded-lg hover:bg-blue-600">
              Generate
            </button>
          </div>
        </div>

        {/* <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Top Trainers</h3>
          <ul>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-2">
                <img
                  src="/img/dashboard/image.svg"
                  alt="image"
                  height={40}
                  width={40}
                />
                <span>Devon Laratte</span>
              </div>
              <div className="text-yellow-500">⭐ 4.7/5.0 (8,006)</div>
            </li>

          </ul>
          <button className="mt-4 w-full bg-[#17A8FC] text-white py-2 rounded-lg hover:bg-blue-600">
            View all
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;

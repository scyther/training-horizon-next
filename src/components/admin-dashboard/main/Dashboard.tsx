import React from "react";

const Dashboard = () => {
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
          <h3 className="text-lg font-semibold mb-4">Recent Transaction</h3>
          <div className="overflow-y-auto h-64">
            <table className="w-full text-left">
              <thead className="sticky top-0 bg-white">
                <tr>
                  <th className="p-2">S.No</th>
                  <th className="p-2">User name</th>
                  <th className="p-2">Batch name</th>
                  <th className="p-2">Teacher name</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">1</td>
                  <td className="py-2 flex items-center space-x-2">
                    <img
                      src="/img/dashboard/image.svg"
                      alt="image"
                      height={40}
                      width={40}
                    />
                    <span>Devon Laratte</span>
                  </td>
                  <td className="py-2">Implementing SAFe</td>
                  <td className="py-2">Mr. Adrian Daren & Rutherford..</td>
                  <td className="py-2">$30.00</td>
                  <td className="py-2 text-green-500">Success</td>
                </tr>
                <tr className="border-t bg-blue-50">
                  <td className="p-2">2</td>
                  <td className="py-2 flex items-center space-x-2">
                    <img
                      src="/img/dashboard/image.svg"
                      alt="image"
                      height={40}
                      width={40}
                    />
                    <span>Customer id #99373738383</span>
                  </td>
                  <td className="py-2">Implementing SAFe</td>
                  <td className="py-2">Mr. Adrian Daren & Rutherford..</td>
                  <td className="py-2">$30.00</td>
                  <td className="py-2 text-red-500">Failed</td>
                </tr>
                {/* Repeat more rows as needed */}
                <tr className="border-t bg-blue-50">
                  <td className="p-2">3</td>
                  <td className="py-2 flex items-center space-x-2">
                    <img
                      src="/img/dashboard/image.svg"
                      alt="image"
                      height={40}
                      width={40}
                    />
                    <span>Customer id #99373738383</span>
                  </td>
                  <td className="py-2">Implementing SAFe</td>
                  <td className="py-2">Mr. Adrian Daren & Rutherford..</td>
                  <td className="py-2">$30.00</td>
                  <td className="py-2 text-red-500">Failed</td>
                </tr>
                <tr className="border-t bg-blue-50">
                  <td className="p-2">4</td>
                  <td className="py-2 flex items-center space-x-2">
                    <img
                      src="/img/dashboard/image.svg"
                      alt="image"
                      height={40}
                      width={40}
                    />
                    <span>Customer id #99373738383</span>
                  </td>
                  <td className="py-2">Implementing SAFe</td>
                  <td className="py-2">Mr. Adrian Daren & Rutherford..</td>
                  <td className="py-2">$30.00</td>
                  <td className="py-2 text-red-500">Failed</td>
                </tr>
                <tr className="border-t bg-blue-50">
                  <td className="p-2">5</td>
                  <td className="py-2 flex items-center space-x-2">
                    <img
                      src="/img/dashboard/image.svg"
                      alt="image"
                      height={40}
                      width={40}
                    />
                    <span>Customer id #99373738383</span>
                  </td>
                  <td className="py-2">Implementing SAFe</td>
                  <td className="py-2">Mr. Adrian Daren & Rutherford..</td>
                  <td className="py-2">$30.00</td>
                  <td className="py-2 text-red-500">Failed</td>
                </tr>
                <tr className="border-t bg-blue-50">
                  <td className="p-2">6</td>
                  <td className="py-2 flex items-center space-x-2">
                    <img
                      src="/img/dashboard/image.svg"
                      alt="image"
                      height={40}
                      width={40}
                    />
                    <span>Customer id #99373738383</span>
                  </td>
                  <td className="py-2">Implementing SAFe</td>
                  <td className="py-2">Mr. Adrian Daren & Rutherford..</td>
                  <td className="py-2">$30.00</td>
                  <td className="py-2 text-red-500">Failed</td>
                </tr>
              </tbody>
            </table>
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

        <div className="bg-white rounded-lg shadow p-4">
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
            {/* Repeat more items as needed */}
          </ul>
          <button className="mt-4 w-full bg-[#17A8FC] text-white py-2 rounded-lg hover:bg-blue-600">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

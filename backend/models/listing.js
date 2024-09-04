const mongoose = require("../config/db");

const listingSchema = new mongoose.Schema({
  trainerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    // maxLength:30,
  },
  price: {
    type: String,
  },
  quantity: {
    type: String,
    // required:true,
  },
  startDate: {
    type: String,
    // required:true,
  },
  endDate: {
    type: String,
  },
  days: {
    type: String,
    required: true,
    // minLength:1,
  },
  gender: {
    type: String,
    required: true,
    // maxLength:10,
    trim: true,
  },
  startTime: {
    type: String,
    // required:true,
  },
  endTime: {
    type: String,
    // required:true,
  },
  ageGroup: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    // minLength:10,
  },
  isApproved: { type: Boolean, default: false },
});

const Listing = mongoose.model("listings", listingSchema);

module.exports = {
  Listing,
};
{/* <table className="w-full text-left">
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
            </table> */}
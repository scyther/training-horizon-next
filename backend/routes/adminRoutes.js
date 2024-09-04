const express = require('express');
const ac = require("../controllers/adminController");
// const bodyParser = require('body-parser');
// const { Listing } = require("../models/Listing");

// const Trainer = require("../models/Trainer");
// const app = express();
// // const port = 3000;

// app.use(express.json());
// app.use(bodyParser.json());

const router = express.Router();



// Route to view all courses
router.get('/listings' , ac.getListings);

// Route to view pending courses
router.get('/pending-listings' , ac.getPendingListings);

// Route to approve a pending course
router.post('/approve-listing/:id' , ac.approvePendingLsitings);

// Route to discard a pending course
router.delete('/discard-listing/:id' , ac.discardPendingListings );

// Route to view all teachers
router.get('/trainers', ac.getTrainers);

// Route to view pending teachers
router.get('/pending-trainers', ac.getPendingTrainers);

// Route to approve a pending teacher
router.post('/approve-trainer/:id' , ac.approvePendingTrainers);

// Route to discard a pending teacher
router.delete('/discard-trainer/:id' , ac.discardPendingTrainers)



module.exports = router;









// const authorizeRole = (roles) => {
//     return (req, res, next) => {
//         if (!roles.includes(req.headers.role)) return res.sendStatus(403).json({msg:"failed"});
//         next();
//     };
// };

// app.use(authorizeRole(['admin']));
// const getListingSchema = zod.object({
//   trainerId: zod.string(),
//   category: zod.string(),
//   title: zod.string(),
//   price: zod.string(),
//   location: zod.string(),
//   quantity: zod.string().optional(),
//   startDate: zod.string().optional(),
//   endDate: zod.string().optional(),
//   days: zod.string(),
//   gender: zod.string(),
//   startTime: zod.string().optional(),
//   endTime: zod.string().optional(),
//   ageGroup: zod.string(),
//   description: zod.string(),
// });
// let pendingCourses = [{
//   id:'1',
//   course:'full stack by harkirat',
//   price:5999,
//   isPublished:'false'
// }];
// let courses = [
//                  {
//                      id:'4',
//                      course:'full stack by harkirat',
//                      price:5999,
//                      isPublished:'true'
//                  },
//                  {
//                      id:2,
//                      course:'full stack by harkirat',
//                      price:5999,
//                      isPublished:'true'
//                  },
//                  {
//                      id:3,
//                      course:'full stack by harkirat',
//                      price:5999,
//                      isPublished:'true'
//                  }
//             ];
// let pendingTeachers = [{
//                        id:'1',
//                        name:'tushar singh',
//                        rank:3,
//                        rating:4.5
//                      },
//                    ];
// let teachers = [
//                 {
//                   id:3,
//                   name:'sarthak singh',
//                   rank:1,
//                   rating:5
//                 },
//                 {
//                   id:4,
//                   name:'harkirat singh',
//                   rank:2,
//                   rating:4.8
//                 }
                
//               ];




// router.get('/listing', async (req, res) => {
//   res.json(courses);
// const filter = req.query.filter || "";
// const listings = await Listing.find({
//     $or: [
//       {
//         category: {
//           $regex: filter,
//         },
//       },
//       {
//         title: {
//           $regex: filter,
//         },
//       },
//     ],
//   });

//   res.status(200).json({
//     user: listings.map((listing) => ({
//       listId: listing._id,
//       trainerId: listing.trainerId,
//       category: listing.category,
//       title: listing.title,
//       price: listing.price,
//       location: listing.location,
//       quantity: listing.quantity,
//       startDate: listing.startDate,
//       endDate: listing.endDate,
//       days: listing.days,
//       gender: listing.gender,
//       startTime: listing.startTime,
//       endTime: listing.endTime,
//       ageGroup: listing.ageGroup,
//       description: listing.description,
//     })),
//   });
// });


// router.get('/pending-courses', (req, res) => {
//   res.json(pendingCourses);
// });

// router.post('/approve-course/:id', (req, res) => {
//   const courseId = req.params.id;
//   console.log(courseId)
//   const courseIndex = pendingCourses.findIndex(course => course.id === courseId);

//   if (courseIndex > -1) {
//     const course = pendingCourses.splice(courseIndex, 1)[0];
    
//      course.isPublished = 'true';
//      console.log(course);
//     courses.push(course);
//     res.json({ message: 'Course approved', course });
//   } else {
//     res.status(404).json({ message: 'Course not found' });
//   }
// });

// router.delete('/discard-course/:id', (req, res) => {
//   const courseId = req.params.id;
//   const courseIndex = pendingCourses.findIndex(course => course.id === courseId);

//   if (courseIndex > -1) {
//     const course = pendingCourses.splice(courseIndex, 1)[0];
//     res.json({ message: 'Course discarded', course });
//   } else {
//     res.status(404).json({ message: 'Course not found' });
//   }
// });


// router.post('/approve-teacher/:id', (req, res) => {
//   const teacherId = req.params.id;
// //   console.log(teacherId)
//   const teacherIndex = pendingTeachers.findIndex(teacher => teacher.id === teacherId);
// //   console.log(teacherIndex)
//   if (teacherIndex > -1) {
//     const teacher = pendingTeachers.splice(teacherIndex, 1)[0];
//     teachers.push(teacher);
//     res.json({ message: 'Teacher approved', teacher });
//   } else {
//     res.status(404).json({ message: 'Teacher not found' });
//   }
// });

// router.delete('/discard-teacher/:id', (req, res) => {
//   const teacherId = req.params.id;
//   const teacherIndex = pendingTeachers.findIndex(teacher => teacher.id === teacherId);

//   if (teacherIndex > -1) {
//     const teacher = pendingTeachers.splice(teacherIndex, 1)[0];
//     res.json({ message: 'Teacher discarded', teacher });
//   } else {
//     res.status(404).json({ message: 'Teacher not found' });
//   }
// });

// Example route to add a pending course (for testing)
// router.post('/add-pending-course', (req, res) => {
//   const newCourse = req.body;
//   pendingCourses.push({ ...newCourse, id: String(pendingCourses.length + 1) });
//   res.json({ message: 'Pending course added', course: newCourse });
// });

// Example route to add a pending teacher (for testing)
// router.post('/add-pending-teacher', (req, res) => {
//   const newTeacher = req.body;
//   pendingTeachers.push({ ...newTeacher, id: String(pendingTeachers.length + 1) });
//   res.json({ message: 'Pending teacher added', teacher: newTeacher });
// });

// app.listen(port, () => {
//   console.log(`Admin panel server running on http://localhost:${port}`);
// });

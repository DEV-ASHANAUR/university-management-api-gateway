import express from 'express';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { buildingRoutes } from '../modules/building/building.route';
import { roomRoutes } from '../modules/room/room.route';
import { courseRoutes } from '../modules/course/course.route';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.route';

const router = express.Router();

const moduleRoutes = [
  {
    path:'/academic-faculties',
    routes: academicFacultyRoutes
  },
  {
    path: '/academic-semesters',
    routes: academicSemesterRoutes
  },
  {
    path: '/academic-departments',
    routes: academicDepartmentRoutes
  },
  {
    path: '/buildings',
    routes: buildingRoutes
  },
  {
    path: '/rooms',
    routes: roomRoutes
  },
  {
    path: '/courses',
    routes: courseRoutes
  },
  {
    path: '/offered-courses',
    routes: offeredCourseRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;

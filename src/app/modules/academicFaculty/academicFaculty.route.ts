import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/',AcademicFacultyController.getAllFromDB);
router.get('/:id',AcademicFacultyController.getByIdFromDB);

router.post('/',validateRequest(AcademicFacultyValidation.create),auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),AcademicFacultyController.insertIntoDB);

router.patch('/:id',validateRequest(AcademicFacultyValidation.update),auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),AcademicFacultyController.updateOneIntoDB);

router.delete('/:id',auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),AcademicFacultyController.deleteOneFromDB);

export const academicFacultyRoutes = router;
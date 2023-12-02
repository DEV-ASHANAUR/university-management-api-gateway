import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/',AcademicDepartmentController.getAllFromDB);
router.get('/:id',AcademicDepartmentController.getByIdFromDB);

router.post('/',validateRequest(AcademicDepartmentValidation.create),auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),AcademicDepartmentController.insertIntoDB);

router.patch('/:id',validateRequest(AcademicDepartmentValidation.update),auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),AcademicDepartmentController.updateOneIntoDB);

router.delete('/:id',auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),AcademicDepartmentController.deleteOneFromDB);

export const academicDepartmentRoutes = router;
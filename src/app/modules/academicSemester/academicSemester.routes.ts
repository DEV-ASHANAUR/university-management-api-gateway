import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { AcademiicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.get('/',auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),AcademiicSemesterController.getAllFromDB);

router.get('/:id',auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),AcademiicSemesterController.findById);

router.post('/',auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),AcademiicSemesterController.insertIntoDB);

router.delete('/:id',auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),AcademiicSemesterController.deleteOneFromDB);

router.patch('/:id',AcademiicSemesterController.updateOneIntoDB);

export const academicSemesterRoutes = router;
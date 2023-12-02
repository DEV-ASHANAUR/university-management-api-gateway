import express from 'express';
import { OfferedCourseController } from './offeredCourse.controller';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseValidation } from './offeredCourse.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/',OfferedCourseController.getAllFromDB);
router.get('/:id',OfferedCourseController.getByIdFromDB);

router.post('/',validateRequest(OfferedCourseValidation.create),auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),OfferedCourseController.insertIntoDB);

router.patch('/:id',validateRequest(OfferedCourseValidation.update),auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),OfferedCourseController.updateOneIntoDB);

router.delete('/:id',auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),OfferedCourseController.deleteOneFromDB);

export const offeredCourseRoutes = router;
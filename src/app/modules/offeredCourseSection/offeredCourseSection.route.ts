import express from 'express';
import { OfferedCourseSectionController } from './offeredCourseSection.controller';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseSectionValidation } from './offeredCourseSection.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/',OfferedCourseSectionController.getAllFromDB);
router.get('/:id',OfferedCourseSectionController.getByIdFromDB);

router.post('/',validateRequest(OfferedCourseSectionValidation.create),auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),OfferedCourseSectionController.insertIntoDB);

router.patch('/:id',validateRequest(OfferedCourseSectionValidation.update),auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),OfferedCourseSectionController.updateOneIntoDB);

router.delete('/:id',auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),OfferedCourseSectionController.deleteOneFromDB);

export const offeredCourseSectionRoutes = router;
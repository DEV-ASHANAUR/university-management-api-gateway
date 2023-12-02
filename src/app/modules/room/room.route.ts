import express from 'express';
import { RoomController } from './room.controller';
import validateRequest from '../../middlewares/validateRequest';
import { RoomValidation } from './room.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/',RoomController.getAllFromDB);
router.get('/:id',RoomController.getByIdFromDB);

router.post('/',validateRequest(RoomValidation.create),auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),RoomController.insertIntoDB);

router.patch('/:id',validateRequest(RoomValidation.update),auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),RoomController.updateOneIntoDB);

router.delete('/:id',auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),RoomController.deleteOneFromDB);

export const roomRoutes = router;
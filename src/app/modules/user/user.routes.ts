import express,{Request,Response,NextFunction} from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { FileUploaderHelper } from '../../../helpers/FileUploadHelper'
import { UserValidation } from './user.validations'
import { UserController } from './user.controller'

const router = express.Router()

router.post("/create-student",auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.SUPER_ADMIN),FileUploaderHelper.upload.single('file'),(req:Request,res:Response,next:NextFunction)=>{
  req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data))
  return UserController.createStudent(req,res,next);
})

router.post("/create-faculty",auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.SUPER_ADMIN),FileUploaderHelper.upload.single('file'),(req:Request,res:Response,next:NextFunction)=>{
  req.body = UserValidation.createFaculty.parse(JSON.parse(req.body.data))
  return UserController.createFaculty(req,res,next);
})

router.post("/create-admin",auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.SUPER_ADMIN),FileUploaderHelper.upload.single('file'),(req:Request,res:Response,next:NextFunction)=>{
  req.body = UserValidation.createAdmin.parse(JSON.parse(req.body.data))
  return UserController.createAdmin(req,res,next);
})

export const userRoutes = router
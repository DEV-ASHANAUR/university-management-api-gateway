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



export const userRoutes = router
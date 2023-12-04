import { Request } from 'express';
import { IUploadFile } from '../../../interfaces/file';
import { FileUploaderHelper } from '../../../helpers/FileUploadHelper';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploaderHelper.uploadToCloudinary(file);
  if (uploadedImage) {
    req.body.student.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  const academicDepartmentResponse = await AuthService.get(`/academic-departments?syncId=${academicDepartment}`);

  if(academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)){
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id
  }

  const academicFacultyResponse = await AuthService.get(`/academc-faculties?syncId=${academicFaculty}`);

  if(academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)){
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id
  }

  const academicSemesterResponse = await AuthService.get(`/academic-semester?syncId=${academicSemester}`);

  if(academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)){
    req.body.student.academicSemester = academicSemesterResponse.data[0].id
  }

  const response:IGenericResponse = await AuthService.post('/users/create-student',req.body,{
    headers:{
      Authorization:req.headers.authorization
    }
  });

  return response

};

export const UserService = {
  createStudent
};

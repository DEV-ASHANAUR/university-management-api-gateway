import { NextFunction, Request, Response } from "express";
import { AcademicFacultyService } from "./academicFaculty.service";
import sendResponse from "../../../shared/response";

const insertIntoDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await AcademicFacultyService.insertIntoDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const getAllFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAllFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const getByIdFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await AcademicFacultyService.getByIdFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const updateOneIntoDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await AcademicFacultyService.updateOneIntoDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const deleteOneFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await AcademicFacultyService.deleteOneFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

export const AcademicFacultyController = {
  getAllFromDB,
  getByIdFromDB,
  insertIntoDB,
  updateOneIntoDB,
  deleteOneFromDB,
}

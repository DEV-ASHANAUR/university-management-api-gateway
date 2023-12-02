import { NextFunction, Request, Response } from "express";
import { OfferedCourseService } from "./offeredCourse.service";
import sendResponse from "../../../shared/response";

const insertIntoDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await OfferedCourseService.insertIntoDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const getAllFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await OfferedCourseService.getAllFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const getByIdFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await OfferedCourseService.getByIdFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const updateOneIntoDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await OfferedCourseService.updateOneIntoDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const deleteOneFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await OfferedCourseService.deleteOneFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

export const OfferedCourseController = {
  getAllFromDB,
  getByIdFromDB,
  insertIntoDB,
  updateOneIntoDB,
  deleteOneFromDB,
}

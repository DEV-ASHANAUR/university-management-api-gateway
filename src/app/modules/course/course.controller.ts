import { NextFunction, Request, Response } from "express";
import { CourseService } from "./course.service";
import sendResponse from "../../../shared/response";

const insertIntoDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await CourseService.insertIntoDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const getAllFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await CourseService.getAllFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const getByIdFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await CourseService.getByIdFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const updateOneIntoDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await CourseService.updateOneIntoDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const deleteOneFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await CourseService.deleteOneFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

export const CourseController = {
  getAllFromDB,
  getByIdFromDB,
  insertIntoDB,
  updateOneIntoDB,
  deleteOneFromDB,
}

import { NextFunction, Request, Response } from "express";
import { OfferedCourseSectionService } from "./offeredCourseSection.service";
import sendResponse from "../../../shared/response";

const insertIntoDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.insertIntoDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const getAllFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.getAllFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const getByIdFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.getByIdFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const updateOneIntoDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.updateOneIntoDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const deleteOneFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.deleteOneFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

export const OfferedCourseSectionController = {
  getAllFromDB,
  getByIdFromDB,
  insertIntoDB,
  updateOneIntoDB,
  deleteOneFromDB,
}

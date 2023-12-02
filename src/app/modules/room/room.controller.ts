import { NextFunction, Request, Response } from "express";
import { RoomService } from "./room.service";
import sendResponse from "../../../shared/response";

const insertIntoDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await RoomService.insertIntoDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const getAllFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await RoomService.getAllFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const getByIdFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await RoomService.getByIdFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const updateOneIntoDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await RoomService.updateOneIntoDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const deleteOneFromDB =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await RoomService.deleteOneFromDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

export const RoomController = {
  getAllFromDB,
  getByIdFromDB,
  insertIntoDB,
  updateOneIntoDB,
  deleteOneFromDB,
}

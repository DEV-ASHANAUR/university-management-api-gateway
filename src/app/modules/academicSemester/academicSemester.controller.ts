import { NextFunction, Request, Response } from 'express';
import { AcademiicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademiicSemesterService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademiicSemesterService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademiicSemesterService.findById(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademiicSemesterService.deleteOneFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademiicSemesterService.updateOneIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademiicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  findById,
  deleteOneFromDB
};

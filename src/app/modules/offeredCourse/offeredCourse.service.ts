import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(`/offered-courses`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response:IGenericResponse = await HttpService.get(`/offered-courses`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const {id} = req.params;
  const response: IGenericResponse = await HttpService.get(`/offered-courses/${id}`,{
    headers:{
      Authorization: req.headers.authorization,
    }
  })
  return response;
}


const updateOneIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const {id} = req.params;
  const response: IGenericResponse = await HttpService.patch(`/offered-courses/${id}`,req.body,{
    headers:{
      Authorization: req.headers.authorization,
    }
  })
  return response;
}

const deleteOneFromDB = async (req: Request): Promise<IGenericResponse> => {
  const {id} = req.params;
  const response: IGenericResponse = await HttpService.delete(`/offered-courses/${id}`,{
    headers:{
      Authorization: req.headers.authorization,
    }
  })
  return response;
}

export const OfferedCourseService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneIntoDB,
  deleteOneFromDB
}
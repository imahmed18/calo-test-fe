/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable class-methods-use-this */
import { endpoints } from '../../../api/api-end-points';
import commonAPI from '../../../api/common';

class JobService {
  get(queryParams) {
    return commonAPI.get(`/${endpoints.job.get}${queryParams || ''}`);
  }

  getById(id) {
    return commonAPI.get(`/${endpoints.job.getByID}/${id}`);
  }

  post(data) {
    return commonAPI.post(`/${endpoints.job.post}`, data);
  }
}

export default new JobService();

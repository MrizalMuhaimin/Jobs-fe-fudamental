import { makeCallApi } from '../../utils/';

export async  function getAllJobs (params) {
    return await makeCallApi({
      method: 'GET',
      url: '/api/recruitment/positions.json',
      params
    });
  }
import { makeCallApi } from '../../utils/';

export function getAllComments (params) {
    return makeCallApi({
      method: 'GET',
      url: '/api/recruitment/positions.json',
      params
    });
  }
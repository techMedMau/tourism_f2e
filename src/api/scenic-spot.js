import base from './base';
import axios from '@/request/http';

const scenicSpot = {
  getAll() {
    return axios.get(
      `${base.main}/v2/Rail/TRA/Station?$top=10&$format=JSON`,
    );  
  },
}

export default scenicSpot;
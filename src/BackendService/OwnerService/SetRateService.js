import axios from "axios";
import authHeader from "../../services/auth-header";

const SETRATES_BASE_REST_API_URL = 'http://localhost:8081/Owner/';

class SetRateService {

  getAllSetRates() {
    return axios.get(SETRATES_BASE_REST_API_URL + 'setrateslist', { headers: authHeader() })
  }
  createSetRates(setrate) {
    return axios.post(SETRATES_BASE_REST_API_URL + 'setratessave', setrate, { headers: authHeader() })
  }

  getsetrateById(seterateId) {
    return axios.get(SETRATES_BASE_REST_API_URL + 'setrates/' + seterateId, { headers: authHeader() });
  }
  updateSetRates(seterateId, setrate) {
    return axios.put(SETRATES_BASE_REST_API_URL + 'editsetrate/' + seterateId, setrate, { headers: authHeader() });
  }
  deleteSetRates(seterateId) {
    return axios.delete(SETRATES_BASE_REST_API_URL + 'deletesetrate/' + seterateId, { headers: authHeader() });
  }

}

export default new SetRateService();

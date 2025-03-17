import axios from 'axios'
import authHeader from "../../services/auth-header";

const GUEST_BASE_REST_API_URL = 'http://localhost:8081/Owner/';

class GuestService {

    getAllGuest() {
        return axios.get(GUEST_BASE_REST_API_URL + 'restlistguest', { headers: authHeader() })
    }
    createGuest(guest) {
        return axios.post(GUEST_BASE_REST_API_URL + 'restguestsave', guest, { headers: authHeader() })
    }
    getGuestById(guestId) {
        return axios.get(GUEST_BASE_REST_API_URL + 'restguest/' + guestId, { headers: authHeader() });
    }
    updateGuest(guestId, guest) {
        return axios.put(GUEST_BASE_REST_API_URL + 'updateguest/' + guestId, guest, { headers: authHeader() });
    }
    deleteGuest(guestId) {
        return axios.delete(GUEST_BASE_REST_API_URL + 'deleteguest/' + guestId, { headers: authHeader() });
    }
}
export default new GuestService();
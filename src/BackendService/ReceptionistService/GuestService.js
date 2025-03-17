import axios from 'axios'
import ReceptionistauthHeader from '../../services/Receptionist-header';

const GUEST_BASE_REST_API_URL = 'http://localhost:8084/Receptionist/';

class GuestService {

    getAllGuest() {
        return axios.get(GUEST_BASE_REST_API_URL + 'guest/list', { headers: ReceptionistauthHeader() })
    }
    createGuest(guest) {
        return axios.post(GUEST_BASE_REST_API_URL + 'guest/save', guest, { headers: ReceptionistauthHeader() })
    }
    getGuestById(guestId) {
        return axios.get(GUEST_BASE_REST_API_URL + 'guest/' + guestId, { headers: ReceptionistauthHeader() });
    }
    updateGuest(guestId, guest) {
        return axios.put(GUEST_BASE_REST_API_URL + 'guest/edit/' + guestId, guest, { headers: ReceptionistauthHeader() });
    }
    deleteGuest(guestId) {
        return axios.delete(GUEST_BASE_REST_API_URL + 'guest/delete/' + guestId, { headers: ReceptionistauthHeader() });
    }
}
export default new GuestService();
import axios from 'axios'
import ManagerauthHeader from '../../services/Manager-header';

const RESERVATION_BASE_REST_API_URL = 'http://localhost:8082/Manager/';

class ReservationService {

    getAllReservation() {
        return axios.get(RESERVATION_BASE_REST_API_URL + 'restreservationlist', { headers: ManagerauthHeader() })
    }
    createRervation(reservation) {
        return axios.post(RESERVATION_BASE_REST_API_URL + 'restreservation', reservation, { headers: ManagerauthHeader() })
    }
    getReservationById(reservationId) {
        return axios.get(RESERVATION_BASE_REST_API_URL + 'find/' + reservationId, { headers: ManagerauthHeader() });
    }
    updateReservationbyId(reservationId, reservation) {
        return axios.put(RESERVATION_BASE_REST_API_URL + 'updatereservation/' + reservationId, reservation, { headers: ManagerauthHeader() });
    }
    deleteRservationById(reservationId) {
        return axios.delete(RESERVATION_BASE_REST_API_URL + 'deletereservation/' + reservationId, { headers: ManagerauthHeader() });
    }
}
export default new ReservationService();
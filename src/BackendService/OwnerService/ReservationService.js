import axios from 'axios'
import authHeader from "../../services/auth-header";

const RESERVATION_BASE_REST_API_URL = 'http://localhost:8081/Owner/';

class ReservationService {

    getAllReservation() {
        return axios.get(RESERVATION_BASE_REST_API_URL + 'find', { headers: authHeader() })
    }
    createRervation(reservation) {
        return axios.post(RESERVATION_BASE_REST_API_URL + 'restreservation', reservation, { headers: authHeader() })
    }
    getReservationById(reservationId) {
        return axios.get(RESERVATION_BASE_REST_API_URL + 'find/' + reservationId, { headers: authHeader() });
    }
    updateReservationbyId(reservationId, reservation) {
        return axios.put(RESERVATION_BASE_REST_API_URL + 'updatereservation/' + reservationId, reservation, { headers: authHeader() });
    }
    deleteRservationById(reservationId) {
        return axios.delete(RESERVATION_BASE_REST_API_URL + 'deletereservation/' + reservationId, { headers: authHeader() });
    }
}
export default new ReservationService();
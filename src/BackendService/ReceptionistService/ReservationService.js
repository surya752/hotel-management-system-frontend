import axios from 'axios'
import ReceptionistauthHeader from "../../services/Receptionist-header"

const RESERVATION_BASE_REST_API_URL = 'http://localhost:8084/Receptionist/';

class ReservationService {

    getAllReservation() {
        return axios.get(RESERVATION_BASE_REST_API_URL + 'reservation/list', { headers: ReceptionistauthHeader() })
    }
    createRervation(reservation) {
        return axios.post(RESERVATION_BASE_REST_API_URL + 'reservation/save', reservation, { headers: ReceptionistauthHeader() })
    }
    getReservationById(reservationId) {
        return axios.get(RESERVATION_BASE_REST_API_URL + 'reservation/' + reservationId, { headers: ReceptionistauthHeader() });
    }
    updateReservationbyId(reservationId, reservation) {
        return axios.put(RESERVATION_BASE_REST_API_URL + 'reservation/edit/' + reservationId, reservation, { headers: ReceptionistauthHeader() });
    }
    deleteRservationById(reservationId) {
        return axios.delete(RESERVATION_BASE_REST_API_URL + 'reservation/delete/' + reservationId, { headers: ReceptionistauthHeader() });
    }
}
export default new ReservationService();
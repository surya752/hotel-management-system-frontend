import axios from 'axios'
import ReceptionistauthHeader from "../../services/Receptionist-header"

const PAYMENT_BASE_REST_API_URL = 'http://localhost:8084/Receptionist/';

class PaymentService {

    getAllPayment() {
        return axios.get(PAYMENT_BASE_REST_API_URL + 'payment/list', { headers: ReceptionistauthHeader() })
    }
    createPayment(payment) {
        return axios.post(PAYMENT_BASE_REST_API_URL + 'payment/save', payment, { headers: ReceptionistauthHeader() })
    }
    getPaymentById(paymentId) {
        return axios.get(PAYMENT_BASE_REST_API_URL + 'payment/' + paymentId, { headers: ReceptionistauthHeader() });
    }


}
export default new PaymentService();

import axios from 'axios'
import ReceptionistauthHeader from '../../services/Receptionist-header';

const BILL_BASE_REST_API_URL = 'http://localhost:8084/Receptionist/';

class BillService {

    getAllBill() {
        return axios.get(BILL_BASE_REST_API_URL + 'billlist', { headers: ReceptionistauthHeader() })
    }
    createBill(bill) {
        return axios.post(BILL_BASE_REST_API_URL + 'billsave', bill, { headers: ReceptionistauthHeader() })
    }
    getBillById(billId) {
        return axios.get(BILL_BASE_REST_API_URL + 'bill/' + billId, { headers: ReceptionistauthHeader() });
    }

}
export default new BillService();
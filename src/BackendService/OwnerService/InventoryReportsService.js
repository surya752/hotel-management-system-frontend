import axios from 'axios'
import authHeader from "../../services/auth-header";

const Inventory_BASE_REST_API_URL = 'http://localhost:8081/Owner/';

class InventoryRepotrsService {

    getAllInvenroryReports() {
        return axios.get(Inventory_BASE_REST_API_URL + 'rest/listinreports', { headers: authHeader() })
    }
    createInventoryReports(inventoryreports) {
        return axios.post(Inventory_BASE_REST_API_URL + 'rest/inreportssave', inventoryreports, { headers: authHeader() })
    }
    getInventoryReportsById(inventoryId) {
        return axios.get(Inventory_BASE_REST_API_URL + 'rest/inreports/' + inventoryId, { headers: authHeader() });
    }
    updateInventoryReports(inventoryId, inventoryreports) {
        return axios.put(Inventory_BASE_REST_API_URL + 'rest/updateinventory/' + inventoryId, inventoryreports, { headers: authHeader() });
    }
    deleteInventoryReports(inventoryId) {
        return axios.delete(Inventory_BASE_REST_API_URL + 'rest/deleteinventory/' + inventoryId, { headers: authHeader() });
    }
}
export default new InventoryRepotrsService();

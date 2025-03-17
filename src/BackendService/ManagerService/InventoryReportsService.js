import axios from 'axios'
import ManagerauthHeader from '../../services/Manager-header';

const Inventory_BASE_REST_API_URL = 'http://localhost:8082/Manager/';

class InventoryRepotrsService {

    getAllInvenroryReports() {
        return axios.get(Inventory_BASE_REST_API_URL + 'inreports/list', { headers: ManagerauthHeader() })
    }
    createInventoryReports(inventoryreports) {
        return axios.post(Inventory_BASE_REST_API_URL + 'inreports/save', inventoryreports, { headers: ManagerauthHeader() })
    }
    getInventoryReportsById(inventoryId) {
        return axios.get(Inventory_BASE_REST_API_URL + 'inreports/' + inventoryId, { headers: ManagerauthHeader() });
    }
    updateInventoryReports(inventoryId, inventoryreports) {
        return axios.put(Inventory_BASE_REST_API_URL + 'inreports/edit/' + inventoryId, inventoryreports, { headers: ManagerauthHeader() });
    }
    deleteInventoryReports(inventoryId) {
        return axios.delete(Inventory_BASE_REST_API_URL + 'inreports/delete/' + inventoryId, { headers: ManagerauthHeader() });
    }
}
export default new InventoryRepotrsService();

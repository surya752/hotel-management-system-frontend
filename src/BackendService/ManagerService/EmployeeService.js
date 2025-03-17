import axios from 'axios';
import ManagerauthHeader from "../../services/Manager-header"

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/Manager/";

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL + 'employee/list', { headers: ManagerauthHeader() });
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "employee/save", employee, { headers: ManagerauthHeader() });
    }

    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + 'employee/' + employeeId, { headers: ManagerauthHeader() });
    }

    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYEE_API_BASE_URL + 'employee/edit/' + employeeId, employee, { headers: ManagerauthHeader() });
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + 'employee/delete/' + employeeId, { headers: ManagerauthHeader() });
    }
}

export default new EmployeeService()
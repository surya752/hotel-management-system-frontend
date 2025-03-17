import axios from 'axios';
import authHeader from "../../services/auth-header"

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/Owner/";

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL + 'rest/listemployees', { headers: authHeader() });
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "rest/employeesave", employee, { headers: authHeader() });
    }

    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + 'restemployee/' + employeeId, { headers: authHeader() });
    }

    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYEE_API_BASE_URL + 'rest/updateemployee/' + employeeId, employee, { headers: authHeader() });
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + 'rest/deleteemployee/' + employeeId, { headers: authHeader() });
    }
}

export default new EmployeeService()
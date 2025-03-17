import axios from 'axios'
import authHeader from "../../services/auth-header";

const ROOM_BASE_REST_API_URL = 'http://localhost:8081/Owner/';

class RoomService {

    getAllRooms() {
        return axios.get(ROOM_BASE_REST_API_URL + 'restlistrooms', { headers: authHeader() })
    }
    createRoom(room) {
        return axios.post(ROOM_BASE_REST_API_URL + 'restroomsave', room, { headers: authHeader() })
    }
    getRoomById(roomId) {
        return axios.get(ROOM_BASE_REST_API_URL + 'restroom/' + roomId, { headers: authHeader() });
    }
    updateRoombyId(roomId, room) {
        return axios.put(ROOM_BASE_REST_API_URL + 'updateroom/' + roomId, room, { headers: authHeader() });
    }
    deleteRoomById(roomId) {
        return axios.delete(ROOM_BASE_REST_API_URL + 'deleteroom/' + roomId, { headers: authHeader() });
    }

}
export default new RoomService();

import axios from 'axios'
import ReceptionistauthHeader from "../../services/Receptionist-header"

const ROOM_BASE_REST_API_URL = 'http://localhost:8084/Receptionist/';

class RoomService {

    getAllRooms() {
        return axios.get(ROOM_BASE_REST_API_URL + 'room/list', { headers: ReceptionistauthHeader() })
    }
    createRoom(room) {
        return axios.post(ROOM_BASE_REST_API_URL + 'room/save', room, { headers: ReceptionistauthHeader() })
    }
    getRoomById(roomId) {
        return axios.get(ROOM_BASE_REST_API_URL + 'room/' + roomId, { headers: ReceptionistauthHeader() });
    }
    updateRoombyId(roomId, room) {
        return axios.put(ROOM_BASE_REST_API_URL + 'room/edit/' + roomId, room, { headers: ReceptionistauthHeader() });
    }
    deleteRoomById(roomId) {
        return axios.delete(ROOM_BASE_REST_API_URL + 'room/delete/' + roomId, { headers: ReceptionistauthHeader() });
    }

}
export default new RoomService();

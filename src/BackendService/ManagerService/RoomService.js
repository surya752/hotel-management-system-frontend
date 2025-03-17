import axios from 'axios'
import ManagerauthHeader from '../../services/Manager-header';

const ROOM_BASE_REST_API_URL = 'http://localhost:8082/Manager/';

class RoomService {

    getAllRooms() {
        return axios.get(ROOM_BASE_REST_API_URL + 'restlistrooms', { headers: ManagerauthHeader() })
    }
    createRoom(room) {
        return axios.post(ROOM_BASE_REST_API_URL + 'restroomsave', room, { headers: ManagerauthHeader() })
    }
    getRoomById(roomId) {
        return axios.get(ROOM_BASE_REST_API_URL + 'restroom/' + roomId, { headers: ManagerauthHeader() });
    }
    updateRoombyId(roomId, room) {
        return axios.put(ROOM_BASE_REST_API_URL + 'updateroom/' + roomId, room, { headers: ManagerauthHeader() });
    }
    deleteRoomById(roomId) {
        return axios.delete(ROOM_BASE_REST_API_URL + 'deleteroom/' + roomId, { headers: ManagerauthHeader() });
    }

}
export default new RoomService();

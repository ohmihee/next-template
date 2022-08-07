import axios from 'axios';

// 사용자 목록 가져오는 api
export const getUserList = (ele: number) => 
    axios.get(`/api/user?page=${ele}`)
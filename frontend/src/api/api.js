import axios from 'axios'

const Api_URL=`http://localhost:5000`

export const fetchTodos=()=>axios.get(`${Api_URL}/todos`);
export const addTodos=(title)=>axios.post(`${Api_URL}/todos`,{title})
export const updateTodos=(id,data)=>axios.patch(`${Api_URL}/todos/${id}`,data)
export const deleteTodos=(id)=>axios.delete(`${Api_URL}/todos/${id}`)
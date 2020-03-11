import axios from  "axios";


export default {
    getEmployees: function(employees){

        return axios.get(`https://randomuser.me/api/?results=` + employees)
    }
}
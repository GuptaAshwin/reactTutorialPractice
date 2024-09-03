import axios from 'axios';

const getWorkshopsDetail = async({id}) => {

  const response = await axios.get(`https://workshops-server.onrender.com/workshops/${id}`, {

});
return response.data;
};

export{
  getWorkshopsDetail
} ;
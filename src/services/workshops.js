import axios from 'axios';

const getWorkshops = async(page) => {

  const response = await axios.get(`https://workshops-server.onrender.com/workshops`, {
    params: {
        _page: page
    }
});
return response.data;
};

const getWorkshopById = async (id) => {
  // we get a "Promise" object from axios.get()
  // initially "pending" state of Promise
  // then the Promise goes to "resolved" / "rejected"
  // NOTE: Explore then(), catch() methods
  const response = await axios.get(`https://workshops-server.onrender.com/workshops/${id}`);
  return response.data;
};

export{
  getWorkshops,
  getWorkshopById
} ;
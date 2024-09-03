import axios from 'axios';

const getSessions = async (workshopId, page = 1) => {
    const response = await axios.get(`https://workshops-server.onrender.com/workshops/${workshopId}/sessions`, {
        // params: {
        //     _page: page
        // }
    });
    return response.data;
};

const vote = async (id, voteType) => {
  const response = await axios.put(`https://workshops-server.onrender.com/sessions/${id}/${voteType}`);
  return response.data;
}

const addSession = async (session) => {
  const response = await axios.post(`https://workshops-server.onrender.com/sessions`, session, {
      headers: {
          'Content-Type': 'application/json'
      }
  });
  return response.data;
};

export {
  getSessions,
  vote,
  addSession
}
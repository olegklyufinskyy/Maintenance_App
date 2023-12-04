const API_URL =
  "https://654babf05b38a59f28ef7ea3.mockapi.io/react/MaintenanceRequests";

//This component manages all of our API requests ie. GET, POST, DELETE, PUT
const api = {
  //GETS all of the Maintenance Requests objects - complete
  fetchMaintenanceRequests: async () => {
    console.log("fetching mainentance requests from the api...");

    const response = await fetch(`${API_URL}`);
    console.log("API Response:", response);

    return response.json();
  },

  //POST to the mock api
  addMaintenanceRequest: async (newRequest) => {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRequest),
    });
    return response.json();
  },

  //DELETE from the mock api
  deleteMaintenanceRequest: async (requestId) => {
    const response = await fetch(`${API_URL}/${requestId}`, {
      method: "DELETE",
    });
    return response.json();
  },

  //UPDATE to the mock api
  updateMaintenanceRequest: async (requestId, updatedRequest) => {
    const response = await fetch(`${API_URL}/${requestId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRequest),
    });
    return response.json();
  },
};

export default api;

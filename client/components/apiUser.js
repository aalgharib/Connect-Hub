const API_URL = import.meta.env.API_URL || "http://localhost:3000";

const registerUser = async (user) => {
  try {
    let response = await fetch(`${API_URL}/api/users/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      // Handle non-successful status codes
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
// list all the users using get method
const list = async (signal) => {
  try {
    let response = await fetch(`${API_URL}/api/users/`, {
      method: "GET",

      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
// read the user info using get method
const read = async (params, credentials, signal) => {
  try {
    let response = await fetch(`${API_URL}/api/users/` + params.userId, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
// update user info using put method
const update = async (params, credentials, user) => {
  try {
    let response = await fetch(`${API_URL}/api/users/` + params.userId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
// delete user using the delete method
const deleteUser = async (params, credentials) => {
  try {
    let response = await fetch(`${API_URL}/api/users/` + params.userId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
export { registerUser, list, read, update, deleteUser };

const API_URL = import.meta.env.API_URL || "http://localhost:3000";

const signin = async (user) => {
  try {
    let response = await fetch(`${API_URL}/auth/signin/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
const signout = async () => {
  try {
    let response = await fetch(`${API_URL}/auth/signout/`, { method: "GET" });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
export { signin, signout };

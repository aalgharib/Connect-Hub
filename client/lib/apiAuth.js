const signin = async (user) => {
  try {
    let response = await fetch("/auth/signin/", {
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
// try {
//   const result = await signin(user);
//   console.log("Authentication successful:", result);
// } catch (error) {
//   if (error.response && error.response.status === 401) {
//     console.error("Authentication failed: Invalid credentials");
//     // Display a user-friendly error message
//   } else {
//     console.error("Authentication failed:", error);
//   }
// }
const signout = async () => {
  try {
    let response = await fetch("/auth/signout/", { method: "GET" });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
export { signin, signout };

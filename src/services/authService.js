import http from "../config";

class autherservice {
  loginUser = async (email, password) => {
    try {
      debugger;
      return await http
        .post(`/api/auth/login`, {
          email,
          password,
        })
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem(
            "token-expiration",
            Date.now() + 2 * 60 * 60 * 1000 //expires in 2 hours
          );
          return response;
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };
}
export default new autherservice();

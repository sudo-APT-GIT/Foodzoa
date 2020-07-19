import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Y90leC5KxSXDzu_6uGYbfB24YKpVOINL_qFFa74EvIBFnQcjWQjL1H2mzUF2fM-_4kP5s4e3Ndz9L-p_gKXePcl9gxK5JLpjvGaCOKOTD10nS9SqsKKlC77yjxkTX3Yx",
  },
});

import Axios from "axios";

async function getAllRoses() {
  try {
    const response = await Axios.get(
      `https://roses-api.herokuapp.com/api/v1/getAllRoses`
    );
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

export default {
  getAllRoses,
};

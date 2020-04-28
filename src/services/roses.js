import Axios from "axios";

export async function getAllRoses() {
  try {
    const response = await Axios.get(
      `https://roses-api.herokuapp.com/api/v1/roses/getAllRoses`
    );
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

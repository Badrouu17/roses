import Axios from "axios";

export async function forgotPassword(data) {
  try {
    const response = await Axios.post(
      `https://roses-api.herokuapp.com/api/v1/auth/forgotPassword`,
      data
    );
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

export async function resetPassword(data, token) {
  try {
    const response = await Axios.patch(
      `https://roses-api.herokuapp.com/api/v1/auth/resetPassword/${token}`,
      data
    );
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

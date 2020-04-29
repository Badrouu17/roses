import Axios from "axios";

Axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export async function getMe() {
  try {
    const response = await Axios.get(
      `https://cors-anywhere.herokuapp.com/https://roses-api.herokuapp.com/api/v1/user/me`
    );
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

export async function updateMe(data) {
  try {
    const response = await Axios({
      method: "PATCH",
      url: `https://cors-anywhere.herokuapp.com/https://roses-api.herokuapp.com/api/v1/user/updateMe`,
      data,
    });
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

export async function upload(data) {
  try {
    const response = await Axios({
      method: "POST",
      url: `https://cors-anywhere.herokuapp.com/https://roses-api.herokuapp.com/api/v1/user/uploadPhotos`,
      data,
    });
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

export async function updatePassword(data) {
  try {
    const response = await Axios({
      method: "PATCH",
      url: `https://cors-anywhere.herokuapp.com/https://roses-api.herokuapp.com/api/v1/user/updatePassword`,
      data,
    });
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

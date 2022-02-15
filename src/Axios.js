import axios from "axios";
import { API } from "./Const";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const Reg = async (body) => {
  try{
    const response = await axios.post(API + "user_reg/", body, options);
    console.log(response);
    return true
  }catch(e){
    console.log(e)
    return false
  }
};

export const Log = async (body) => {
  try {
    const response = await axios.post(API + "user/token/login/", body, options);
    localStorage.setItem("token", response.data.auth_token);
    console.log(response);
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
};

export const Logout = async (body) => {
  try {
    const response = await axios.post(API + "user/token/logout/", body, {
      headers: {
        Authorization: `Token ${localStorage.token}`,
      },
    });
    localStorage.removeItem("token");
    console.log(response);
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
};

export const getUsers = async () =>{
    try{
        const response = await axios.get(API +"get_user_list",{
            headers: {
                Authorization: `Token ${localStorage.token}`,
              },
        })
        return response.data.users
    }catch(e){
        console.log(e)
    }
}
import axios from "axios";


  
export const getUsers = async (
  
  ) => {
  
    
   
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/user`
      );
  
      return res;
    } catch (error) {
      console.log("ERROR", error);
      return error?.response;
    }
  };


export const getUser = async (
id
) => {

  
 
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/${id}`
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const createUser = async (
  data,
) => {

  console.log('skepta', data);
  
 
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user`, data
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const updateUser = async (
  id,
  data,
) => {

  console.log('skepta', data);
  
 
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/${id}`, data
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};


export const deleteEvent = async (
  token,
  id,
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_URL}/events/${id}`,
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};


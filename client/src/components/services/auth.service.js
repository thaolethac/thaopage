import axios from "axios";

const baseURL = "http://localhost:3000";
 
//register service

export const register = (newUser) => {
 return axios
    .post(`${baseURL}/dang-ki`, newUser)
    .then((response) => {
      if (response) {
        return  Promise.resolve(response.data);
      }
    })
    .catch((err) => {
      return Promise.reject(err.response.data);
    });
};
export const login = (userCredential) => {
 return axios
    .post(`${baseURL}/dang-nhap`, userCredential)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("x-access-token", response.data.token);
      }
      return Promise.resolve(response.data)
    })
    .catch((err) => {
      return Promise.reject(err.response.data);
    });
};

export const getuser = (usered) => {
  return axios
     .post(`${baseURL}/usered`, usered)
     .then((response) => {
       if (response) {
         return  Promise.resolve(response.data);
       }
     })
     .catch((err) => {
       return Promise.reject(err.response.data);
     });
 };
 // user login
// export const userlogin = (user) => {
//   return axios
//      .post(`${baseURL}/getusername`, user)
//      .then((response) => {
//        if (response) {
//          return  Promise.resolve(response.data);
//        }
//      })
//      .catch((err) => {
//        return Promise.reject(err.response.data);
//      });
//  };
// logout

export const logout = () => {
  localStorage.removeItem('x-access-token')
  return
}
//create

export const createpost = (newPost) => {
  return axios
     .post(`${baseURL}/listpost`, newPost)
     .then((response) => {
       if (response) {
         return  Promise.resolve(response.data);
       }
     })
     .catch((err) => {
       return Promise.reject(err.response.data);
     });
 };
 export const updatepost = (updatePost) => {
  return axios
     .put(`${baseURL}/updatepost`, updatePost)
     .then((response) => {
       if (response) {
         return  Promise.resolve(response.data);
       }
     })
     .catch((err) => {
       return Promise.reject(err.response.data);
     });
 };

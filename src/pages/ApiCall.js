import axios from "axios";

export function ApiCall(type, data) {

  // let BaseUrl = "https://smokin-ace.herokuapp.com/api/"
  let BaseUrl = "http://192.168.0.103:6505/api/v1/"

  if (data==='') {
    return new Promise((resolve, reject) => {
      axios.get(BaseUrl + type,{
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('tokens')}`
        }
      })
        .then((response) => {
        resolve(response)
      })
      .catch((error) =>{
        reject(error);
      })
    });
  } else {
    return new Promise((resolve, reject) => {
      axios.post(BaseUrl + type, data,{
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('tokens')}`
        }
      })
      .then((response) => {
        resolve(response)
      })
      .catch((error) =>{
        reject(error);
      })
    });
  }
}

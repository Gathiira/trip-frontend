import axios from "axios";

export function PostData(type, data) {

  // let BaseUrl = "https://smokin-ace.herokuapp.com/account/"
  let BaseUrl = "http://192.168.0.103:6505/account"

  if (data==='') {
    return new Promise((resolve, reject) => {
      axios.get(BaseUrl + type, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('tokens')}`
      }
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) =>{
        reject(error);
      })
    });
  }
  else {
    return new Promise((resolve, reject) => {
      axios.post(BaseUrl + type, data)
      .then((response) => response.data)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) =>{
        reject(error);
        alert('Wrong credentials, Please try again')
      })
    });
  }

}

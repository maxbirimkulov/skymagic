import axios from "./axios";


export const clickFunc = (url, id) => {

    axios.post('click', {
        url,
        id
    })
        .then(() => console.log('клик выполнен'))
        .catch((err) => console.log(err) )
}
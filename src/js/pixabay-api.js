import axios from 'axios';

const API_KEY = "51334256-c1710c37c982a8ca30afac428";

export default function getImagesByQuery(query) {

    const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
    })

    return axios(`https://pixabay.com/api/?${params}`);

}
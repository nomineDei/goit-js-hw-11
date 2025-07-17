import getImagesByQuery from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery")

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    clearGallery();
    event.preventDefault();

    
    showLoader();

    const query = event.currentTarget.elements.searchText;

    getImagesByQuery(query.value)
        .then(response => {
            if (response.data.hits.length === 0) {
                throw new Error('No result');
            }
            createGallery(response.data.hits);
            
        })
        .catch(error => {
            console.error(error);
            
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: 'topRight',
                timeout: 3000,
            });
        })
        .finally(() => {
            hideLoader();
            query.value = '';
    })
    
}

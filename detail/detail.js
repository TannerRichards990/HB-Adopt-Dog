import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
const params = new URLSearchParams(window.location.search);
// get the id from URL
async function loadData() {
    const data = await getDog(params.get('id'));
    const dogDiv = renderDogDetail(data);
    dogDetailContainer.append(dogDiv);
}

loadData();
// use the id to fetch the dog
// render and append this dog's details to the container

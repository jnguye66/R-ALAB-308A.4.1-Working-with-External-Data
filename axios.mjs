import * as Carousel from "./Carousel.mjs";

// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");

async function initialLoad() {
    await fetch("https://api.thecatapi.com/v1/breeds")
        .then(x => x.json())
        .then((res) => {

            console.log(res); // List of cat objects
            // console.log(res[0].name); // Outputs the first cat object's id
            for (let i = 0; i < res.length; i++) {
                let breed = document.createElement("option");
                breed.value = res[i].id;
                breed.innerHTML = res[i].name;
                // breed.description = res[i].description;

                // console.log(breed.value);
                // console.log(breed.innerHTML);
                // console.log(breed.description);
                breedSelect.appendChild(breed);
                // console.log(breed);
            }
        })
        .catch((err) => {
            console.log(err);
        })
}
initialLoad();


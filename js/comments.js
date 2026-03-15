let activeElement = 0;
const timeChange = 4000;

const image = document.querySelector(".comments__container-image");
const paragraph = document.querySelector(".comments__container-paragraph");
const h4 = document.querySelector(".comments__container-h4");


const images = ["./img/face1.jpg", "./img/face2.jpg", "./img/face3.jpg"];
const paragraphs = ["Green Garden os the best at providing farm management services! Great  help!", "The fruits and vegetables that we bought on this farm were the most fresh and delicious ever!", "Never been more satisfied with the services provided by any agricultural company?"];
const names = ["Amy White", "Fred Kesey", "George Vallas"]

function changeElement() {
    activeElement++;
    if (activeElement == images.length) {
        activeElement = 0;
    }
    image.src = images[activeElement];
    paragraph.textContent = paragraphs[activeElement];
    h4.textContent = names[activeElement];
}
setInterval(changeElement, timeChange);
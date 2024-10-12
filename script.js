//DOM NODES
const thumbnailContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");
let currentIndex = 0;

//ARRAY IMAGE STORE
const images = [
  {
    src: "assets/02-pink.jpg",
    alt: "A peaceful pink japanese garden",
  },
  {
    src: "assets/03-purple.jpg",
    alt: "Purple and white clouds",
  },
  {
    src: "assets/04-blue.jpg",
    alt: "An artic blue sea, sky and iceberg",
  },
  {
    src: "assets/05-green.jpg",
    alt: "Green woodland sunlight",
  },
  {
    src: "assets/06-yellow.jpg",
    alt: "A yellow gerbera after the rain",
  },
  {
    src: "assets/07-orange.jpg",
    alt: "An orange garden table with coffee beans and mug",
  },
  {
    src: "assets/08-red.jpg",
    alt: "Two red tulips in front of a field of red tulips",
  },
  {
    src: "assets/09-black.jpg",
    alt: "A dark stary sky",
  },
];

//IMAGE LOOP THROUGH + DISPLAY IMAGE
for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = images[i].src;
  img.alt = images[i].alt;
  img.addEventListener("click", function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
  });
  thumbnailContainer.appendChild(img);

  //why doesn't this work?
  function handleKeyPress(event) {
    if (event.key === "ArrowRight") {
      // Move to the next image
      currentIndex = currentIndex + 1;
    } else if (event.key === "ArrowLeft") {
      // Move to the previous image
      currentIndex = currentIndex - 1 + images.length;
    }
  }
}

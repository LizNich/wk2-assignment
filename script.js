//DOM do dars
const thumbnailContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");

//Array image store
const images = [
  {
    src: "assets/02-pink.jpg",
    alt: "A peaceful pink japanese garden",
    tabIndex: "0",
  },
  {
    src: "assets/03-purple.jpg",
    alt: "Purple and white clouds",
    tabIndex: "0",
  },
  {
    src: "assets/04-blue.jpg",
    alt: "An artic blue sea, sky and iceberg",
    tabIndex: "0",
  },
  {
    src: "assets/05-green.jpg",
    alt: "Green woodland sunlight",
    tabIndex: "0",
  },
  {
    src: "assets/06-yellow.jpg",
    alt: "A yellow gerbera after the rain",
    tabIndex: "0",
  },
  {
    src: "assets/07-orange.jpg",
    alt: "An orange garden table with coffee beans and mug",
    tabIndex: "0",
  },
  {
    src: "assets/08-red.jpg",
    alt: "Two red tulips in front of a field of red tulips",
    tabIndex: "0",
  },
  {
    src: "assets/09-black.jpg",
    alt: "A dark stary sky",
    tabIndex: "0",
  },
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");

  img.src = images[i].src;
  img.alt = images[i].alt;

  img.addEventListener("click", function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
  });
  thumbnailContainer.appendChild(img);
}
//ABOVE IS FROM THE DEMO (+TabIndex)
//
//
//does this work?
// Select the image by its ID
//const image = document.getElementById("clickableImage");

// Add an event listener for the 'click' event
//image.addEventListener("click", function () {
// Toggle the 'red-border' class on click
//image.classList.toggle("red-border");
//});

//document.addEventListener("keydown", function (event) {
// if (event.code === "Enter") {
//   document.querySelector("[tabindex='1']").focus();
//  }
// if (event.code === "Enter") {
//   document.querySelector("[tabindex='2']").focus();
// }
//});

function navigateLeftRight(event) {
  if (event.key == "ArrowLeft") {
    reverseImage();
  } else if (event.key == "ArrowRight") {
    advanceImage();
  }
}

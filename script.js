function showAlert() {
  alert("Free Shipping on orders over $45");
}

//Slideshow
var slideshows = document.querySelectorAll(".slideshow");

slideshows.forEach(initSlideShow);

function initSlideShow() {
  var slides = document.querySelectorAll(".slide"); // Every img in a div with class slide

  var i = 0,
    time = 3000; //How long it will take to change img (3sec)

  slides[i].classList.add("active"); //Adds the class active to the first/default image in order to change display from "none" to "block"

  setInterval(() => {
    slides[i].classList.remove("active"); //Removes active class in order to hide the image once again

    i++; //Go to the next image

    if (i === slides.length) i = 0; //Once it goes through all of them, restart the index to show the first slide again and start from the beginning

    slides[i].classList.add("active"); //Displays next image, if this appears before th if statement, it stays blank before restarting
  }, time);
}

//-----------------------------------

//Json Data Import/Use
fetch("products.json") //fetching JSON file
  .then((response) => response.json())
  .then((json) => getProducts(json));

function getProducts(items) {
  let bookContainer = ""; //initializing variable that will later be used to group everything we will want to display through HTML for our website

  items.Products.forEach((Product) => {
    //for each object in the JSON file
    bookContainer += ` 
    <div class = "book">
    <p class = "title">${Product.title}</p>
    <img src = ${Product.photo}>
    <p class = "price">${Product.price}</p>
    <p>${Product.description}</p>
    <button class = "shop-button" >Buy Now!</button>
    </div>
`; //Adds these tags for each object in the JSON file in order to display each property appropriately and adds classes in order to be styled later
  });
  document.querySelector(".book-container").innerHTML = bookContainer; // This is what allows them to be displayed in the webpage by passing it to the HTML file to the div with the "book-container" class
}

const itemsList = [
  {
    name: "Banana",
    price: "$5.99 per kg",
    img: "assets/banana.avif",
  },

  {
    name: "Bottle Water",
    price: "$4.99",
    img: "assets/waterBottle.avif",
  },
  {
    name: "Coke",
    price: "$2.99",
    img: "assets/coke.jpg",
  },
  {
    name: "Coffee",
    price: "$4.99",

    img: "assets/coffee-cup-concept-illustration_114360-9740.jpg.avif",
  },
  {
    name: "Burger",
    price: "$9.99",
    img: "assets/cute-burger-kid-jumping-cartoon-vector-icon-illustration-food-object-icon-isolated-flat-vector_138676-12697.jpg",
  },
  {
    name: "Mango",
    price: "$3.99",
    img: "assets/delicious-mango-studio_23-2151843109.jpg",
  },
  {
    name: "Milk",
    price: "$3.99",
    img: "assets/drinking-milk-concept-with-cartoon-character_29937-9479.jpg.avif",
  },
  {
    name: "Juice",
    price: "$2.99",
    img: "assets/glass-orange-juice-slice-orange-icon-drink-with-fruit_202271-900.jpg.avif",
  },
  {
    name: "Energy Drink",
    price: "$4.99",
    img: "assets/power-refreshing-energy-drink-product-ad_52683-34035.jpg.avif",
  },
  {
    name: "Glasses",
    price: "$10.99",
    img: "assets/safety-glasses-icon_632498-3815.jpg.avif",
  },
  {
    name: "Chocolate",
    price: "$5.99",
    img: "assets/set-bars-pieces-with-different-chocolates_23-2147811700.jpg.avif",
  },
  {
    name: "Chips",
    price: "$7.99",
    img: "assets/snack-chips-are-poured-package-food-packaging-template-vector-illustration-isolated_168129-2016.jpg",
  },
];

//This selects the HTML element with the id "cards" to display the items
const showItemsInDisplay = document.getElementById("cards");

//Function to show the cards in the display and mapping to each items

const renderItems = (items) => {
  const itemsHtml = items
    .map(
      (item) => `
  <div class="card" style="width: 18rem;">
  <img src="${item.img}" class="" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <h5 class="card-title">${item.price}</h5>
   
  </div>
</div>`
    )
    .join(""); //this method combines strings into a single string. innerHTml expects a single string not an array.

  //updates the innerHTml of the "cards" contaaner witht the generated HTML. Displays cards onthe web page.
  showItemsInDisplay.innerHTML = itemsHtml;
};

//calling the renderList function with the full itemList array to display all the items when the page loads.

renderItems(itemsList);

//search functionalties

//the event "keyup" listens on the search input field("id search")
document.getElementById("search").addEventListener("keyup", (e) => {
  const searchedString = e.target.value.toLowerCase(); //converts to lowercase to make the seach case-insensitive.

  const filteredList = itemsList.filter((item) => {
    const itemName = `${item.name}`.toLowerCase();

    return itemName.includes(searchedString);
  });

  //calling renderItems with filteredList, updating the display to show only matching items.
  renderItems(filteredList);
});

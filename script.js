const items = [
	// Biere
	{ name: "Berliner Pils", price: 4.50, pfand: true, category: "Bier" },
	{ name: "Späti Pils", price: 5.00, pfand: true, category: "Bier" },
	{ name: "Becks", price: 4.00, pfand: true, category: "Bier" },
	{ name: "Jever", price: 4.00, pfand: true, category: "Bier" },
	{ name: "Corona", price: 5.00, pfand: true, category: "Bier" },
	{ name: "DjuDju", price: 5.00, pfand: true, category: "Bier" },
	{ name: "Radler", price: 4.00, pfand: true, category: "Bier" },
	{ name: "Clausthaler (Alk. frei)", price: 4.00, pfand: true, category: "Bier" },

	// Longdrinks
	{ name: "Vodka & Saft", price: 8.00, pfand: true, category: "Longdrinks" },
	{ name: "Vodka & Zitrone/Cola/Tonic", price: 8.00, pfand: true, category: "Longdrinks" },
	{ name: "Vodka Effect", price: 8.50, pfand: true, category: "Longdrinks" },
	{ name: "Gin Tonic", price: 8.00, pfand: true, category: "Longdrinks" },
	{ name: "Rum Cola", price: 8.00, pfand: true, category: "Longdrinks" },
	{ name: "Cuba Libre", price: 8.50, pfand: true, category: "Longdrinks" },
	{ name: "Whisky Cola", price: 8.00, pfand: true, category: "Longdrinks" },
	{ name: "Jack Daniels Cola", price: 8.50, pfand: true, category: "Longdrinks" },
	{ name: "Jameson Ginger Ale", price: 8.50, pfand: true, category: "Longdrinks" },

	// Spritz
	{ name: "Aperol Spritz", price: 8.00, pfand: true, category: "Spritz" },
	{ name: "Ingwer Spritz", price: 8.00, pfand: true, category: "Spritz" },
	{ name: "Lillet Wild Berry", price: 8.00, pfand: true, category: "Spritz" },

	// Prosecco & Wein
	{ name: "Sekt Brut (trocken)", price: 4.50, pfand: true, category: "Prosecco & Wein" },
	{ name: "Sekt Brut (auf Eis)", price: 6.50, pfand: true, category: "Prosecco & Wein" },
	{ name: "Weißwein (Riesling)", price: 5.50, pfand: true, category: "Prosecco & Wein" },
	{ name: "Rotwein (Tempranillo)", price: 5.50, pfand: true, category: "Prosecco & Wein" },
	{ name: "Weinschorle", price: 4.50, pfand: true, category: "Prosecco & Wein" },
	{ name: "Cider", price: 4.50, pfand: true, category: "Prosecco & Wein" },

	// Softdrinks
	{ name: "Viva con Agua (leise/laut)", price: 2.50, pfand: true, category: "Softdrinks" },
	{ name: "Fritz Kola", price: 3.50, pfand: true, category: "Softdrinks" },
	{ name: "Fritz Kola (superzero)", price: 3.50, pfand: true, category: "Softdrinks" },
	{ name: "Fritz Limo (Orange/Zitrone)", price: 3.50, pfand: true, category: "Softdrinks" },
	{ name: "Fritz Spritz (Apfel/Traube/Zitrone)", price: 3.50, pfand: true, category: "Softdrinks" },
	{ name: "Club Mate", price: 3.50, pfand: true, category: "Softdrinks" },
	{ name: "Malztrunk", price: 2.50, pfand: true, category: "Softdrinks" },
	{ name: "Effect (zuckerfrei)", price: 4.00, pfand: true, category: "Softdrinks" },
	{ name: "Lemonaid (Ingwer/Limmette/Maracuja/Blutorange)", price: 4.00, pfand: true, category: "Softdrinks" },
	{ name: "Säfte & Nektar", price: 3.00, pfand: true, category: "Softdrinks" },
	{ name: "Schweppes (Tonic/Ginger Ale/Spicy Ginger/Bitter Lemon)", price: 3.00, pfand: true, category: "Softdrinks" },

	// Shots (no pfand)
	{ name: "Mexikaner", price: 2.00, pfand: false, category: "Shots" },
	{ name: "Berliner Luft", price: 2.00, pfand: false, category: "Shots" },
	{ name: "Ingwer Likör", price: 3.00, pfand: false, category: "Shots" },
	{ name: "Jägermeister", price: 3.00, pfand: false, category: "Shots" },
	{ name: "Vodka", price: 3.00, pfand: false, category: "Shots" },
	{ name: "Tequila", price: 3.00, pfand: false, category: "Shots" },
	{ name: "Baileys", price: 3.00, pfand: false, category: "Shots" },
	{ name: "Gordon's Gin", price: 5.00, pfand: false, category: "Shots" },
	{ name: "Campari", price: 5.00, pfand: false, category: "Shots" },
	{ name: "Pampero", price: 5.00, pfand: false, category: "Shots" },
	{ name: "Jameson", price: 5.00, pfand: false, category: "Shots" },
	{ name: "Jack Daniels", price: 5.50, pfand: false, category: "Shots" },

	// Cocktails
	{ name: "Caipirinha", price: 8.50, pfand: true, category: "Cocktails" },
	{ name: "Mojito", price: 8.50, pfand: true, category: "Cocktails" },
	{ name: "Watermelon Man", price: 9.00, pfand: true, category: "Cocktails" },
	{ name: "Sex on the Beach", price: 9.00, pfand: true, category: "Cocktails" },
	{ name: "Mai Tai", price: 10.00, pfand: true, category: "Cocktails" },
	{ name: "Sours", price: 8.50, pfand: true, category: "Cocktails" },
	{ name: "Moscow Mule", price: 8.50, pfand: true, category: "Cocktails" },
	{ name: "Dark & Stormy", price: 8.50, pfand: true, category: "Cocktails" },
	{ name: "Frozen Margarita", price: 8.50, pfand: true, category: "Cocktails" },

	// Alkoholfreie Cocktails
	{ name: "Coconut Kiss", price: 6.50, pfand: true, category: "Alkoholfreie Cocktails" },
	{ name: "Moskito", price: 6.50, pfand: true, category: "Alkoholfreie Cocktails" },
	{ name: "Ipanema", price: 6.50, pfand: true, category: "Alkoholfreie Cocktails" },
	{ name: "Yaam's Juicy Caribbean", price: 6.50, pfand: true, category: "Alkoholfreie Cocktails" },
	{ name: "Big Apple", price: 6.50, pfand: true, category: "Alkoholfreie Cocktails" }
];

const cart = [];
const pfandPrice = 1.00;

// Categorize items
const categorizedItems = {};
items.forEach(item => {
	const category = item.category;
	if (!categorizedItems[category]) {
		categorizedItems[category] = [];
	}
	categorizedItems[category].push(item);
});

// Display categories
const categoriesDiv = document.getElementById("categories");
for (const category in categorizedItems) {
	const button = document.createElement("button");
	button.textContent = category;
	button.addEventListener("click", () => showCategory(category));
	categoriesDiv.appendChild(button);
}

// Show the first category by default after all categories have been added
showCategory(Object.keys(categorizedItems)[0]); // Assuming there's at least one category


// Show items for a category
function showCategory(category) {
	const itemsDiv = document.getElementById("items");
	itemsDiv.innerHTML = ""; // Clear previous items
	itemsDiv.style.display = "grid"; // Show the items grid

	// Update active tab
	const categoryButtons = categoriesDiv.querySelectorAll("button");
	categoryButtons.forEach(btn => btn.classList.remove("active"));
	categoryButtons.forEach(btn => {
		if (btn.textContent === category) {
			btn.classList.add("active");
		}
	});


	categorizedItems[category].forEach(item => {
		addToCart(item)
	});
}


// Add to cart
function addToCart(item) {
	const button = document.createElement("button");
	button.textContent = `${item.name} - €${item.price.toFixed(2)}`;

	// Attach event listener after creating the button
	button.addEventListener("click", () => {
		cart.push({ ...item, pfandAdded: true, originalPrice: item.price }); // Store original price for Pfand calculations
		updateCart();
	});

	const itemsDiv = document.getElementById("items");
	itemsDiv.appendChild(button);
}

// Update cart display
function updateCart() {
	const cartList = document.getElementById("cart");
	cartList.innerHTML = "";

	cart.forEach((item, index) => {
		const li = document.createElement("li");
		li.className = 'cart-item';
		// Calculate price for display based on pfandAdded status
		const displayPrice = item.pfandAdded ? item.originalPrice + pfandPrice : item.originalPrice;
		li.textContent = `${item.name}`;

		// Add Pfand controls
		const pfandControls = document.createElement("div");
		const addPfandButton = document.createElement("button");
		addPfandButton.textContent = "+ Pfand";
		addPfandButton.disabled = item.pfandAdded;
		addPfandButton.addEventListener("click", () => {
			item.pfandAdded = true;
			updateCart();
		});

		const removePfandButton = document.createElement("button");
		removePfandButton.textContent = "- Pfand";
		removePfandButton.disabled = !item.pfandAdded;
		removePfandButton.addEventListener("click", () => {
			item.pfandAdded = false;
			updateCart();
		});

		pfandControls.appendChild(addPfandButton);
		pfandControls.appendChild(removePfandButton);

		const removeButton = document.createElement("button");
		removeButton.textContent = "x";
		removeButton.classList.add("remove-button"); // Add a class for styling
		removeButton.addEventListener("click", () => removeFromCart(index));
		li.appendChild(removeButton);
		li.appendChild(pfandControls);

		cartList.appendChild(li);
	});

	// Update total (corrected logic)
	const total = cart.reduce((sum, item) => {
		return sum + (item.pfandAdded ? item.originalPrice + pfandPrice : item.originalPrice);
	}, 0);
	document.getElementById("total").textContent = `Total: €${total.toFixed(2)}`;

	const checkoutButton = document.getElementById("checkout");
	checkoutButton.disabled = cart.length === 0; // Disable if cart is empty

}

function displayPreviousOrders() {
	const ordersDiv = document.createElement("div");
	ordersDiv.id = "previousOrders";
	const previousOrders = JSON.parse(localStorage.getItem("orders")) || [];
	previousOrders.reverse();

	previousOrders.forEach((order, index) => {
		const orderDetails = document.createElement("div");
		orderDetails.classList.add("order-summary"); // Add a class for styling

		// Summary line (clickable)
		const summaryLine = document.createElement("p");
		const totalWithPfand = order.items.reduce((sum, item) => sum + item.price + (item.pfandAdded ? 1 : 0), 0);
		summaryLine.textContent = `${order.timestamp.toLocaleString()}: €${totalWithPfand.toFixed(2)}`;
		summaryLine.addEventListener("click", () => toggleOrderDetails(orderDetails));
		orderDetails.appendChild(summaryLine);

		// Detailed items (initially hidden)
		const itemList = document.createElement("ul");
		itemList.style.display = "none"; // Hide initially
		order.items.forEach(item => {
			const li = document.createElement("li");
			li.textContent = `${item.name} - €${(item.price + (item.pfandAdded ? 1 : 0)).toFixed(2)} ${item.pfandAdded ? "(inkl. Pfand)" : ""}`;
			itemList.appendChild(li);
		});
		orderDetails.appendChild(itemList);

		ordersDiv.appendChild(orderDetails);
	});

	document.body.appendChild(ordersDiv);
}

// Toggle order details visibility
function toggleOrderDetails(orderDetails) {
	const itemList = orderDetails.querySelector("ul");
	itemList.style.display = itemList.style.display === "none" ? "block" : "none";
}

displayPreviousOrders();

function removeFromCart(index) {
	cart.splice(index, 1);
	updateCart();
}

let input = '';

// Create number pad
const numberPad = document.getElementById('numberPad');
numberPad.style.display = 'grid';
numberPad.style.gridTemplateColumns = '1fr 1fr 1fr';

// Create digit buttons
for (let i = 1; i <= 9; i++) {
    const button = document.createElement('button');
	button.style.width = '100%';
    button.textContent = i;
    button.addEventListener('click', () => {
        input += i;
    });
    numberPad.appendChild(button);
}

// Create 'Clear' button
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
clearButton.style.width = '100%';
clearButton.addEventListener('click', () => {
    input = '';
});
numberPad.appendChild(clearButton);

// Create '0' button
const zeroButton = document.createElement('button');
zeroButton.textContent = '0';
zeroButton.addEventListener('click', () => {
    input += '0';
});
numberPad.appendChild(zeroButton);

// Create 'Enter' button
const enterButton = document.createElement('button');
enterButton.id = 'checkout';
enterButton.textContent = 'Enter';
enterButton.style.width = '100%';
enterButton.addEventListener("click", () => {
		const total = cart.reduce((sum, item) => sum + item.price + (item.pfandAdded ? 1 : 0), 0);
		const change = parseFloat(input) - total;
		document.getElementById('flash').innerHTML = `Change to be given: €${change.toFixed(2)}`;
		input = '';
		// Save order to localStorage
		const order = {
			timestamp: new Date(),
			items: cart.map(item => ({
				name: item.name,
				price: item.price,
				pfandAdded: item.pfandAdded
			})),
			total: cart.reduce((sum, item) => sum + item.price, 0),
			change: change
		};
	
		const previousOrders = JSON.parse(localStorage.getItem("orders")) || [];
		previousOrders.push(order);
		localStorage.setItem("orders", JSON.stringify(previousOrders));
	
		// Clear cart
		cart.length = 0;
		updateCart();
	
		// Remove the previous orders display before updating it
		const previousOrdersDiv = document.getElementById("previousOrders");
		if (previousOrdersDiv) {
			previousOrdersDiv.remove();
		}
	
		// Show previous orders
		displayPreviousOrders();
	});
	
numberPad.appendChild(enterButton);








const items = [
	// Biere
	{ name: "Berliner Pils", price: 4.50, pfand: true },
	{ name: "Späti Pils", price: 5.00, pfand: true },
	{ name: "Becks", price: 4.00, pfand: true },
	{ name: "Jever", price: 4.00, pfand: true },
	{ name: "Corona", price: 5.00, pfand: true },
	{ name: "DjuDju", price: 5.00, pfand: true },
	{ name: "Radler", price: 4.00, pfand: true },
	{ name: "Clausthaler (Alk. frei)", price: 4.00, pfand: true },

	// Longdrinks
	{ name: "Vodka & Saft", price: 8.00, pfand: true },
	{ name: "Vodka & Zitrone/Cola/Tonic", price: 8.00, pfand: true },
	{ name: "Vodka Effect", price: 8.50, pfand: true },
	{ name: "Gin Tonic", price: 8.00, pfand: true },
	{ name: "Rum Cola", price: 8.00, pfand: true },
	{ name: "Cuba Libre", price: 8.50, pfand: true },
	{ name: "Whisky Cola", price: 8.00, pfand: true },
	{ name: "Jack Daniels Cola", price: 8.50, pfand: true },
	{ name: "Jameson Ginger Ale", price: 8.50, pfand: true },

	// Spritz
	{ name: "Aperol Spritz", price: 8.00, pfand: true },
	{ name: "Ingwer Spritz", price: 8.00, pfand: true },
	{ name: "Lillet Wild Berry", price: 8.00, pfand: true },

	// Prosecco & Wein
	{ name: "Sekt Brut (trocken)", price: 4.50, pfand: true },
	{ name: "Sekt Brut (auf Eis)", price: 6.50, pfand: true },
	{ name: "Weißwein (Riesling)", price: 5.50, pfand: true },
	{ name: "Rotwein (Tempranillo)", price: 5.50, pfand: true },
	{ name: "Weinschorle", price: 4.50, pfand: true },
	{ name: "Cider", price: 4.50, pfand: true },

	// Softdrinks
	{ name: "Viva con Agua (leise/laut)", price: 2.50, pfand: true },
	{ name: "Fritz Kola", price: 3.50, pfand: true },
	{ name: "Fritz Kola (superzero)", price: 3.50, pfand: true },
	{ name: "Fritz Limo (Orange/Zitrone)", price: 3.50, pfand: true },
	{ name: "Fritz Spritz (Apfel/Traube/Zitrone)", price: 3.50, pfand: true },
	{ name: "Club Mate", price: 3.50, pfand: true },
	{ name: "Malztrunk", price: 2.50, pfand: true },
	{ name: "Effect (zuckerfrei)", price: 4.00, pfand: true },
	{ name: "Lemonaid (Ingwer/Limmette/Maracuja/Blutorange)", price: 4.00, pfand: true },
	{ name: "Säfte & Nektar", price: 3.00, pfand: true },
	{ name: "Schweppes (Tonic/Ginger Ale/Spicy Ginger/Bitter Lemon)", price: 3.00, pfand: true },

	// Shots
	{ name: "Mexikaner", price: 2.00 },
	{ name: "Berliner Luft", price: 2.00 },
	{ name: "Ingwer Likör", price: 3.00 },
	{ name: "Jägermeister", price: 3.00 },
	{ name: "Vodka", price: 3.00 },
	{ name: "Tequila", price: 3.00 },
	{ name: "Baileys", price: 3.00 },
	{ name: "Gordon's Gin", price: 5.00 },
	{ name: "Campari", price: 5.00 },
	{ name: "Pampero", price: 5.00 },
	{ name: "Jameson", price: 5.00 },
	{ name: "Jack Daniels", price: 5.50 },

	// Cocktails
	{ name: "Caipirinha", price: 8.50, pfand: true },
	{ name: "Mojito", price: 8.50, pfand: true },
	{ name: "Watermelon Man", price: 9.00, pfand: true },
	{ name: "Sex on the Beach", price: 9.00, pfand: true },
	{ name: "Mai Tai", price: 10.00, pfand: true },
	{ name: "Sours", price: 8.50, pfand: true },
	{ name: "Moscow Mule", price: 8.50, pfand: true },
	{ name: "Dark & Stormy", price: 8.50, pfand: true },
	{ name: "Frozen Margarita", price: 8.50, pfand: true },

	// Alkoholfreie Cocktails
	{ name: "Coconut Kiss", price: 6.50, pfand: true },
	{ name: "Moskito", price: 6.50, pfand: true },
	{ name: "Ipanema", price: 6.50, pfand: true },
	{ name: "Yaam's Juicy Caribbean", price: 6.50, pfand: true },
	{ name: "Big Apple", price: 6.50, pfand: true },
];

const cart = [];
const pfandPrice = 1.00;

// Display items
const itemsDiv = document.getElementById("items");
items.forEach(item => {
	const button = document.createElement("button");
	button.textContent = `${item.name} - €${item.price.toFixed(2)}`;
	button.addEventListener("click", () => addToCart(item));
	itemsDiv.appendChild(button);
});

// Add to cart
function addToCart(item) {
	cart.push({ ...item, pfandAdded: true }); // Add to cart with Pfand by default
	updateCart();
}

// Update cart display
function updateCart() {
	const cartList = document.getElementById("cart");
	cartList.innerHTML = "";

	cart.forEach((item, index) => {
		const li = document.createElement("li");
		li.textContent = `${item.name} - €${item.price.toFixed(2)}`;

		// Add Pfand controls
		const pfandControls = document.createElement("div");
		const addPfandButton = document.createElement("button");
		addPfandButton.textContent = "+ Pfand";
		addPfandButton.disabled = item.pfandAdded;
		addPfandButton.addEventListener("click", () => {
			item.pfandAdded = true;
			item.price += pfandPrice;
			updateCart();
		});

		const removePfandButton = document.createElement("button");
		removePfandButton.textContent = "- Pfand";
		removePfandButton.disabled = !item.pfandAdded;
		removePfandButton.addEventListener("click", () => {
			item.pfandAdded = false;
			item.price -= pfandPrice;
			updateCart();
		});

		pfandControls.appendChild(addPfandButton);
		pfandControls.appendChild(removePfandButton);
		li.appendChild(pfandControls);

		cartList.appendChild(li);
	});

	// Update total
	const total = cart.reduce((sum, item) => sum + item.price, 0);
	document.getElementById("total").textContent = `Total: €${total.toFixed(2)}`;
}


// Checkout
document.getElementById("checkout").addEventListener("click", () => {
	// You'd normally implement payment processing here
	alert("Checkout not implemented yet. Total: €" + cart.reduce((sum, item) => sum + item.price, 0).toFixed(2));
	cart.length = 0; // Clear the cart
	updateCart();
});


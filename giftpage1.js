const products = [
    {
      name: "Handmade Necklace",
      price: "₹399",
      image: "https://images.unsplash.com/photo-1618354691373-d8517b3aff6b",
    },
    {
      name: "Painted Pot",
      price: "₹299",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1f85df4",
    },
    {
      name: "Wooden Carving",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1616627984234-595d963b2100",
    },
    {
      name: "Woolen Scarf",
      price: "₹249",
      image: "https://images.unsplash.com/photo-1618354692051-4a8e91a23199",
    },
    {
      name: "Art Canvas",
      price: "₹999",
      image: "https://images.unsplash.com/photo-1616627586214-c6b79e1a4ae1",
    },
    {
      name: "Bamboo Lamp",
      price: "₹649",
      image: "https://images.unsplash.com/photo-1606811841976-e9f44d801dc2",
    },
    {
      name: "Handwoven Bag",
      price: "₹549",
      image: "https://images.unsplash.com/photo-1618354692137-f11966e379f6",
    },
    {
      name: "Terracotta Figurine",
      price: "₹759",
      image: "https://images.unsplash.com/photo-1572188868777-324f3e4b97c1",
    },
    {
      name: "Decorative Mirror",
      price: "₹1299",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      name: "Traditional Painting",
      price: "₹1899",
      image: "https://images.unsplash.com/photo-1618354691649-803e18120df0",
    },
  ];
  
  const container = document.getElementById("products");
  
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="card-content">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <div class="actions">
          <button>Add to Cart</button>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  
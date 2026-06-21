import { useState } from "react";
import menu from "./menuData";
import MenuCard from "./MenuCard";
import FilterBar from "./FilterBar";
import Cart from "./Cart";

function App() {
  const [active, setActive] = useState("All");
  const [cart, setCart] = useState([]);
const [cartOpen, setCartOpen] = useState(false);
  const filtered = active === "All" ? menu : menu.filter((item) => item.tag === active);

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

   function increaseQuantity(id) {
  setCart((prev) => prev.map((i) => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
}

function decreaseQuantity(id) {
  setCart((prev) => prev.map((i) => i.id === id ? i.quantity === 1 ? null : { ...i, quantity: i.quantity - 1 } : i).filter(Boolean));
}

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div style={{backgroundColor: "#fff7ed", minHeight: "100vh"}}>
      <header style={{background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1596560548486-f849c716298e?auto=format&fit=crop&q=80&w=2000')", backgroundSize: "cover", backgroundPosition: "center", height: "350px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative"}}>
        <h1 style={{color: "white", fontSize: "3rem", fontWeight: "800"}}>Donald's <span style={{color: "#f97316"}}>Bukka</span></h1>
        <p style={{color: "#fed7aa"}}>Authentic Nigerian Delicacies Delivered</p>
        <button onClick={() => setCartOpen(true)} style={{position: "absolute", top: "20px", right: "20px", background: "#ea580c", color: "white", padding: "8px 16px", borderRadius: "999px", border: "none", cursor: "pointer", fontWeight: "bold"}}>
          Cart {totalItems > 0 && "(" + totalItems + ")"}
        </button>
      </header>
      <main style={{maxWidth: "1100px", margin: "0 auto", padding: "40px 20px"}}>
        <h2 style={{textAlign: "center", fontSize: "2rem", fontWeight: "bold", marginBottom: "20px"}}>Our Menu</h2>
        <FilterBar active={active} onFilter={setActive} />
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "30px", marginTop: "30px"}}>
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      </main>
{cartOpen && (
  <Cart cart={cart} onRemove={removeFromCart} onClose={() => setCartOpen(false)} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} />
)}
    </div>
  );
}

export default App;
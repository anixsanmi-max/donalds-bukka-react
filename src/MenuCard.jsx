function MenuCard({ item, onAddToCart }) {
  return (
    <div style={{background: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", border: "1px solid #ffedd5", transition: "transform 0.3s", cursor: "pointer"}}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      <div style={{width: "100%", height: "200px", borderRadius: "12px", overflow: "hidden", marginBottom: "16px"}}>
        <img src={item.img} alt={item.name} style={{width: "100%", height: "100%", objectFit: "cover"}} />
      </div>
      <div style={{background: "#ffedd5", color: "#c2410c", padding: "4px 12px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "700", display: "inline-block", marginBottom: "12px"}}>
        {item.tag}
      </div>
      <h3 style={{fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px"}}>{item.name}</h3>
      <p style={{fontSize: "1.5rem", fontWeight: "800", color: "#ea580c", marginBottom: "16px"}}>₦{item.price.toLocaleString()}</p>
      <button
    onClick={() => onAddToCart(item)}
        style={{width: "100%", padding: "10px", border: "2px solid #ea580c", color: "#ea580c", background: "white", borderRadius: "8px", fontWeight: "600", cursor: "pointer", fontSize: "1rem", transition: "all 0.2s"}}
        onMouseEnter={e => { e.currentTarget.style.background = "#ea580c"; e.currentTarget.style.color = "white"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#ea580c"; }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default MenuCard;
function Cart({ cart, onRemove, onClose, onIncrease, onDecrease }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{position: "fixed", top: 0, right: 0, height: "100%", width: "320px", background: "white", boxShadow: "-4px 0 20px rgba(0,0,0,0.1)", zIndex: 50, display: "flex", flexDirection: "column"}}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px", borderBottom: "1px solid #ffedd5"}}>
        <h2 style={{fontSize: "1.2rem", fontWeight: "bold"}}>Your Order</h2>
        <button onClick={onClose} style={{background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "#6b7280"}}>X</button>
      </div>

      <div style={{flex: 1, overflowY: "auto", padding: "24px"}}>
        {cart.length === 0 ? (
          <p style={{color: "#9ca3af", textAlign: "center", marginTop: "40px"}}>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #f3f4f6"}}>
              <div>
                <p style={{fontWeight: "600", fontSize: "0.9rem"}}>{item.name}</p>
                <p style={{color: "#ea580c", fontWeight: "bold"}}>₦{(item.price * item.quantity).toLocaleString()}</p>
   <div style={{display: "flex", alignItems: "center", gap: "8px", marginTop: "4px"}}>
 <button 
  onClick={() => { onDecrease(item.id); new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3').play(); }}
  onMouseDown={e => { e.currentTarget.style.background = "#ea580c"; e.currentTarget.style.color = "white"; }}
  onMouseUp={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#ea580c"; }}
  style={{width: "24px", height: "24px", borderRadius: "50%", border: "1px solid #ea580c", background: "white", color: "#ea580c", cursor: "pointer", fontWeight: "bold", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center"}}>-</button>

<button 
  onClick={() => { onIncrease(item.id); new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3').play(); }}
  onMouseDown={e => { e.currentTarget.style.background = "#ea580c"; e.currentTarget.style.color = "white"; }}
  onMouseUp={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#ea580c"; }}
  style={{width: "24px", height: "24px", borderRadius: "50%", border: "1px solid #ea580c", background: "white", color: "#ea580c", cursor: "pointer", fontWeight: "bold", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center"}}>+</button>
</div>
              </div>
              <button onClick={() => onRemove(item.id)} style={{background: "none", border: "none", color: "#f87171", cursor: "pointer", fontWeight: "600"}}>Remove</button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div style={{padding: "24px", borderTop: "1px solid #ffedd5"}}>
          <div style={{display: "flex", justifyContent: "space-between", marginBottom: "16px"}}>
            <span style={{fontWeight: "bold", fontSize: "1.1rem"}}>Total</span>
            <span style={{fontWeight: "800", color: "#ea580c", fontSize: "1.1rem"}}>₦{total.toLocaleString()}</span>
          </div>
          <button style={{width: "100%", padding: "12px", background: "#ea580c", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", fontSize: "1rem"}}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
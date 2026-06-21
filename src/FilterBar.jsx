const categories = ["All", "Signature", "Local", "Drinks"];

function FilterBar({ active, onFilter }) {
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginTop: "24px"}}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilter(category)}
          style={{
            padding: "8px 20px",
            borderRadius: "999px",
            fontWeight: "600",
            border: active === category ? "none" : "1px solid #fed7aa",
            background: active === category ? "#ea580c" : "white",
            color: active === category ? "white" : "#1f2937",
            cursor: "pointer",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
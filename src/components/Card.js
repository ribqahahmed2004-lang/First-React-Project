function Card({ image, title, description, price }) {
  return (
    <div style={{ border: "3px solid #ddd", borderRadius: "8px", padding: "1rem", width: "309px", textAlign: "center", margin:"1rem" }}>
      <img src={image} alt={title} style={{ width: "100%", borderRadius: "9px" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p style={{ fontWeight: "bold" }}>{price}</p>
    </div>
  );
}

export default Card;

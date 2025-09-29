function Button({onClick}) {
  return (
    <button
      onClick={onClick}
      style={{
        margin: "0.5rem",
        padding: "0.7rem 1.2rem",
        background: "#50AEA0",
        color: "white",
        borderRadius: "5px",
        fontWeight: "bold",
      }}
    >
        Send Message
    </button>
  );
}

export default Button;

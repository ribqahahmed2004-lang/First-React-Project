function Header() {
  return (
    <header style={{ background: "#50AEA0", padding: "1rem", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ margin: 0 }}>Curly Curls</h1>
      <nav>
        <a href="#about" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>About Us</a>
        <a href="#products" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>Products</a>
        <a href="#contact" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;

function Footer() {
  return (
    <footer style={{ background: "#50AEA0", color: "white", padding: "2rem", display: "flex", justifyContent: "space-between",padding: "3rem 6rem"}}>
      <div>
        <h3 style={{fontSize: "25px"}}>Coco Curls</h3>
        <p style={{fontSize: "20px"}}>Natural care for beautiful curls. Nourish, shine, and strengthen your hair with love.</p>
      </div>
      <div>
        <h4>Links</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>About Us</a></li>
          <li><a href="#products" style={{ color: "white", textDecoration: "none" }}>Products</a></li>
          <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

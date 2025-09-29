import Button from "./Button";

function Form() {
  return (
    <div style={{ background: "#D4EEE3", padding: "1rem", textAlign: "center" }}>
      <h2>Contact Us</h2>
      <form style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "auto" }}>
        <input type="text" placeholder="Your Name" required style={{ margin: "0.5rem", padding: "0.5rem" }} />
        <input type="email" placeholder="Your Email" required style={{ margin: "0.5rem", padding: "0.5rem" }} />
        <textarea placeholder="Your Message" rows="4" required style={{ margin: "0.5rem", padding: "0.5rem" }} />
        <Button text="Send Message" type="submit" />
      </form>
    </div>
  );
}

export default Form;

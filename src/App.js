import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Card from "./components/Card";
import Form from "./components/Form";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <About />
        <h2 style={{textAlign:"center"}}>Our Products</h2>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", padding: "3rem 6rem" }}>
          <Card image="https://thecococurls.com/cdn/shop/files/CopyofHairOil_6_800x.jpg?v=1754549782" title="Coconut Oil Serum" description="Nourishes and strengthens curls." price="$12.99" />
          <Card image="https://thecococurls.com/cdn/shop/files/Artboard37_800x.jpg?v=1706892532" title="Curl Defining Cream" description="Defines and enhances natural curls." price="$15.99" />
          <Card image="https://thecococurls.com/cdn/shop/files/The_Basics_3_1_900x.jpg?v=1721038925" title="Hydrating Shampoo" description="Gentle cleansing with moisture." price="$10.99" />
          <Card image="https://thecococurls.com/cdn/shop/files/CopyofArtboard32_800x.jpg?v=1706086325" title="Leave-In Conditioner" description="Keeps your curls soft and shiny." price="$14.99" />
        </div>

      <Form />
      <Footer />
    </div>
  );
}

export default App;

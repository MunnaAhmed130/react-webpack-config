// import sword from "../images/swc-sword.png";
// import swordSvg from "../images/sword.svg";
import Recipes from "./Recipes";
import "../styles/index.scss";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>React webpack</h1>
        </section>

        {/* <img src={sword} alt="sword png" width="250" />
        <img src={swordSvg} alt="sword svg" width="250" /> */}

        <Recipes />
      </main>
    </>
  );
};

export default App;

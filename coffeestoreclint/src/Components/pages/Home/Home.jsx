import Banner from "./Banner";
import Coffeeloder from "./coffeeloder/Coffeeloder";
import Picto from "./picto/picto";
import Review from "./review/Review";

const Home = () => {
  const centeredStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <Banner />
      <Picto />
      <Coffeeloder />
      <Review />
    </div>
  );
};

export default Home;

import React from "react";
import "./Home.css";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1506780789966-15774276e069?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="Online Experiences"
          description="Unique activies we can do together, led by a world of hosts."
        />
        <Card
          src="https://images.unsplash.com/photo-1496080174650-637e3f22fa03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="Guesthouse Alpaca view"
          description="Unique activies we can do together, led by a world of hosts."
          price="$70"
        />
        <Card
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="Entire apartment hosted by Wanda"
          description="Listen to the waves and feel the breeze in your cozy bed."
          price="$125"
        />
        <Card
          src="https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="Charming Studio"
          description="Just above the famous and magical village of Murbach, the studio is west facing with good exposure to sunlight and beautiful views to the garden and other side of the Valley."
          price="$90"
        />
      </div>
    </div>
  );
}

export default Home;

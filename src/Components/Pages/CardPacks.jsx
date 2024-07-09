import React from "react";
import "./CardPacks.css";
import Card from "../Card";
import { MdDeviceUnknown } from "react-icons/md";
import { FaHandPeace } from "react-icons/fa";
import { TbFriends } from "react-icons/tb";
import { GiLovers } from "react-icons/gi";
import Footer from "../Footer";

function CardPacks() {
  return (
    <>
      <div className="cardpack-container">
        <div className="headers-container">
          <h1>Card Packs</h1>
          <h2>Start Conversing!</h2>
        </div>

        <h2 className="cardpack-names"> Not Familar </h2>
        <div className="strangers-container">
          <Card
            title="Strangers"
            subtitle="So you just met each other..."
            icon={MdDeviceUnknown}
          />
        </div>

        <h2 className="cardpack-names"> Sort of familar</h2>
        <div className="acquaintances-container">
          <Card
            title="Acquaintances"
            subtitle="What new things are you expecting?"
            icon={FaHandPeace}
          />
        </div>

        <h2 className="cardpack-names"> Familar </h2>
        <div className="friends-container">
          <Card
            title="Friends"
            subtitle="You think you know each other . . . right?"
            icon={TbFriends}
          />
        </div>

        <h2 className="cardpack-names"> Very Familiar </h2>
        <div className="lovers-container">
          <Card title="Lovers" subtitle="The one and only" icon={GiLovers} />
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default CardPacks;

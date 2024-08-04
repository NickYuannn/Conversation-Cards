import React from "react";
import "./CardPacks.css";
import Card from "../Card";
import { MdDeviceUnknown } from "react-icons/md";
import { FaHandPeace } from "react-icons/fa";
import { TbFriends } from "react-icons/tb";
import { GiLovers } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import Footer from "../Footer";

function CardPacks() {
  return (
    <>
      <div className="cardpack-container">
        <div className="headers-container">
          <h1>Card Packs</h1>
          <h2>
            <i>Start Conversing!</i>
          </h2>
        </div>

        <div className="cardpacks">
          <div className="strangers">
            <h2 className="cardpack-names"> Not Familar </h2>
            <div className="strangers-container">
              <Card
                title="Strangers"
                subtitle="So you just met each other..."
                icon={MdDeviceUnknown}
                link="/Conversation-Cards/Strangers"
              />
            </div>
          </div>

          <div className="acquaintances">
            <h2 className="cardpack-names"> Sort of familar</h2>
            <div className="acquaintances-container">
              <Card
                title="Acquaintances"
                subtitle="What new things are you expecting?"
                icon={FaHandPeace}
                link="/Conversation-Cards/Acquaintances"
              />
            </div>
          </div>

          <div className="friends">
            <h2 className="cardpack-names"> Familar </h2>
            <div className="friends-container">
              <Card
                title="Friends"
                subtitle="You think you know each other . . . right?"
                icon={TbFriends}
                link="/Conversation-Cards/Friends"
              />
            </div>
          </div>

          <div className="lovers">
            <h2 className="cardpack-names"> Very Familiar </h2>
            <div className="lovers-container">
              <Card
                title="Lovers"
                subtitle="The one and only"
                icon={GiLovers}
                link="/Conversation-Cards/Lovers"
              />
            </div>
          </div>

          <div className="family">
            <h2 className="cardpack-names"> Familiar </h2>
            <div className="family-container">
              <Card
                title="Family"
                subtitle="Blood is thicker than water"
                icon={MdFamilyRestroom}
                link="/Conversation-Cards/Family"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CardPacks;

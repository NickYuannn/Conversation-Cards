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
          <div className="row">
            {/* Strangers */}
            <div className="card">
              <div className="strangers-container">
                <Card
                  title="Strangers"
                  subtitle="So you just met each other..."
                  icon={MdDeviceUnknown}
                  link="/Conversation-Cards/Strangers"
                />
              </div>
            </div>

            {/* Acquaintances */}
            <div className="card">
              <div className="acquaintances-container">
                <Card
                  title="Acquaintances"
                  subtitle="What new things are you expecting?"
                  icon={FaHandPeace}
                  link="/Conversation-Cards/Acquaintances"
                />
              </div>
            </div>

            {/* Friends */}
            <div className="card">
              <div className="friends-container">
                <Card
                  title="Friends"
                  subtitle="You think you know each other . . . right?"
                  icon={TbFriends}
                  link="/Conversation-Cards/Friends"
                />
              </div>
            </div>

            {/* Lovers */}
            <div className="card">
              <div className="lovers-container">
                <Card
                  title="Lovers"
                  subtitle="Till Death Do Us Part"
                  icon={GiLovers}
                  link="/Conversation-Cards/Lovers"
                />
              </div>
            </div>
          </div>
          {/*end of row 1*/}
          <div className="row">

            {/* Family */}
            <div className="card">
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

          {/*end of row 2*/}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CardPacks;

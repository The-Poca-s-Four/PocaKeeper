import React from "react";
import Card from "../components/card.jsx";
import cardInfo from "../docs/cardInfo";
import ChannelCard from "../components/ChannelCard.jsx";
import ChannelCardInfo from "../docs/ChannelCardInfo.js";
import AvatarCard from "../components/Avatar.jsx";
import AvatarInfo from "../docs/AvatarInfo.js";
import Contacts from "../components/Contacts.jsx";
import { Space } from "antd";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";

function createCard(cardTerm) {
  return (
    <Card
      key={cardTerm.id}
      icon={cardTerm.icon}
      title={cardTerm.title}
      content={cardTerm.content}
    />
  );
}

function createChannelCard(cardTerm) {
  return (
    <ChannelCard
      key={cardTerm.id}
      iconBig={cardTerm.iconBig}
      title={cardTerm.title}
      contents={cardTerm.contents}
    />
  );
}

function createAvatarCard(avatar) {
  return (
    <AvatarCard
      key={avatar.id}
      name={avatar.name}
      img={avatar.imgURL}
      tel={avatar.phone}
      email={avatar.email}
    />
  );
}

function Body() {
  return (
    <div>
      <div>
        <dl className="dictionary">{cardInfo.map(createCard)}</dl>
        <dl className="dictionary">{ChannelCardInfo.map(createChannelCard)}</dl>
        <dl className="dictionary">{AvatarInfo.map(createAvatarCard)}</dl>
      </div>
      <div
        style={{
          // backgroundColor: "#0d1117",
          // minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Contacts
          icon={<GithubOutlined />}
          title="GitHub Repository"
          description="View our open-source code"
          buttonText="Visit GitHub"
          buttonLink="https://github.com"
        />

        <Contacts
          icon={<MailOutlined />}
          title="Contact Us"
          description="Send us an email"
          buttonText="Send Email"
          buttonLink="mailto:info@example.com"
        />
      </div>
    </div>
  );
}
export default Body;

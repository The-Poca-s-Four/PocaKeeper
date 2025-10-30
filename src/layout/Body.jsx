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
import MainSection from "../components/MainSection.jsx";

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
      {/* <div>
        <dl className="dictionary">{cardInfo.map(createCard)}</dl>
        <dl className="dictionary">{ChannelCardInfo.map(createChannelCard)}</dl>
        <dl className="dictionary">{AvatarInfo.map(createAvatarCard)}</dl>
      </div> */}
      <div>
        <MainSection heading="" subheading="">
          {cardInfo.slice(0, 2).map(createCard)}
        </MainSection>

        <MainSection
          heading="Value Proposition"
          subheading="Why students choose ZeroBase to manage their finances"
        >
          {cardInfo.slice(2, 5).map(createCard)}
        </MainSection>
        <MainSection
          heading="Core Features (MVP)"
          subheading="Essential tools to help you manage your money effectively"
        >
          {cardInfo.slice(5, 9).map(createCard)}
        </MainSection>
        <MainSection
          heading="Impact–Effort Matrix"
          subheading="Strategic prioritization of features based on impact and development effort"
        >
          {ChannelCardInfo.slice(0, 2).map(createChannelCard)}
        </MainSection>

        <MainSection
          heading="Key Performance Indicators"
          subheading="Current metrics tracking our growth and user engagement"
        >
          {cardInfo.slice(9, 13).map(createCard)}
        </MainSection>

        <MainSection heading="Growth Insights" subheading="">
          {cardInfo.slice(19, 22).map(createCard)}
        </MainSection>

        <MainSection
          heading="Business Model"
          subheading="How we reach students and sustain our platform"
        >
          {ChannelCardInfo.slice(2, 5).map(createChannelCard)}
        </MainSection>

        <MainSection
          heading="Meet Our Team"
          subheading="Passionate students building financial solutions for students"
        >
          {AvatarInfo.slice(0, 5).map(createAvatarCard)}
        </MainSection>

        <MainSection heading="Our Values" subheading="">
          {cardInfo.slice(13, 16).map(createCard)}
        </MainSection>

        <MainSection
          heading="Project Roadmap"
          subheading="Our journey from idea to launch • October - December 2025"
        >
          {cardInfo.slice(16, 19).map(createCard)}
        </MainSection>
        <MainSection
          heading="Get in Touch"
          subheading="Have questions or want to collaborate? We'd love to hear from you!"
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
        </MainSection>
      </div>
    </div>
  );
}
export default Body;

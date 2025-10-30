import React from "react";
import Card from "../components/card.jsx";
import cardInfo from "../docs/cardInfo";
import ChannelCard from "../components/ChannelCard.jsx";
import ChannelCardInfo from "../docs/ChannelCardInfo.js";

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

function Body() {
  return (
    <div>
      <div>
        <dl className="dictionary">{cardInfo.map(createCard)}</dl>
        <dl className="dictionary">{ChannelCardInfo.map(createChannelCard)}</dl>
      </div>
    </div>
  );
}
export default Body;

import React from "react";
import Card from "../components/card.jsx";
import cardInfo from "../docs/cardInfo";

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

function Body() {
  return (
    <div>
      <div>
        <dl className="dictionary">{cardInfo.map(createCard)}</dl>
      </div>
    </div>
  );
}
export default Body;

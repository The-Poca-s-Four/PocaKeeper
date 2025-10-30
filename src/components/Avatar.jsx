import React from "react";

function Avatar(props) {
  return <img className="circle-img" src={props.img} alt="avatar_img" />;
}

function Detail(props) {
  return <p className="info">{props.detailInfo}</p>;
}

function AvatarCard(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default AvatarCard;

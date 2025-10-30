import React from "react";

function ChannelCard(props) {
  return (
    <div className="bg-[#0d1117] text-white rounded-2xl p-5 w-80 shadow-lg border border-gray-800">
      <div className="flex items-center gap-2 mb-3">
        <div className="iconBig">{props.iconBig}</div>
        <h2 className="title">{props.title}</h2>
      </div>
      <ul className="space-y-2">
        {props.contents.map((content, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="iconSmall">{props.iconSmall}</div>
            <span className="content">{content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChannelCard;

import React from "react";
import { Link } from "react-router-dom";
import InfoButton from "./InfoButton";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getColor = () => {
  const color = getRandomColor();
  return color;
};

export const UsersItem = (props) => {
  const { login, avatar_url } = props.userInfo;
  const userColor = getColor();
  const path = `/users/${login}`;

  return (
    <li
      style={{
        background: `linear-gradient(180deg, ${userColor} 33%, white 55%)`,
        border: `1px solid ${userColor}`,
      }}
    >
      <img src={avatar_url} alt={avatar_url} />
      <p>{login}</p>
      {
        <Link to={path}>
          <InfoButton color={userColor} />
        </Link>
      }
    </li>
  );
};

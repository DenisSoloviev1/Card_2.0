import React from "react";
import "./Skill.scss";

export default function Skill({ url, svg, name }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {svg}
      <p>{name}</p>
    </a>
  );
}

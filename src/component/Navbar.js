import React from 'react';

export default function Navbar() {
  return (
    <ul className="nav nav-tabs">
      <li role="presentation" className="active">
        <a href="#">Home</a>
      </li>
      <li role="presentation">
        <a href="#">Profile</a>
      </li>
      <li role="presentation">
        <a href="#">Messages</a>
      </li>
    </ul>
  );
}

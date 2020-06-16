import React from 'react';

export default function Box(props) {
  console.log(props);
  return (
    <div
      style={{
        height: 120,
        width: '30%',
        backgroundColor: 'blue',
      }}
    >
      {props.title}
    </div>
  );
}

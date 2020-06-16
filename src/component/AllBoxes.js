import React from 'react';
import Box from './Box';

export default function AllBoxes() {
  return (
    <div
      style={{
        height: 250,
        width: '100%',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box title="about us mini section" />
      <Box title="contact us form" />
      <Box title="apply to join" />
    </div>
  );
}

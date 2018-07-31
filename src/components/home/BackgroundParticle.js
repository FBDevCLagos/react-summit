import React from 'react';
import Particles from 'react-particles-js';

export default ({ backgroundColor }) => (
  <Particles
        params={{
          particles: {
            color: {
              value: backgroundColor
            },
            number: {
              value: 100
            },
            shape: {
              type: "star",
              polygon: {
                nb_sides: 6
              }
            }
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
  />
);

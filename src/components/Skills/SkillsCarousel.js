import React from 'react';
import { Paper } from '@mui/material';
import { StyledCarousel } from './SkillsStyle';

export const SkillsCarousel = ({ skills }) => {
  return (
    <StyledCarousel
      autoPlay={true}
      animation="slide"
      stopAutoPlayOnHover={true}
      interval={4000}
      navButtonsAlwaysVisible={true}
    >
      {skills.map((skill, index) => (
        <Paper key={index} square>
          <img
            className="slideImage"
            src={`/assets/Skillimages/${skill.image}`}
            alt={skill.name}
          />
        </Paper>
      ))}
    </StyledCarousel>
  );
};

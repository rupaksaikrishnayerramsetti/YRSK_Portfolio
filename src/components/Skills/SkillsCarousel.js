import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const StyledCarousel = styled(Carousel)`
  width: 20rem;
  height: 20rem;
  align-items: center;

  .carousel-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: transform 0.5s ease-in-out;
    transform: translateX(0);
  }

  .carousel-item-active {
    transform: translateX(100%);
  }

  .slideImage {
    width: 20rem;
    height: 18rem;
  }

  .carousel-indicators {
    display: none;
  }

  @media (max-width: 767.98px) {
    .slideImage {
        width: 150px;
        height: 220px;
      }
    }
    
    @media (min-width: 992px) {
      width: 40rem;
      height: 30rem;
      align-items: center;
      .slideImage {
        width: 40rem;
        height: 27rem;
      }
    }
`;

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
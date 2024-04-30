import React from 'react'
import styled from 'styled-components'
import { mainSkills } from '../../data/constants'
import { SkillsCarousel } from './SkillsCarousel'
import { Container, Wrapper, Title, techDiv } from './SkillsStyle'

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const styledDiv = styled.div`
.skills-container {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
}
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          During the past year at my previous company, I have gained experience and honed my skills in the following areas.
        </Desc>
        <div>
          {mainSkills.map((skills, index) => (
            <styledDiv key={index+skills.title} class="skills-container">
              <div style={techDiv} class="title">{skills.title}</div>
              <div class="carousel-container">
                  <SkillsCarousel skills={skills.skills} />
              </div>
            </styledDiv>
          ))}
        </div>
      </Wrapper>
    </Container>
  )
}

export default Skills

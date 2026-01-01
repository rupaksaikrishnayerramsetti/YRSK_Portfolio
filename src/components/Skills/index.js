import React from 'react'
import { mainSkills } from '../../data/constants'
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from './SkillsStyle'

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          During the past year, I have gained experience and honed my skills in the following areas.
        </Desc>
        <SkillsContainer>
          {mainSkills.map((skill) => (
            <Skill key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item.name}>
                    <SkillImage src={`${process.env.PUBLIC_URL}/assets/Skillimages/${item.image}`}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
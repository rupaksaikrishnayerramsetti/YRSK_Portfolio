import React from 'react'
import { Card, Image, Tags, Tag, Details, Title, Date, Description, Members, Avatar } from './ProjectCardsStyle'

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={`/assets/projects/${project.image}`}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img? member.img : `/assets/projects/${member.gender?'Female.jpg':'Male.jpg'}`}/>
                ))}
            </Members>
        </Card>
    )
}

export default ProjectCards
import React, { useState } from 'react'
import { Card, Image, Video, Tags, Tag, Details, Title, Date, Description, Members, Avatar } from './ProjectCardsStyle'

const ProjectCards = ({project,setOpenModal}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card 
            onClick={() => setOpenModal({state: true, project: project})}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {project.video && isHovered ? (
                <Video 
                    src={`${process.env.PUBLIC_URL}/assets/projects/${project.video}`} 
                    autoPlay 
                    loop 
                    muted 
                />
            ) : (
                <Image src={`${process.env.PUBLIC_URL}/assets/projects/${project.image}`}/>
            )}
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, index) => (
                    <Avatar key={index} src={member.img? member.img : `${process.env.PUBLIC_URL}/assets/projects/${member.gender?'Female.jpg':'Male.jpg'}`}/>
                ))}
            </Members>
        </Card>
    )
}

export default ProjectCards
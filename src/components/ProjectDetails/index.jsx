import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import { Container, Wrapper, Title, Date, Desc, Image, Label, Tags, Tag, Members, Member, MemberImage, MemberName, Button, ButtonGroup } from './ProjectDetailsStyle';

const index = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <Image src={`${process.env.PUBLIC_URL}/assets/projects/${project?.image}`} />
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    {project.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member) => (
                                    <Member>
                                        <MemberImage src={member.img? member.img : `${process.env.PUBLIC_URL}/assets/projects/${member.gender?'Female.jpg':'Male.jpg'}`} />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github ? member.github : "https://github.com/"} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin ? member.linkedin : "https://www.linkedin.com/in/"} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    <ButtonGroup>
                        <Button dull href={project?.github} target='new'>View Code</Button>
                    </ButtonGroup>
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default index
import React from 'react'
import { Description, Card, Top, Image, Name, Degree, Body, Date,Cgpa, Span } from './EducationCardStyle' 

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={`/assets/Education/${education.img}`} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Cgpa><b>CGPA: </b>{education.cgpa}</Cgpa>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}

export default EducationCard
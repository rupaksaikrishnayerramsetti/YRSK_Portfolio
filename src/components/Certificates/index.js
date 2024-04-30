import React from 'react';
import { certificates } from '../../data/constants';
import { Container, Wrapper, Title, Desc, Divider, StyledDiv, CertificateContainer } from './CertificateStyle';

const openLinkInNewTab = (url) => {
    const newWindow = window.open(url, '_blank');
    if (newWindow) newWindow.focus();
};

export const Certificates = () => {
    return (
        <Container id="coding">
            <Wrapper>
                <Title>Certificates</Title>
                <Desc>
                    I have Done some certifications during my college time in the NPTEL which is a national level platform maintained by the IIT and NIT the courses are thought by the corresponding professors from IIT and NIT.
                    Please Click on the below links to view my certificates.
                </Desc>
                <CertificateContainer>
                    {certificates.map((certificate, index) => (
                        <StyledDiv key={index} onClick={() => openLinkInNewTab(certificate.link)}>
                            {certificate.name}
                        </StyledDiv>
                    ))}
                </CertificateContainer>
                <Divider />
            </Wrapper>
        </Container>
    );
};

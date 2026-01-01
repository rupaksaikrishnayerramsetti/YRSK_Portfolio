import React, { useState } from 'react';
import { certificates } from '../../data/constants';
import { Container, Wrapper, Title, Desc, CardGrid, CertCard, CertImage, CertTitle } from './CertificateStyle';
import { Modal } from '@mui/material';

export const Certificates = () => {
    const [open, setOpen] = useState(false);
    const [currentCert, setCurrentCert] = useState(null);

    const handleOpen = (cert) => {
        setCurrentCert(cert);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentCert(null);
    }

    return (
        <Container id="certificates">
            <Wrapper>
                <Title>Certificates</Title>
                <Desc>
                    I have Done some certifications during my college time in the NPTEL which is a national level platform maintained by the IIT and NIT the courses are thought by the corresponding professors from IIT and NIT.
                </Desc>
                <CardGrid>
                    {certificates.map((cert, index) => (
                        <CertCard key={index} onClick={() => handleOpen(cert)}>
                            <CertImage 
                                src={`${process.env.PUBLIC_URL}/assets/certificates/${cert.img}`} 
                                onError={(e)=>{e.target.onerror=null; e.target.src=`${process.env.PUBLIC_URL}/assets/yrsk.jpg`}} 
                            />
                            <CertTitle>{cert.name}</CertTitle>
                        </CertCard>
                    ))}
                </CardGrid>
            </Wrapper>
            <Modal open={open} onClose={handleClose} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                 <img 
                    src={currentCert ? `${process.env.PUBLIC_URL}/assets/certificates/${currentCert.img}` : ''} 
                    alt="Certificate"
                    style={{maxWidth: '90%', maxHeight: '90%', outline: 'none', borderRadius: '10px'}} 
                 />
            </Modal>
        </Container>
    );
};
import React from 'react'
import { useRef, useState } from 'react';
import { handleError } from './ContactUtility';
import emailjs from '@emailjs/browser';
import { Snackbar, Button } from '@mui/material';
import { Container, Wrapper, Title, Desc, ContactForm, ContactTitle, StyledTextField } from './ContactStyle';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const { hasError, errors } = handleError(formData);

    if (hasError) {
      setErrors(errors);
    } else {
      setIsSending(true);
      emailjs.sendForm('service_6kiwt93', 'template_g068hzu', form.current, 'hbbAzvwkabGNnXBwt')
        .then((result) => {
          setOpen(true);
          form.current.reset();
          setTimeout(() => {
            setIsSending(false);
          }, 2000);
        }, (error) => {
          console.log(error.text);
          setIsSending(false);
        });
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <StyledTextField
            placeholder="Your Email"
            name="from_email"
            variant="outlined"
            error={!!errors.from_email}
            helperText={errors.from_email}
            fullWidth
            InputProps={{
              style: {
                color: 'white',
                borderColor: 'white',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
          />
          <StyledTextField
            placeholder="Your Name"
            name="from_name"
            variant="outlined"
            error={!!errors.from_name}
            helperText={errors.from_name}
            fullWidth
            InputProps={{
              style: {
                color: 'white',
                borderColor: 'white',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
          />
          <StyledTextField
            placeholder="Subject"
            name="subject"
            variant="outlined"
            error={!!errors.subject}
            helperText={errors.subject}
            fullWidth
            InputProps={{
              style: {
                color: 'white',
                borderColor: 'white',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
          />
          <StyledTextField
            placeholder="Message"
            name="message"
            variant="outlined"
            error={!!errors.message}
            helperText={errors.message}
            multiline
            rows={4}
            fullWidth
            InputProps={{
              style: {
                color: 'white',
                borderColor: 'white',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color={isSending ? "success" : "primary"}
            disabled={isSending}
            sx={{
              marginTop: '12px',
              padding: '13px 16px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '600',
              backgroundColor: isSending ? '#4CAF50' : '#1976D2',
              color: isSending ? '#FFFFFF' : '#FFEB3B',
            }}
          >
            {isSending ? 'Done' : 'Send'}
          </Button>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact

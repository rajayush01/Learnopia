import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #141718;
  margin-top:-50px;
  box-shadow:
`;

const Form = styled(motion.form)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(255, 255, 255, 0.5), 0 4px 6px rgba(255, 255, 255, 0.3);
  width: 100%;
  max-width: 500px;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled(motion.textarea)`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  background: #4b79a1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #283e51;
  }
`;

const animationVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const ContactPage = () => {
  return (
    <Container>
      <Form
        initial="hidden"
        animate="visible"
        variants={animationVariants}
      >
        <Input
          type="text"
          placeholder="Your Name"
          variants={animationVariants}
        />
        <Input
          type="email"
          placeholder="Your Email"
          variants={animationVariants}
        />
        <Textarea
          placeholder="Your Message"
          rows="5"
          variants={animationVariants}
        />
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={animationVariants}
        >
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;

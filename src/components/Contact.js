import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { Section, SubTitle, Text, InputLabel, Input, Textarea, Button } from '../styles';

const Contact = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1200 });
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [confirmSend, setConfirmSend] = useState(false);

  const handleSend = () => {
    if (subject.trim() === '' || message.trim() === '') {
      alert('Please enter both subject and message.');
      return;
    }
    setConfirmSend(true);
  };

  const handleConfirm = (confirmed) => {
    if (confirmed) {
      window.location.href = `mailto:${process.env.REACT_APP_EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    }
    setConfirmSend(false);
    setSubject('');
    setMessage('');
  };

  return (
    <Section style={props}>
      <SubTitle>📧 Contact</SubTitle>
      {!confirmSend ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <InputLabel htmlFor="subject">Subject:</InputLabel>
          <Input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <InputLabel htmlFor="message">Message:</InputLabel>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={handleSend}>Send</Button>
        </form>
      ) : (
        <>
          <Text>Do you want to send the message?</Text>
          <Button onClick={() => handleConfirm(true)}>Yes</Button>
          <Button onClick={() => handleConfirm(false)}>No</Button>
        </>
      )}
    </Section>
  );
};

export default Contact;
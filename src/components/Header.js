import React from 'react';
import { useSpring } from 'react-spring';
import { Container, Section, Title, ProfilePic, IconContainer, IconLink } from '../styles';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

const Header = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <Section style={props}>
      <Container>
        <ProfilePic src="profile.jpg" alt="Profile Picture" />
        <Title>Bruno Belloso</Title>
        <IconContainer>
          <IconLink href="https://www.linkedin.com/in/brunobelloso" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </IconLink>
          <IconLink href="https://github.com/brunobelloso" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </IconLink>
        </IconContainer>
      </Container>
    </Section>
  );
};

export default Header;

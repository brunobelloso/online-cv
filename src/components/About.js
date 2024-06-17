import React from 'react';
import { useSpring } from '@react-spring/web'; 
import { Section, SubTitle, Text } from '../styles';

const About = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });

  return (
    <Section id="about" style={props} className="section">
      <SubTitle>👤 About me</SubTitle>
      <Text>
        I am a full stack developer with expertise in JavaScript, Python, MongoDB, SQL, Node.js,
        Express.js, and React.js. I am passionate about creating robust web applications and enjoy
        solving complex problems with innovative solutions.
      </Text>
    </Section>
  );
};

export default About;

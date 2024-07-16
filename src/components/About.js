import React from 'react';
import { useSpring } from '@react-spring/web'; 
import { Section, SubTitle, Text } from '../styles';

const About = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });

  return (
    <Section id="about" style={props} className="section">
      <SubTitle>👤 About me</SubTitle>
      <Text>
        I am a dedicated and detail-oriented professional with a strong background in data entry and administrative tasks. Over the past four years, I have honed my skills in automating data processes and enhancing efficiency within a pharmaceutical laboratory setting. My expertise includes advanced spreadsheet management, dynamic table generation, and seamless data integration using JavaScript and HTML. I am passionate about continuous improvement and strive to streamline workflows, save time, and improve accuracy in all tasks I undertake. My proactive approach and technical proficiency make me an asset in any data-driven environment.
      </Text>
    </Section>
  );
};

export default About;

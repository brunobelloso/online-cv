import React from 'react';
import { useSpring } from '@react-spring/web'; 
import { Section, SubTitle, Text } from '../styles';

const About = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });

  return (
    <Section id="about" style={props} className="section">
      <SubTitle>👤 About me</SubTitle>
      <Text>
      I am a dedicated and detail-oriented Data Entry Operator with over four years of experience in managing production orders and label printing for a pharmaceutical laboratory. My expertise lies in automating data processes, reducing manual errors, and enhancing efficiency through advanced spreadsheet management and dynamic table generation. I am skilled in utilizing JavaScript and HTML for seamless data integration and presentation, making the information visually accessible and error-free. My proactive approach and commitment to continuous improvement have significantly streamlined the workflow, saving time and improving accuracy in label production.
      </Text>
    </Section>
  );
};

export default About;

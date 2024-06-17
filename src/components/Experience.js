import React from 'react';
import { useSpring } from 'react-spring';
import { Section, SubTitle, Text, SectionContainer, ItemContainer, ItemHeader, Logo, TextContainer } from '../styles';

const Experience = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600 });

  return (
    <Section style={props}>
      <SubTitle>💼 Experience</SubTitle>
      <SectionContainer>
        <ItemContainer>
          <ItemHeader>
            <Logo src="/farmacia_vip_logo.png" alt="Farmacia & Laboratorio Vip Logo" />
            <TextContainer>
              <Text>
                <strong>Data Entry Operator, Administrative Assistant</strong>
              </Text>
            </TextContainer>
          </ItemHeader>
          <Text>
            Farmacia & Laboratorio Vip · Full-time
            <br />
            Jan 2020 - Present
            <br />
            Buenos Aires, Argentina · On-site
          </Text>
        </ItemContainer>
      </SectionContainer>
    </Section>
  );
};

export default Experience;

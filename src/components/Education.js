import React from 'react';
import { useSpring } from '@react-spring/web';
import { Section, SubTitle, SectionContainer, ItemContainer, ItemHeader, Logo, TextContainer, Text, Button } from '../styles'; // Updated imports

const Education = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 800 });

  return (
    <Section id="education" style={props}>
      <SubTitle>🎓 Education</SubTitle>
      <SectionContainer>
        <ItemContainer>
          <ItemHeader>
            <Logo src="/educacionit_logo.png" alt="EducacionIT Logo" />
            <TextContainer>
              <Text>
                <strong>Node.js & MongoDB</strong> - Issued Dec 2022
              </Text>
            </TextContainer>
          </ItemHeader>
          <Text>
            Credential ID: 70517859791
          </Text>
          <Button href="https://api.educacionit.com/pdf/certificados/bruno-belloso-705178/59791" target="_blank" rel="noopener noreferrer">
            View Credential
          </Button>
        </ItemContainer>
        <ItemContainer>
          <ItemHeader>
            <Logo src="/educacionit_logo.png" alt="EducacionIT Logo" />
            <TextContainer>
              <Text>
                <strong>Advanced JavaScript</strong> - Issued Jul 2022
              </Text>
            </TextContainer>
          </ItemHeader>
          <Text>
            Credential ID: 70517858158
          </Text>
          <Button href="https://api.educacionit.com/pdf/certificados/bruno-belloso-705178/58158" target="_blank" rel="noopener noreferrer">
            View Credential
          </Button>
        </ItemContainer>
        <ItemContainer>
          <ItemHeader>
            <Logo src="/educacionit_logo.png" alt="EducacionIT Logo" />
            <TextContainer>
              <Text>
                <strong>Python Programming</strong> - Issued Jun 2022
              </Text>
            </TextContainer>
          </ItemHeader>
          <Text>
            Credential ID: 70517858401
          </Text>
          <Button href="https://api.educacionit.com/pdf/certificados/bruno-belloso-705178/58401" target="_blank" rel="noopener noreferrer">
            View Credential
          </Button>
        </ItemContainer>
        <ItemContainer>
          <ItemHeader>
            <Logo src="/cambridge_logo.png" alt="Cambridge Logo" />
            <TextContainer>
              <Text>
                <strong>B2 First (Cambridge)</strong> - Issued Feb 2012
              </Text>
            </TextContainer>
          </ItemHeader>
          <Text>
            Credential ID: 0033615588
          </Text>
          <Button href="https://www.cambridgeenglish.org/exams-and-tests/first/" target="_blank" rel="noopener noreferrer">
            View Credential
          </Button>
        </ItemContainer>
      </SectionContainer>
    </Section>
  );
};

export default Education;

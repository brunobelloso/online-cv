import React from 'react';
import { useSpring } from '@react-spring/web';
import { Section, SubTitle, SectionContainer, ItemContainer, ItemHeader, Logo, TextContainer, Text, Button } from '../styles'; // Updated imports

const Education = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 800 });

  const educationItems = [
    {
      title: "Node.js & MongoDB",
      imgUrl: "/educacionit_logo.png",
      alt: "EducacionIT Logo",
      issuedDate: "Dec 2022",
      credentialId: "70517859791",
      credentialUrl: "https://api.educacionit.com/pdf/certificados/bruno-belloso-705178/59791",
    },
    {
      title: "Introduction to Databases & SQL",
      imgUrl: "/educacionit_logo.png",
      alt: "EducacionIT Logo",
      issuedDate: "Feb 2022",
      credentialId: "70517856570",
      credentialUrl: "https://api.educacionit.com/pdf/certificados/bruno-belloso-705178/56570",
    },
    {
      title: "Advanced JavaScript",
      imgUrl: "/educacionit_logo.png",
      alt: "EducacionIT Logo",
      issuedDate: "Jul 2022",
      credentialId: "70517858158",
      credentialUrl: "https://api.educacionit.com/pdf/certificados/bruno-belloso-705178/58158",
    },
    {
      title: "Python Programming",
      imgUrl: "/educacionit_logo.png",
      alt: "EducacionIT Logo",
      issuedDate: "Jun 2022",
      credentialId: "70517858401",
      credentialUrl: "https://api.educacionit.com/pdf/certificados/bruno-belloso-705178/58401",
    },
    {
      title: "B2 First (Cambridge)",
      imgUrl: "/cambridge_logo.png",
      alt: "Cambridge Logo",
      issuedDate: "Feb 2012",
      credentialId: "0033615588",
      credentialUrl: "https://www.cambridgeenglish.org/exams-and-tests/first/",
    },
  ];

  return (
    <Section id="education" style={props}>
      <SubTitle>🎓 Education</SubTitle>
      <SectionContainer>
        {educationItems.map((item, index) => (
          <ItemContainer key={index}>
            <ItemHeader>
              <Logo src={item.imgUrl} alt={item.alt} />
              <TextContainer>
                <Text>
                  <strong>{item.title}</strong> - Issued {item.issuedDate}
                </Text>
              </TextContainer>
            </ItemHeader>
            <Text>
              Credential ID: {item.credentialId}
            </Text>
            <Button href={item.credentialUrl} target="_blank" rel="noopener noreferrer">
              View Credential
            </Button>
          </ItemContainer>
        ))}
      </SectionContainer>
    </Section>
  );
};

export default Education;

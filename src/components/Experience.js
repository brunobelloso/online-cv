import React from "react";
import { useSpring } from "react-spring";
import {
  Section,
  SubTitle,
  Text,
  SectionContainer,
  ItemContainer,
  ItemHeader,
  Logo,
  TextContainer,
} from "../styles";

const Experience = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600 });

  return (
    <Section style={props}>
      <SubTitle>💼 Experience</SubTitle>
      <SectionContainer>
        <ItemContainer>
          <ItemHeader>
            <Logo
              src="/farmacia_vip_logo.png"
              alt="Farmacia & Laboratorio Vip Logo"
            />
            <TextContainer>
              <Text>
                <strong>Data Entry Specialist</strong>
              </Text>
            </TextContainer>
          </ItemHeader>
          <Text>
            Farmacia & Laboratorio Vip · Full-time
            <br />
            Jan 2020 - Present · 4 yrs 7 mos
            <br />
            Provincia de Buenos Aires, Argentina · On-site
          </Text>
          <Text>
            <strong>Key Responsibilities:</strong>
            <ul>
              <li>Manage production orders by processing item information.</li>
              <li>Capture data from the ERP system into spreadsheets.</li>
              <li>
                Record essential information, including doctor name, item
                quantity, drug name and dose, patient details, elaboration, and
                expiry dates.
              </li>
              <li>
                Maintain an archive of past production orders for audits or
                quality control reviews.
              </li>
              <li>
                Monitor and track label production through dynamic tables and
                spreadsheets.
              </li>
            </ul>
          </Text>
          <Text>
            <strong>Achievements:</strong>
            <ul>
              <li>
                Automated data extraction and transfer, significantly reducing
                manual efforts.
              </li>
              <li>
                Enhanced error detection and correction through improved data
                presentation.
              </li>
              <li>
                Integrated JavaScript and HTML with spreadsheets to automate
                document generation for label printing.
              </li>
            </ul>
          </Text>
        </ItemContainer>
      </SectionContainer>
    </Section>
  );
};

export default Experience;

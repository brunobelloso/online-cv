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

// Function to calculate duration in years and months
const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const end = new Date(); // Current date

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  let duration = "";
  if (years > 0) {
    duration += `${years} ${years === 1 ? "yr" : "yrs"}`;
  }
  if (months > 0) {
    duration += ` ${months} ${months === 1 ? "mo" : "mos"}`;
  }

  return duration.trim();
};

const Experience = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600 });

  // Replace the static duration with calculated duration
  const startDate = "Jan 2020"; 
  const duration = calculateExperience(startDate);

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
            {startDate} · {duration}
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

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
          <Text>
            <strong>Key Responsibilities:</strong>
            <ul>
              <li>
                Manage production orders by processing item information from
                different laboratories.
              </li>
              <li>
                Print labels for items assigned to a specific laboratory,
                ensuring accurate data capture.
              </li>
              <li>
                Extract and transfer item data to new spreadsheets, maintaining
                identification with production order numbers.
              </li>
              <li>
                Record detailed information in spreadsheets, including doctor
                name, item quantity, drug and dosage, patient details,
                elaboration date, and expiry date.
              </li>
              <li>
                Configure spreadsheets to output data in JavaScript object
                format for seamless integration with label printing programs.
              </li>
              <li>
                Generate HTML documents from JavaScript data for efficient and
                accurate label printing.
              </li>
              <li>
                Utilize dynamic tables to monitor production numbers and track
                the quantity of labels produced.
              </li>
            </ul>
          </Text>
          <Text>
            <strong>Achievements:</strong>
            <ul>
              <li>
                Developed a method to automate data extraction and transfer from
                the ERP system to spreadsheets, reducing manual copy-paste
                efforts and saving significant time.
              </li>
              <li>
                Improved error detection and correction through visually
                enhanced data presentation in spreadsheets.
              </li>
              <li>
                Implemented dynamic tables combining formulas to automate label
                counting for each production order.
              </li>
              <li>
                Streamlined label printing process by generating data in
                JavaScript object format, which is converted to HTML for
                printing.
              </li>
            </ul>
          </Text>
        </ItemContainer>
      </SectionContainer>
    </Section>
  );
};

export default Experience;

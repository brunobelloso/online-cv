import styled, { createGlobalStyle } from 'styled-components';
import { animated } from 'react-spring';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Consolas', monospace;
    margin: 0;
    padding: 0;
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
    color: #fff;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Section = styled(animated.section)`
  width: 80%;
  max-width: 800px;
  margin: 20px 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #cfcfcf;
`;

export const SubTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #00d2ff;
`;

export const Text = styled.p`
  font-size: 1em;
  line-height: 1.5;
  color: #e0e0e0;
`;

export const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid #00ffab;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  gap: 10px;
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const SkillItem = styled.li`
  background: #00d2ff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1em;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.a`
  display: inline-block;
  padding: 10px 15px;
  margin-top: 10px;
  background: #00d2ff;
  color: #fff;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #00ffab;
    transform: scale(1.05);
  }
`;

export const InputLabel = styled.label`
  font-size: 1em;
  color: #fff;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 22px); /* Adjust for padding and border */
  margin-bottom: 10px;
  box-sizing: border-box; // Add this to include padding in the element's total width and height
`;

export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 22px); /* Adjust for padding and border */
  margin-bottom: 10px;
  resize: vertical; /* Allow vertical resizing */
  box-sizing: border-box; // Add this to include padding in the element's total width and height
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

export const IconLink = styled.a`
  color: #00d2ff;
  transition: color 0.3s;

  &:hover {
    color: #00ffab;
  }
`;

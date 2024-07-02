import React from 'react';
import { useSpring } from '@react-spring/web';
import { Section, SubTitle, SkillList, SkillItem } from '../styles';

const skills = [
  { name: 'JavaScript', emoji: '🟨' },
  { name: 'Python', emoji: '🐍' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'SQL', emoji: '🐬' },
  { name: 'Node.js', emoji: '🌐' },
  { name: 'Express.js', emoji: '🚂' },
  { name: 'React.js', emoji: '⚛️' },
  { name: 'Que le paso a brunito', emoji: '🐸' }
];

const Skills = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 800 });

  return (
    <Section id="skills" style={props}>
      <SubTitle>🛠️ Skills</SubTitle>
      <SkillList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            {skill.name} {skill.emoji}
          </SkillItem>
        ))}
      </SkillList>
    </Section>
  );
};

export default Skills;

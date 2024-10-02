import React from 'react';
import { Loader } from 'src/components';
import {
  EndingDate,
  Skill,
  StartingDate,
  Experience as WorkExp,
} from 'src/interfaces';
import { Service } from 'src/services';
import './style.css';

export const Experience = () => {
  const [exp, setExp] = React.useState<WorkExp[]>();
  const [skills, setSkills] = React.useState<Skill[]>();

  React.useEffect(() => {
    Service.getExperience().then((response) => {
      setExp(response.data);
    });
    Service.getSkills().then((response) => {
      setSkills(response.data);
    });
  }, []);

  const convertDate = (date: StartingDate | EndingDate) => {
    //2021-05-03 to May 2021
    const d = new Date(date);
    return (
      d.toLocaleString('default', { month: 'long' }) + ' ' + d.getFullYear()
    );
  };

  return (
    <section id="experience" className="experience-container">
      <div className="left-right-container">
        <div className="sub-section-left">
          <h3 className="sub-section-title">Work</h3>
        </div>

        <ul className="sub-section-right">
          {exp == null ? (
            <Loader />
          ) : (
            exp.map((exp) => (
              <li className="work-experience" key={exp.experienceId}>
                <div className="designation-container">
                  <h4 className="designation">{exp.designation}</h4>
                  <p className="designation-duration">
                    ({convertDate(exp.startingDate)} -{' '}
                    {exp.endingDate ? convertDate(exp.endingDate) : 'Present'})
                  </p>
                </div>
                <div className="organization-container">
                  <h5> ({exp.organization})</h5>
                </div>
                <p className="work-description">{exp.workDescription}</p>
              </li>
            ))
          )}
        </ul>
      </div>
      <span className="divider"></span>
      <div className="left-right-container">
        <div className="sub-section-left">
          <h3 className="sub-section-title">Skills</h3>
        </div>
        <ul className="sub-section-right">
          {skills == null ? (
            <Loader />
          ) : (
            skills.map((skill) => (
              <li key={skill.skillId} className="skill">
                <div className="skill-name-container">
                  <h4 className="skill-name">{skill.name}</h4>
                  <p className="skill-proficiency-level">
                    ({skill.proficiencyLevel})
                  </p>
                </div>
                <div className="proficiency">
                  <div
                    className="proficiency-bar"
                    style={{ width: `${skill.proficiency * 10}%` }}
                  ></div>
                </div>
                <div className="experience-in-month-container">
                  <h5 className="experience-in-month-title">Experience</h5>
                  <p className="experience-in-month">
                    {skill.experienceInMonth} MONTHS
                  </p>
                </div>
                <p className="skill-description">{skill.description}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

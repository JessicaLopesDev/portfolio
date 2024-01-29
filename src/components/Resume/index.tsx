import { ResumeCard } from './ResumeCard';
import { ResumeData } from './resume_data';
import * as S from './styles';

export const Resume = () => {
  return (
    <S.Container id="resume">
      <S.Heading>
        <h4>7+ YEARS OF EXPERIENCE</h4>
        <h1>My Resume</h1>
      </S.Heading>
      <S.ContentWrapper>
        <S.Side>
          <S.Heading>
            <h4>2007-2010</h4>
            <h1>Education Quality</h1>
          </S.Heading>
          <S.Content>
            {ResumeData.map((val, id) => {
              if (val.category === 'education') {
                return (
                  <ResumeCard
                    key={id}
                    title={val.title}
                    year={val.year}
                    rate={val.rate}
                    desc={val.desc}
                  />
                );
              }
            })}
          </S.Content>
        </S.Side>
        <S.Side>
          <S.Heading>
            <h4>2007-2010</h4>
            <h1>Job Experience</h1>
          </S.Heading>
          <S.Content>
            {ResumeData.map((val, index) => {
              if (val.category === 'experience') {
                return (
                  <ResumeCard
                    key={index}
                    title={val.title}
                    year={val.year}
                    rate={val.rate}
                    desc={val.desc}
                  />
                );
              }
            })}
          </S.Content>
        </S.Side>
      </S.ContentWrapper>
    </S.Container>
  );
};

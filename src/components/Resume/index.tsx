import { ResumeCard } from './ResumeCard';
import { ResumeData } from './resume_data';
import * as S from './styles';

export const Resume = () => {
  return (
    <S.Container id="resume">
      <S.Heading>
        <h4>2+ ANOS DE EXPERIENCIA</h4>
        <h1>My Resume</h1>
      </S.Heading>
      <S.ContentWrapper>
        <S.Side>
          <S.Heading>
            <h2>Educação</h2>
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
            <h2>Experiencia Profissional</h2>
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

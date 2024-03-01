import { SectionTitle } from '../SectionTitle';
import { ResumeCard } from './ResumeCard';
import { ResumeData } from './resume_data';
import * as S from './styles';

export const Resume = () => {
  return (
    <S.Container id="resume">
      <SectionTitle title="Meu currículo" subtitle="2+ ANOS DE EXPERIENCIA" />
      <S.ContentWrapper>
        <S.Side>
          <S.TopicTitle>Educação</S.TopicTitle>
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
          <S.TopicTitle>Experiencia Profissional</S.TopicTitle>
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

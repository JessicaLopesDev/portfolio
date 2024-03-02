import { SectionTitle } from '../SectionTitle';
import { Wrapper } from '../Wrapper';
import { ProjectCard } from './ProjectCard';
import { PortfolioData } from './projects_data';
import * as S from './styles';

export const Projects = () => {
  return (
    <Wrapper id="portfolio">
      <S.Container>
        <SectionTitle
          title="Meus projetos"
          subtitle="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        />
        <S.GridContent>
          {PortfolioData.map((item, index) => (
            <ProjectCard
              key={index}
              image={item.image}
              category={item.category}
              title={item.title}
              description={item.description}
            />
          ))}
        </S.GridContent>
      </S.Container>
    </Wrapper>
  );
};

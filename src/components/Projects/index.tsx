import { Wrapper } from '../Wrapper';
import { ProjectCard } from './ProjectCard';
import { PortfolioData } from './projects_data';
import * as S from './styles';

export const Projects = () => {
  return (
    <Wrapper id="portfolio">
      <S.Container>
        <S.Heading>
          <S.Title>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</S.Title>
          <S.Subtitle>Meus projetos</S.Subtitle>
        </S.Heading>
        <S.GridContent>
          {PortfolioData.map((item, index) => (
            <ProjectCard
              key={index}
              image={item.image}
              category={item.category}
              totalLike={item.totalLike}
              title={item.title}
            />
          ))}
        </S.GridContent>
      </S.Container>
    </Wrapper>
  );
};

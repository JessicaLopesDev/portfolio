import PortfolioCard from './PortfolioCard';
import PortfolioData from './data';
import * as S from './styles';

const Portfolio = () => {
  return (
    <S.Container>
      <S.Heading>
        <S.Title>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</S.Title>
        <S.Subtitle>My Portfolio</S.Subtitle>
      </S.Heading>
      <S.GridContent>
        {PortfolioData.map((item, index) => (
          <PortfolioCard
            key={index}
            image={item.image}
            category={item.category}
            totalLike={item.totalLike}
            title={item.title}
          />
        ))}
      </S.GridContent>
    </S.Container>
  );
};

export default Portfolio;

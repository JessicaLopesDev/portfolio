import * as S from './styles';
import Home from '../../components/Home';
import Header from '../../components/Header';
import Features from '../../components/Features';
import Portfolio from '../../components/Portfolio';

const PortfolioPage = () => {
  return (
    <S.Container>
      <Header />
      <Home />
      <Features />
      <Portfolio />
    </S.Container>
  );
};

export default PortfolioPage;

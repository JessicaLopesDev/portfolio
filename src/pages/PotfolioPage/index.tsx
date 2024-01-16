import * as S from './styles';
import Home from '../../components/Home';
import Header from '../../components/Header';
import Features from '../../components/Features';

const PortfolioPage = () => {
  return (
    <S.Container>
      <Header />
      <Home />
      <Features />
    </S.Container>
  );
};

export default PortfolioPage;

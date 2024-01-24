import * as S from './styles';
import { Home } from '../../components/Home';
import { Header } from '../../components/Header';
import { Features } from '../../components/Features';
import { Projects } from '../../components/Projects';

export const PortfolioPage = () => {
  return (
    <S.Container>
      <Header />
      <Home />
      <Features />
      <Projects />
    </S.Container>
  );
};

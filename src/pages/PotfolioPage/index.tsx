import * as S from './styles';
import { Home } from '../../components/Home';
import { Header } from '../../components/Header';
import { Features } from '../../components/Features';
import { Projects } from '../../components/Projects';
import { Resume } from '../../components/Resume';
import { Testimonial } from '../../components/Testimonial';
import { Contact } from '../../components/Contact';

export const PortfolioPage = () => {
  return (
    <S.Container>
      <Header />
      <Home />
      <Features />
      <Projects />
      <Resume />
      <Testimonial />
      <Contact />
    </S.Container>
  );
};

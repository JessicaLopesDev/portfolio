import * as S from './styles';
import { Home } from '../../components/Home';
import { Header } from '../../components/Header';
import { Techs } from '../../components/Techs';
import { Projects } from '../../components/Projects';
import { Resume } from '../../components/Resume';
// import { Testimonial } from '../../components/Testimonial';
import { Contact } from '../../components/Contact';

export const PortfolioPage = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Home />
        <Techs />
        <Projects />
        <Resume />
        {/* <Testimonial /> */}
        <Contact />
      </S.Content>
    </S.Container>
  );
};

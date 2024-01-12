import hero from '../../assets/hero.png';
import skill1 from '../../assets/skill1.png';
import skill2 from '../../assets/skill2.png';
import skill3 from '../../assets/skill3.png';
import { Typewriter } from 'react-simple-typewriter';

import * as S from './styles';

const Home = () => {
  return (
    <S.Container id="home">
      <S.Content>
        <S.LeftContent>
          <S.WelcomePhrase>WELCOME TO MY WORLD</S.WelcomePhrase>
          <S.Greeting>
            Hi, I'm <S.Name>Jéssica Lopes</S.Name>
          </S.Greeting>
          <S.ProfessionPhrase>
            a
            <S.Profession>
              <Typewriter
                words={[' Professional Coder.', ' Developer.']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </S.Profession>
          </S.ProfessionPhrase>

          <S.Description>
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I'm not
            adding motion just to spruce things up, but doing it in ways that.
          </S.Description>

          <S.ButtonsContainer>
            <div>
              <S.ButtonsTitle>FIND WITH ME</S.ButtonsTitle>
              <S.ButtonsContent>
                <S.ShadowButton>
                  <S.ContactIcon className="fab fa-facebook-f"></S.ContactIcon>
                </S.ShadowButton>
                <S.ShadowButton>
                  <S.ContactIcon className="fab fa-instagram"></S.ContactIcon>
                </S.ShadowButton>
                <S.ShadowButton>
                  <S.ContactIcon className="fab fa-linkedin-in"></S.ContactIcon>
                </S.ShadowButton>
              </S.ButtonsContent>
            </div>
            <div>
              <S.ButtonsTitle>BEST SKILL ON</S.ButtonsTitle>
              <S.ButtonsContent>
                <S.ShadowButton>
                  <S.SkillImg src={skill1} alt="" />
                </S.ShadowButton>
                <S.ShadowButton>
                  <S.SkillImg src={skill2} alt="" />
                </S.ShadowButton>
                <S.ShadowButton>
                  <S.SkillImg src={skill3} alt="" />
                </S.ShadowButton>
              </S.ButtonsContent>
            </div>
          </S.ButtonsContainer>
        </S.LeftContent>
        <S.RightContent>
          <S.JessicaImgContainer>
            <S.JessicaImg src={hero} alt="" />
          </S.JessicaImgContainer>
        </S.RightContent>
      </S.Content>
    </S.Container>
  );
};

export default Home;

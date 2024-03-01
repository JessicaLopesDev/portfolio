import skill1 from '../../assets/html.png';
import skill2 from '../../assets/css.png';
import skill3 from '../../assets/js.png';
import skill4 from '../../assets/react.png';
import skill5 from '../../assets/redux.png';
import skill6 from '../../assets/next.png';
import skill7 from '../../assets/node.png';
import skill8 from '../../assets/java.png';
import skill9 from '../../assets/docker.png';
import skill10 from '../../assets/mysql.png';
import skill11 from '../../assets/sequelize.png';
import * as S from './styles';
import { Wrapper } from '../Wrapper';

export const Techs = () => {
  return (
    <Wrapper id="features">
      <S.Container>
        <S.Heading>
          <S.Title>TECNOLOGIAS</S.Title>
          <S.Subtitle>Principais tecnologias</S.Subtitle>
          <S.ButtonsTitle>
            Passe o cursor do mouse no card para ler
          </S.ButtonsTitle>
        </S.Heading>
        <S.GridContent>
          <S.ShadowButton onMouseOver={() => console.log('oi')}>
            <S.SkillImg src={skill1} alt="" />
          </S.ShadowButton>
          <S.ShadowButton>
            <S.SkillImg src={skill2} alt="" />
          </S.ShadowButton>
          <S.ShadowButton>
            <S.SkillImg
              style={{ width: '70px', height: '70px' }}
              src={skill3}
              alt=""
            />
          </S.ShadowButton>
          <S.ShadowButton>
            <S.SkillImg src={skill4} alt="" />
          </S.ShadowButton>
          <S.ShadowButton>
            <S.SkillImg src={skill5} alt="" />
          </S.ShadowButton>
          <S.ShadowButton>
            <S.SkillImg src={skill6} alt="" />
          </S.ShadowButton>
          <S.ShadowButton>
            <S.SkillImg src={skill7} alt="" />
          </S.ShadowButton>
          <S.ShadowButton>
            <S.SkillImg src={skill8} alt="" />
          </S.ShadowButton>
          <S.ShadowButton>
            <S.SkillImg src={skill9} alt="" />
          </S.ShadowButton>
          <S.ShadowButton>
            <S.SkillImg src={skill10} alt="" />
          </S.ShadowButton>
          <S.ShadowButton>
            <S.SkillImg src={skill11} alt="" />
          </S.ShadowButton>
          {/* {featuresData.map((item, index) => (
          <FeatureCard
            key={index}
            image={item.image}
            title={item.title}
            desc={item.desc}
          />
        ))} */}
        </S.GridContent>
      </S.Container>
    </Wrapper>
  );
};

// import { FeatureCard } from './Card';
// import { featuresData } from './features_data';
import skill1 from '../../assets/js-.png';
import skill2 from '../../assets/react.png';
import skill3 from '../../assets/nodejs.svg';
import skill4 from '../../assets/java-.png';
import * as S from './styles';

export const Features = () => {
  return (
    <S.Container id="features">
      <S.Heading>
        {/* <S.Title>TECNOLOGIAS</S.Title> */}
        <S.Subtitle>Principais tecnologias</S.Subtitle>
      </S.Heading>
      <S.GridContent>
        <div>
          {/* <S.ButtonsTitle>BEST SKILL ON</S.ButtonsTitle> */}
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
            <S.ShadowButton>
              <S.SkillImg src={skill4} alt="" />
            </S.ShadowButton>
          </S.ButtonsContent>
        </div>
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
  );
};

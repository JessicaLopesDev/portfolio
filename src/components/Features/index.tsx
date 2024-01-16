import FeatureCard from './Card';
import featuresData from './data';
import * as S from './styles';

const Features = () => {
  return (
    <S.Container>
      <S.Heading>
        <S.Title>Features</S.Title>
        <S.Subtitle>What I Do</S.Subtitle>
      </S.Heading>
      <S.GridContent>
        {featuresData.map((item, index) => (
          <FeatureCard
            key={index}
            image={item.image}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </S.GridContent>
    </S.Container>
  );
};

export default Features;

import Card from './Card';
import data from './data';
import * as S from './styles';

const Features = () => {
  return (
    <S.Container>
      <S.Heading>
        <h4>Features</h4>
        <h1>What I Do</h1>
      </S.Heading>
      <S.GridContent>
        {data.map((item, index) => (
          <Card
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

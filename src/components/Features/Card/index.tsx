import * as S from './styles';

export type FeaturesDataType = {
  id?: number;
  image: string;
  title: string;
  desc: string;
};

const FeatureCard = (props: FeaturesDataType) => {
  return (
    <S.Container>
      <img src={props.image} alt="" />
      <S.Title>{props.title}</S.Title>
      <S.Description>{props.desc}</S.Description>
      <a href="/">
        <S.ArrowIcon className="fas fa-arrow-right"></S.ArrowIcon>
      </a>
    </S.Container>
  );
};

export default FeatureCard;

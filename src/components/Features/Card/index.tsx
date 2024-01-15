import * as S from './styles';
import { FeaturesDataType } from '../type';

const Card = (props: FeaturesDataType) => {
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

export default Card;

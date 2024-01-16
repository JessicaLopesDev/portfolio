import * as S from './styles';

export type PortfolioDataType = {
  id?: number;
  category: string;
  totalLike: string;
  title: string;
  image: string;
};

const PortfolioCard = (props: PortfolioDataType) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={props.image} alt="" />
      </S.ImageContainer>
      <S.CategoryContainer>
        <S.CategoryTitle>{props.category}</S.CategoryTitle>
        <label>
          <S.HeartIcon className="far fa-heart" />
          {props.totalLike}
        </label>
      </S.CategoryContainer>
      <div className="title">
        <h2>{props.title}</h2>
        <a href="#popup" className="arrow">
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </S.Container>
  );
};

export default PortfolioCard;

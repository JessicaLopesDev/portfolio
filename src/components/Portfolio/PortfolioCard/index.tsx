import { useState } from 'react';
import * as S from './styles';

export type PortfolioDataType = {
  id?: number;
  category: string;
  totalLike: string;
  title: string;
  image: string;
};

const PortfolioCard = (props: PortfolioDataType) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <S.Container>
        <S.ImageContainer>
          <S.Image src={props.image} alt="" />
        </S.ImageContainer>
        <S.CategoryContainer>
          <S.CategoryTitle>{props.category}</S.CategoryTitle>
          <S.Label>
            <i className="far fa-heart"></i>
            {props.totalLike}
          </S.Label>
        </S.CategoryContainer>
        <div>
          <S.Title>{props.title}</S.Title>
          <a href="#popup">
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </S.Container>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate distinctio assumenda explicabo veniam temporibus
                eligendi.
              </p>
              <p>
                Consectetur adipisicing elit. Cupiditate distinctio assumenda.
                dolorum alias suscipit rerum maiores aliquam earum odit, nihil
                culpa quas iusto hic minus!
              </p>
              <div className="button f_flex mtop">
                <button className="btn_shadow">
                  LIKE THIS <i className="far fa-thumbs-up"></i>
                </button>
                <button className="btn_shadow">
                  VIEW PROJECT<i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioCard;

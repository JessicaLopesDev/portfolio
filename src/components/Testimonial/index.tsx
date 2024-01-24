import * as S from './styles';

export const Testimonial = () => {
  return (
    <S.Container>
      <S.Heading>
        <h4>WHAT CLIENTS SAY</h4>
        <h1>Testimonial</h1>
      </S.Heading>
      <S.SlideContainer>
        <S.ButtonsSlideContainer>
          <S.NextPrevBtn
            className="btn_shadow prev_btn"
            // onClick={() => setIndex(index - 1)}
          >
            <i className="fas fa-arrow-left"></i>
          </S.NextPrevBtn>
          <S.NextPrevBtn
            className="btn_shadow next_btn"
            // onClick={() => setIndex(index + 1)}
          >
            <i className="fas fa-arrow-right"></i>
          </S.NextPrevBtn>
        </S.ButtonsSlideContainer>
      </S.SlideContainer>
    </S.Container>
  );
};

import { TestimonialData } from '../testimonial_data';
import * as S from './styles';

// type SlideDataType = {
//   id?: number;
//   image: string;
//   design: string;
//   name: string;
//   offcer: string;
//   post: string;
//   date: string;
//   desc: string;
//   valueIndex: number;
//   index: number;
// };

export const Slide = ({ data }: any) =>
  // {
  //   image,
  //   design,
  //   name,
  //   offcer,
  //   post,
  //   date,
  //   desc,
  //   valueIndex,
  //   index,
  // }: SlideDataType
  {
    //   let position = 'nextSlide';
    //   if (valueIndex === index) {
    //     position = 'activeSlide';
    //   }
    //   if (
    //     valueIndex === index - 1 ||
    //     (index === 0 && valueIndex === TestimonialData.length - 1)
    //   ) {
    //     position = 'lastSlide';
    //   }
    return (
      <S.Container>
        <S.Left className="left box_shodow">
          <div className="img">
            <img width={'300px'} src="images/aurora.JPG" alt="" />
          </div>
          <S.PersonInfo className="details mtop">
            <span className="primary_color">NCD - DESIGN</span>
            <h2>Jéssica</h2>
            <label>Marketing Officer</label>
          </S.PersonInfo>
        </S.Left>

        <S.Right className="right">
          <div className="icon">
            <div className="quote">
              <S.Icon className="fal fa-quote-right"></S.Icon>
            </div>
          </div>

          <S.RightContent className="content box_shodow mtop">
            <h1>CEO - Marketing</h1>
            <h3>Thoda Department - Mar 4, 2018 - Aug 30, 2021</h3>
            <p>
              Marcent Of Vanice and treatment. Ut tincidunt est ac dolor aliquam
              sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis
              mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales
              phasellus smauris
            </p>
          </S.RightContent>
        </S.Right>
      </S.Container>
    );
  };

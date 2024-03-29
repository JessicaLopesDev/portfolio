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
        <S.Left>
          <div>
            <img
              width={'250px'}
              src="https://img.freepik.com/vetores-gratis/moldura-quadrada-dourada-com-flores-de-inverno_52683-29907.jpg"
              alt=""
            />
          </div>
          <S.PersonInfo>
            <span>NCD - DESIGN</span>
            <h2>Jéssica</h2>
            <label>Marketing Officer</label>
          </S.PersonInfo>
        </S.Left>

        <S.Right>
          <div>
            <div>
              <S.Icon className="fas fa-quote-right"></S.Icon>
            </div>
          </div>

          <S.RightContent>
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

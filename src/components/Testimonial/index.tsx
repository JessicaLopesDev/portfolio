import { useEffect, useState } from 'react';
import { Slide } from './Slide';
import * as S from './styles';
import { TestimonialData } from './testimonial_data';

export const Testimonial = () => {
  const [data, setdata] = useState(TestimonialData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <S.Container>
      <S.Heading>
        <h4>WHAT CLIENTS SAY</h4>
        <h1>Testimonial</h1>
      </S.Heading>
      <S.SlideContainer>
        {/* {TestimonialData.map((value, valueIndex) => {
          return ( */}
        <Slide
          data={TestimonialData[index]}
          // key={value.id}
          // {...value}
          // valueIndex={valueIndex}
          // index={index}
        />
        {/* );
        })} */}
        <S.ButtonsSlideContainer>
          <S.PrevBtn onClick={() => setIndex(index - 1)}>
            <i className="fas fa-arrow-left"></i>
          </S.PrevBtn>
          <S.NextBtn onClick={() => setIndex(index + 1)}>
            <i className="fas fa-arrow-right"></i>
          </S.NextBtn>
        </S.ButtonsSlideContainer>
      </S.SlideContainer>
    </S.Container>
  );
};

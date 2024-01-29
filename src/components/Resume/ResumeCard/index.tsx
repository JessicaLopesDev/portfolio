import * as S from './styles';

export type ResumeDataType = {
  id?: number;
  year: string;
  title: string;
  desc: string;
  rate: string;
};

export const ResumeCard = (props: ResumeDataType) => {
  return (
    <S.Container>
      <S.TitleContent>
        <div>
          <h2>{props.title}</h2>
          <span>{props.year}</span>
        </div>
        <S.Rate>
          <button>{props.rate}</button>
        </S.Rate>
      </S.TitleContent>
      <hr />
      <p>{props.desc}</p>
    </S.Container>
  );
};

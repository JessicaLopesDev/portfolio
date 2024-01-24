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
    <S.Container className="box btn_shadow">
      <S.TitleContent className="title_content d_flex">
        <div className="title">
          <h2>{props.title}</h2>
          <span>{props.year}</span>
        </div>
        <S.Rate className="rate">
          <button className="btn_shadow ">{props.rate}</button>
        </S.Rate>
      </S.TitleContent>
      <hr />
      <p>{props.desc}</p>
    </S.Container>
  );
};

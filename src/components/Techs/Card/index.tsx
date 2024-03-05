import * as S from './styles';

export type TechsDataType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  id?: number;
  image: string;
  title: string;
  desc: string;
};

export const TechCard = ({ image, title, ...rest }: TechsDataType) => {
  return (
    <S.Container {...rest}>
      <S.SkillImg src={image} alt={title} />
    </S.Container>
  );
};

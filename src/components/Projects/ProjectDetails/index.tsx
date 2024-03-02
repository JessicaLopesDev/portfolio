import * as S from './styles';
import { ProjectDetailsProps } from './types';

export const ProjectDetails = ({ data }: ProjectDetailsProps) => {
  const handleRedirectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <S.Left>
        <img src={data.image} alt="" />
      </S.Left>
      <S.Right>
        <span>Projeto</span>
        <S.Title>{data.title}</S.Title>
        <S.Description>{data.description}</S.Description>

        <S.ButtonsContainer>
          {/* <S.Button>
            LIKE THIS
            <S.Icon className="far fa-thumbs-up" />
          </S.Button> */}
          <S.Button
            onClick={() =>
              handleRedirectClick(
                'https://github.com/JessicaLopesDev/my-wallet-dashboard',
              )
            }
          >
            VIEW PROJECT
            <S.Icon className="fas fa-chevron-right" />
          </S.Button>
        </S.ButtonsContainer>
      </S.Right>
    </>
  );
};

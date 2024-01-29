import * as S from './styles';
import { ProjectDetailsProps } from './types';

export const ProjectDetails = ({ data }: ProjectDetailsProps) => {
  return (
    <>
      <S.Left>
        <img src={data.image} alt="" />
      </S.Left>
      <S.Right>
        <span>Featured - Design</span>
        <S.Title>{data.title}</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          distinctio assumenda explicabo veniam temporibus eligendi.
        </S.Description>
        <S.Description>
          Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum
          alias suscipit rerum maiores aliquam earum odit, nihil culpa quas
          iusto hic minus!
        </S.Description>
        <S.ButtonsContainer>
          <S.Button>
            LIKE THIS
            <S.Icon className="far fa-thumbs-up" />
          </S.Button>
          <S.Button>
            VIEW PROJECT
            <S.Icon className="fas fa-chevron-right" />
          </S.Button>
        </S.ButtonsContainer>
      </S.Right>
    </>
  );
};

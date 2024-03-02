// import { useState } from 'react';
import { useState } from 'react';
import * as S from './styles';
import { Modal } from '../../Modal';
import { ProjectDataProps } from '../ProjectDetails/types';
import { ProjectDetails } from '../ProjectDetails';

export type ProjectDataType = {
  id?: number;
  category: string;
  title: string;
  image: string;
  description: string;
};

export const ProjectCard = (props: ProjectDataType) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState({} as ProjectDataProps);

  return (
    <>
      <S.Container>
        <S.TopContent>
          <S.Image src={props.image} alt="" />
          <S.TitleContainer>
            <S.CategoryTitle>{props.category}</S.CategoryTitle>
            <S.Title>{props.title}</S.Title>
          </S.TitleContainer>
        </S.TopContent>
        <S.ButtonBox>
          <S.Button
            onClick={() => {
              setModalIsOpen(true);
              setProjectDetails({
                image: props.image,
                title: props.title,
                description: props.description,
              });
            }}
          >
            VER DETALHES
            <S.Icon className="fas fa-arrow-right"></S.Icon>
          </S.Button>
        </S.ButtonBox>
      </S.Container>

      <Modal isOpen={modalIsOpen} onClose={setModalIsOpen}>
        <ProjectDetails data={projectDetails} />
      </Modal>
    </>
  );
};

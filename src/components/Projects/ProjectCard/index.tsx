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
        <S.ImageContainer>
          <S.Image src={props.image} alt="" />
        </S.ImageContainer>
        <S.CategoryContainer>
          <S.CategoryTitle>{props.category}</S.CategoryTitle>
          <label>
            <S.HeartIcon className="far fa-heart"></S.HeartIcon>
          </label>
        </S.CategoryContainer>
        <div>
          <S.Title>{props.title}</S.Title>
          <div
            onClick={() => {
              setModalIsOpen(true);
              setProjectDetails({
                image: props.image,
                title: props.title,
                description: props.description,
              });
            }}
          >
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </S.Container>

      <Modal isOpen={modalIsOpen} onClose={setModalIsOpen}>
        <ProjectDetails data={projectDetails} />
      </Modal>
    </>
  );
};

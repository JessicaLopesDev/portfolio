// import { useState } from 'react';
import { useState } from 'react';
import * as S from './styles';
import Modal from '../../Modal';
import { ProjectDataProps } from '../ProjectDetails/types';
import { ProjectDetails } from '../ProjectDetails';

export type ProjectDataType = {
  id?: number;
  category: string;
  totalLike: string;
  title: string;
  image: string;
};

const ProjectCard = (props: ProjectDataType) => {
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
            {props.totalLike}
          </label>
        </S.CategoryContainer>
        <div>
          <S.Title className="title">{props.title}</S.Title>
          <div
            onClick={() => {
              setModalIsOpen(true);
              setProjectDetails({ image: props.image, title: props.title });
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

export default ProjectCard;

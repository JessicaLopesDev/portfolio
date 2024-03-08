import hero from '/images/je.png';

import { Typewriter } from 'react-simple-typewriter';

import * as S from './styles';
import { Wrapper } from '../Wrapper';

export const Home = () => {
  const handleDownload = () => {
    const downloadUrl = '/pdfs/Jessica-cv.pdf';

    fetch(downloadUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');

        link.href = url;
        link.setAttribute('download', 'jessica-cv.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      })
      .catch((error) => {
        console.error('Erro ao fazer o download do arquivo:', error);
      });
  };

  return (
    <Wrapper id="home" hasscreenHeight>
      <S.LeftContent>
        <div>
          <S.Greeting>
            Olá, sou a <S.Name>Jéssica Lopes</S.Name>
          </S.Greeting>
          <S.ProfessionPhrase>
            <S.Profession>
              <Typewriter
                words={[
                  ' Desenvolvedora.',
                  ' Front-End.',
                  ' Back-End.',
                  ' FullStack.',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </S.Profession>
          </S.ProfessionPhrase>

          <S.Description>
            Uma Desenvolvedora Web FullStack que acredita em um mundo melhor e
            mais acessível através da inovação e tecnologia. Sou curiosa e
            adepta do aprendizado contínuo e busco constantemente me evoluir
            profissionalmente assim como a desenvolver e melhorar minha
            inteligência emocional.
          </S.Description>
        </div>

        <S.ResumeContainer>
          <S.ResumeButton onClick={handleDownload}>
            Download CV
            <i className="fa-solid fa-file-arrow-down"></i>
          </S.ResumeButton>
        </S.ResumeContainer>
      </S.LeftContent>
      <S.RightContent>
        <S.JessicaImgContainer>
          <S.JessicaImg src={hero} alt="" />
        </S.JessicaImgContainer>
      </S.RightContent>
    </Wrapper>
  );
};

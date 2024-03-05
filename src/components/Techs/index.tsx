import * as S from './styles';
import { Wrapper } from '../Wrapper';
import { techsData } from './techs_data';
import { TechCard } from './Card';
import { useState } from 'react';

export const Techs = () => {
  const initialMessage = '*Passe o cursor do mouse no card para ler*';
  const [message, setMessage] = useState(initialMessage);

  return (
    <Wrapper
      id="features"
      title="Habilidades"
      subtitle="TECNOLOGIAS"
      hasScreenHeight
    >
      <S.Container>
        <S.TechsDescription>{message}</S.TechsDescription>
        <S.GridContent>
          {techsData.map((item, index) => (
            <TechCard
              key={index}
              image={item.image}
              title={item.title}
              desc={item.desc}
              onMouseOut={() => setMessage(initialMessage)}
              onMouseOver={() => {
                setMessage(item.desc);
              }}
            />
          ))}
        </S.GridContent>
      </S.Container>
    </Wrapper>
  );
};

import { useState } from 'react';
import contact1 from './contact1.png';

import * as S from './styles';
import { Wrapper } from '../Wrapper';

export const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const InputEvent = (event: any) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event: any) => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`,
    );
  };

  return (
    <Wrapper
      id="contact"
      title="Entre em contato"
      subtitle="CONTATO"
      hasscreenHeight
    >
      <S.Container>
        <S.ContentContainer>
          <S.Left>
            <S.BoxContent>
              <div>
                <img src={contact1} alt="" />
              </div>
              <S.Details>
                <p>CELULAR: +5543996143068</p>
                <p>EMAIL: jessicalopes.dev@gmail.com</p> <br />
                <span>REDES SOCIAIS</span>
                <S.ContactButtons>
                  <button>
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button>
                    <i className="fab fa-instagram"></i>
                  </button>
                </S.ContactButtons>
              </S.Details>
            </S.BoxContent>
          </S.Left>

          <S.Right>
            <form onSubmit={formSubmit}>
              <S.NamePhoneContainer>
                <input
                  type="text"
                  name="fullname"
                  placeholder="NOME"
                  value={data.fullname}
                  onChange={InputEvent}
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="TELEFONE"
                  value={data.phone}
                  onChange={InputEvent}
                />
              </S.NamePhoneContainer>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="ASSUNTO"
                  value={data.subject}
                  onChange={InputEvent}
                />
              </div>
              <div>
                <textarea
                  cols={30}
                  rows={4}
                  name="message"
                  placeholder="MENSAGEM"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <S.SendButton>
                ENVIAR MENSAGEM <i className="fa fa-long-arrow-right"></i>
              </S.SendButton>
            </form>
          </S.Right>
        </S.ContentContainer>
      </S.Container>
    </Wrapper>
  );
};

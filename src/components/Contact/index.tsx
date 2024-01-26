import { useState } from 'react';
import contact1 from './contact1.png';

import * as S from './styles';

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
    <S.Container>
      <S.Heading className="heading text-center">
        <h4>CONTACT</h4>
        <h1>Contact With Me</h1>
      </S.Heading>

      <S.ContentContainer className="content d_flex">
        <S.Left className="left">
          <S.BoxContent className="box box_shodow">
            <div className="img">
              <img src={contact1} alt="" />
            </div>
            <S.Details className="details">
              <h1>Nevine Acotanza</h1>
              <p>Chief Operating Officer</p>
              <p>
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>{' '}
              <br />
              <p>Phone: +01234567890</p>
              <p>Email: admin@example.com</p> <br />
              <span>FIND WITH ME</span>
              <S.ContactButtons className="button f_flex">
                <button className="btn_shadow">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fab fa-instagram"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fab fa-twitter"></i>
                </button>
              </S.ContactButtons>
            </S.Details>
          </S.BoxContent>
        </S.Left>

        <S.Right className="right box_shodow">
          <form onSubmit={formSubmit}>
            <S.NamePhoneContainer className="f_flex">
              <div className="input row">
                <span>YOUR NAME</span>
                <input
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                />
              </div>
              <div className="input row">
                <span>PHONE NUMBER </span>
                <input
                  type="number"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                />
              </div>
            </S.NamePhoneContainer>
            <div className="input">
              <span>EMAIL </span>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={InputEvent}
              />
            </div>
            <div className="input">
              <span>SUBJECT </span>
              <input
                type="text"
                name="subject"
                value={data.subject}
                onChange={InputEvent}
              />
            </div>
            <div className="input">
              <span>YOUR MESSAGE </span>
              <textarea
                cols={30}
                rows={10}
                name="message"
                value={data.message}
                onChange={InputEvent}
              ></textarea>
            </div>
            <S.SendButton className="btn_shadow">
              SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
            </S.SendButton>
          </form>
        </S.Right>
      </S.ContentContainer>
    </S.Container>
  );
};

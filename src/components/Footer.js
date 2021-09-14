import React from 'react'
import styled from 'styled-components'; //style package.
import BgImg from '../assets/Uber-Eats.jpg'

//meneal style pakage 
const Section = styled.section`
  /* background-image: url(${BgImg}); */
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
`;

const Title = styled.p`
  font-size: 40px;
  color: black;
  font-weight: 400;
  text-align: center;
  font-weight:bold;
  width: 800px;
`;

const Img = styled.div`
   padding-top: 50px;
`;

const Desc = styled.p`
  width: 800px;
  font-size: 20px;
  color: black;
  line-height: 30px;
  margin-top: 1500px;
  font-weight:normal;
  text-align: center;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;


const Footer = () => {
    return (
        <div>
            <Section>
                <Content>
                    <Left>
                        <Title>
                            
                        </Title>
                        <Img>
                            
                        </Img>
                        <Desc>
                         ⓒ 2021 Starbucks Coffee Company. All Rights Reserved.
                        </Desc>
                    </Left>
                </Content>
            </Section>
        </div>
    )
}

export default Footer

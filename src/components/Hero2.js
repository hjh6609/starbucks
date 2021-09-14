import React from 'react'
import styled from 'styled-components'; //style package.
import BgImg from '../assets/Gift-Card.jpg'

//meneal style pakage 
const Section = styled.section`
  /* background-image: url(${BgImg}); */
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  background-position: center;
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
  padding-top: 350px;
`;

const Img = styled.div`
  padding-top: 50px; 
`;

const Desc = styled.p`
  width: 800px;
  font-size: 20px;
  color: black;
  line-height: 30px;
  margin-top: 58px;
  font-weight:normal;
  text-align: center;
  padding-bottom: 500px;
`;


const Hero2 = () => {
    return (
        <div>
            <Section>
                <Content>
                    <Left>
                        <Title>
                            Buy a Card, get a Card <br />
                            Monday, Nov. 30
                        </Title>
                        <Img>
                            <img src={BgImg} width='800' height='auto' alt="" />
                        </Img>
                        <Desc>
                            This Cyber Monday, Nov. 30 (starting at 10 a.m. PST), buy one $20 eGift and receive a $3 eGift.
                            Starbucks Cards can be loaded with amounts from $5-$500 and they’re perfect for pairing
                            with seasonal drinkware or a pound of packaged coffee.
                            For those who won’t be exchanging gifts with their friends or loved ones in person this year,
                            an eGift is the perfect way to show you’re thinking of them
                            (you can even send a gift card via messaging platforms like iMessage!).
                        </Desc>
                    </Left>
                </Content>
            </Section>
        </div>
    )
}

export default Hero2

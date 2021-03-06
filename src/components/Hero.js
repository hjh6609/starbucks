import React from 'react'
import styled from 'styled-components'; //style package.
import BgImg from '../assets/Starbucks-Tumblers.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'

//meneal style pakage 
const Section = styled.section`
  background-image: url(${BgImg});
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
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
  width: 800px;
  font-size: 40px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  font-weight:bold;
  margin-top: 358px;
`;

const Desc = styled.p`
  width: 800px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 138px;
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

const Hero = () => {
    return (
        <div>
            <Section>
                <Content>
                    <Left>
                        <Title>
                        Starbucks Ushers in the Season <br />of Giving
                        </Title>
                        {/* <Desc>
                            Starbucks is ready to turn up the seasonal giving spirit with special deals
                            and ways to give on the StarbucksĀ® app, through Starbucks Delivers, and in stores.
                            From affordable tumblers to special offers, customers can find the perfect gifts
                            for those on their list this holiday season.
                        </Desc> */}
                        {/* <Button href='https://github.com/hjh6609' target='_blank'>
                            <span>Season of Giving</span>
                            <MdKeyboardArrowRight />
                        </Button> */}
                    </Left>
                </Content>
            </Section>
        </div>
    )
}

export default Hero

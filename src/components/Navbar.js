import React, { useState} from 'react'
import styled from 'styled-components/macro'
import Img from '../assets/logo.png'
import {Link} from 'react-router-dom'


const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: #fff;
`;

const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  /* background: linear-gradient(90deg, rgb(66,2,194) 0%, rgb(0,78,194)100%); */

`;

// const Logo = styled.div`
//   width: 160px;
//   height: 60px;
//   background: url(${Img}) 0 45% no-repeat;
//   background-size: 100% 100%;
//   cursor: pointer;
// `;

const First = styled.div`
  width: 160px;
  height: 60px;
  padding: 48px 5px 10px 25px;
  background-size: 100% 100%;
  cursor: pointer;
  font-weight: bold;
`;

const Nav = styled.nav`
  flex: 1;
  position: relative;
  padding-left: 100px;
`;

const NavLink = styled(Link)`
  color: #000;
  padding: 0 15px;
  font-size: 16px;
  line-height: 80px;
  font-weight: 700;
  text-decoration: none;
  font-weight: 500;
`;

const Search = styled.div`
  right: 235px;
  position: 200px;
`;

const SearchWrap = styled.div`
  width: 220px;
  height: 36px;
  position: relative;
  box-sizing: border-box;
  background: rgba(179, 191, 201, 0.15);
  line-height: 33px;
  padding-left: 50px;
  border-radius: 19px;
`;

const Input = styled.input`
  color: #000;
  width: 196px;
  border: transparent;
  font-size: 12px;
  background: transparent;
  outline: none;
  &::placeholder {
    color: #d1d8de;
  }
`;


//original source
// const Search = styled.div`
//   right: 235px;
//   position: absolute;
// `;

// const SearchWrap = styled.div`
//   width: 220px;
//   height: 36px;
//   position: relative;
//   box-sizing: border-box;
//   background: rgba(179, 191, 201, 0.15);
//   line-height: 33px;
//   padding-left: 37px;
//   border-radius: 19px;
// `;

// const Input = styled.input`
//   color: #000;
//   width: 196px;
//   border: transparent;
//   font-size: 12px;
//   background: transparent;
//   outline: none;
//   &::placeholder {
//     color: #d1d8de;
//   }
// `;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.div`
  width: 110px;
  color: #fff;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  box-sizing: border-box;
  background: #007cff;
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
`;



const Navbar = () => {
    
    return (
        <NavbarContainer>
            <NavbarWrap>
                {/* <Logo /> */}
                <First>
                    STARBUCK COFEE
                </First>
                <Nav>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/">PEOPLE</NavLink>
                    <NavLink to="/">PLANET</NavLink>
                    <NavLink to="/">COFFEE&CRAFT</NavLink>
                    <NavLink to="/">PRESS&CENTER</NavLink>
                </Nav>
                <Search>
                    <SearchWrap>
                        <Input type="text" placeholder='Search' />
                    </SearchWrap>
                </Search>
                {/* <ButtonContainer>
                    <Button
                        css={`
                            color: #037cff;
                            background: #fff;
                            `}
                    >
                        SIGN UP
                    </Button>
                    <Button>LOG IN</Button>
                </ButtonContainer> */}
            </NavbarWrap>
        </NavbarContainer>
    )
}

export default Navbar

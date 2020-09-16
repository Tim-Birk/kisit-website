import React from "react"
import { Link } from "gatsby"
import { Menu } from "antd"
import styled from "styled-components"

import kisitLogo from "../../images/kisitLogo.png"

const NavContainer = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 50% 50%;
    padding: ${theme["padding-xsmall"]} ${theme["padding-medium"]};
    
    @media ${theme.device.tablet} { 
      padding: ${theme["padding-xsmall"]} ${theme["padding-large"]};
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const StyledLogo = styled.img`
  ${({ theme }) => ` 
    width: 48px;
    
    @media ${theme.device.tablet} { 
        width: 64px;
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`
const NavMenu = styled(Menu)`
  ${({ theme }) => ` 
    display: flex;
    justify-content: flex-end;
    border-bottom: none;
    background-color: transparent;
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const NavItem = styled(Menu.Item)`
  ${({ theme }) => `
    font-size: ${theme["font-size-sm"]};
    letter-spacing: 1.5px;
    
    @media ${theme.device.tablet} { 
      font-size: ${theme["font-size-md"]};
    }
    @media ${theme.device.laptop} { 
      
    }
 `}
`

class Navbar extends React.Component {
  state = {
    current: "mail",
  }

  handleClick = e => {
    console.log("click ", e)
    this.setState({ current: e.key })
  }

  render() {
    const { current } = this.state
    return (
      <NavContainer>
        <StyledLogo src={kisitLogo} />
        <NavMenu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <NavItem key="home">
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem key="services">
            <Link to="/#solutions-section">Solutions</Link>
          </NavItem>
          <NavItem key="about">
            <Link to="/#about-section">About</Link>
          </NavItem>
          {/* <NavItem key="login">Login</NavItem> */}
        </NavMenu>
      </NavContainer>
    )
  }
}

export default Navbar

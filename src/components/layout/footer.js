import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  ${({ theme }) => ` 
    background-color: ${theme["dark-green"]};
    width: 100vw;
    padding-top: ${theme["padding-small"]};
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
      
        
    }
 `}
`

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    padding: ${theme["padding-medium"]} 0;
    max-width: 1500px;
    margin: 0 auto;
    a {
      color: #fff;
    }
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
      display: grid;
      grid-template-columns: 1fr 1fr;
      // padding: ${theme["padding-xlarge"]} 0;
    }
 `}
`

const LinksContainer = styled.div`
  ${({ theme }) => ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const LinksList = styled.ul`
  ${({ theme }) => ` 
    list-style: none;
    padding: 0; 
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
        
    }
 `}
`
const LinksListItem = styled.li`
  ${({ theme }) => ` 
    padding: ${theme["padding-xsmall"]} 0;
    text-align: center;
    font-size: 1.25em;
    letter-spacing: 1.25px;
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
      letter-spacing: 1.5px;
    }
 `}
`

const ContactContainer = styled.div`
  ${({ theme }) => ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
        
    }
 `}
`

const ContactsList = styled.ul`
  ${({ theme }) => ` 
    list-style: none;
    padding: 0; 

    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
        
    }
 `}
`
const ContactsListItem = styled.li`
  ${({ theme }) => ` 
    padding: ${theme["padding-xsmall"]} 0 0;
    text-align: center;
    color: #fff;
    font-size: 1.15em;
    letter-spacing: 1.25px;

    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        letter-spacing: 1.5px;
    }
 `}
`

const Footer = () => {
  return (
    <StyledFooter>
      <SectionContainer>
        <LinksContainer>
          <LinksList>
            <LinksListItem>
              <Link to="/">Home</Link>
            </LinksListItem>
            <LinksListItem>
              <Link to="/#solutions-section">Solutions</Link>
            </LinksListItem>
            <LinksListItem>
              <Link to="/#about-section">About</Link>
            </LinksListItem>
          </LinksList>
        </LinksContainer>
        <ContactContainer>
          <ContactsList>
            <ContactsListItem>
              51 Maryland Avenue, Dix Hills, NY 11746
            </ContactsListItem>
            <ContactsListItem>631 667-0021</ContactsListItem>
            <ContactsListItem>schealthcare@yahoo.com</ContactsListItem>
          </ContactsList>
        </ContactContainer>
      </SectionContainer>
    </StyledFooter>
  )
}

export default Footer

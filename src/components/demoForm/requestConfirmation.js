import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Button } from "antd"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    background-color: #fff;    
    height: 60vh;
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const SectionTitleContainer = styled.div`
  ${({ theme }) => ` 
    background-color: #fff;  
    padding: ${theme["padding-small"]} ${theme["padding-zero"]} ${theme["padding-medium"]};
    display: flex;
    flex-direction: column;
    align-items: center;
      
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
      padding: ${theme["padding-small"]} ${theme["padding-zero"]} ${theme["padding-zero"]};
      width: 100%;
      height: 100%;
      
    }
 `}
`

const SectionTitle = styled.h1`
  ${({ theme }) => ` 
    color: ${theme["kisit-color"]};
    letter-spacing: 2px;
    @media ${theme.device.tablet} { 
        font-size: 2em !important;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const SectionTitleCaption = styled.p`
  ${({ theme }) => ` 
    margin: ${theme["margin-zero"]} ${theme["margin-small"]} !important;
    color: ${theme["kisit-color"]};
    text-align: justify;
    line-height: 1.5;
    letter-spacing: 1px;
    
    font-size: ${theme["font-size-md"]};
    
    @media ${theme.device.mobileM} { 
      padding: ${theme["padding-small"]} ${theme["padding-zero"]} !important;
    }
    @media ${theme.device.tablet} { 
      text-align: center;
      max-width: 800px;
      margin: 0 auto !important;
    }
    @media ${theme.device.laptop} { 
       font-size: 1.75em;
       max-width: 800px;
       margin: 0 auto !important;
    }
 `}
`

const HomeButton = styled(Button)`
  ${({ theme }) => ` 
    background-color: ${theme["kisit-color"]};
    color: #fff;
    margin: ${theme["margin-small"]} auto ${theme["margin-xlarge"]};
    border: none;
    font-weight: 600;
    letter-spacing: 1.25px;

    &:hover {
        background-color: ${theme["kisit-color"]};
        border: 1px solid ${theme["kisit-color"]};
        transition: all 0.3s ease 0s;
        transform: scale(1.05) translateZ(0);
    }

    @media ${theme.device.tablet} { 
        font-size: 1.25em;
        height: 40px;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const RequestConfirmation = () => {
  return (
    <SectionContainer>
      <SectionTitleContainer>
        <SectionTitle>Confirmation</SectionTitle>
        <SectionTitleCaption>
          Thank you. Your demo request has been received. Please allow 1-3
          business days for someone to reach out to you via email.
        </SectionTitleCaption>
        <HomeButton>
          <Link to="/">Home</Link>
        </HomeButton>
      </SectionTitleContainer>
    </SectionContainer>
  )
}

export default RequestConfirmation

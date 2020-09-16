import React from "react"
import styled from "styled-components"
import { Typography } from "antd"

const { Title } = Typography

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const Curved = styled.div`
  ${({ theme }) => ` 
    background-color: ${theme["kisit-color"]};
    color: #fff;
    text-align: center;
    overflow: hidden;
    padding-top: ${theme["padding-large"]};
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        padding-top: ${theme["padding-zero"]};
    }
 `}
`

const CurvedTitle = styled(Title)`
  ${({ theme }) => ` 
    color: inherit !important;
    max-width: 700px;
    letter-spacing: 1.5px;
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
      letter-spacing: 2px;
    }
 `}
`

const CurvedCaption = styled.p`
  ${({ theme }) => ` 
    margin: ${theme["margin-zero"]} ${theme["margin-small"]} !important;
    color: inherit !important;
    text-align: justify;
    line-height: 1.5;
    letter-spacing: 1.5px;

    font-size: ${theme["font-size-md"]};
    
    @media ${theme.device.mobileL} { 
        
    }
    @media ${theme.device.laptop} { 
       font-size: 1.75em;
    }
 `}
`

const CurvedSvgContainer = styled.div`
  ${({ theme }) => ` 
    width: 100vw;
    margin-bottom: -1em;

    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`
const CurvedSvg = styled.svg`
  ${({ theme }) => ` 
    display: block;
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const HeroContent = styled.div`
  ${({ theme }) => ` 
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        max-height: 400px;
        
    }
 `}
`

const HeroTextContainer = styled.div`
  ${({ theme }) => ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 ${theme["padding-small"]};
    max-width: 1700px;
    margin: ${theme["margin-small"]} auto; 
    h1 {
        font-size: 2em;
    }


    @media ${theme.device.tablet} { 
      
    }
    @media ${theme.device.laptop} { 
        padding: 0 ${theme["padding-medium"]};
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;
        
        h1 {
            padding: ${theme["padding-medium"]} ${theme["padding-zero"]};
            font-size: 3em;
        }
    }
 `}
`

const AboutSection = () => {
  return (
    <SectionContainer>
      <CurvedSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 319"
        preserveAspectRatio="none"
      >
        <path
          fill="#20bd67"
          fillOpacity="1"
          d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,229.3C672,245,768,235,864,208C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </CurvedSvg>
      <Curved>
        <HeroContent id="about-section">
          <HeroTextContainer>
            <CurvedTitle>
              Proprietary Software of <br /> SC Health Care Consulting
            </CurvedTitle>
            <CurvedCaption>
              SC Health Care Consulting, LLC are industry leading experts in
              helping home health care agencies develop strategies for future
              profitability. Specializing in operational and financial
              management, we have put our expertise and industry knowledge into
              this comprehensive platform for all of your agency's needs. Our
              years of experience in dealing with the shortcomings of
              our clients' existing IT solutions has given us insight into
              making sure our backend is set up to provide you with{" "}
              <strong><span style={{textDecoration: "underline"}}>accurate</span> metrics that matter</strong>.
            </CurvedCaption>
          </HeroTextContainer>
        </HeroContent>
        <CurvedSvgContainer>
          <CurvedSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 319"
            preserveAspectRatio="none"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,229.3C672,245,768,235,864,208C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </CurvedSvg>
        </CurvedSvgContainer>
      </Curved>
    </SectionContainer>
  )
}

export default AboutSection

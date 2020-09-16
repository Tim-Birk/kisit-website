import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Typography } from "antd"

import Solutions from "../../utils/solutions"

const { Title } = Typography

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    margin-top: 4em;
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
    
    }
 `}
`

const SectionTitle = styled(Title)`
  ${({ theme }) => ` 
    color: ${theme["kisit-color"]} !important;
    margin: ${theme["margin-small"]} auto !important;
    padding: 0 ${theme["padding-small"]};
    letter-spacing: 1.5px;

    @media ${theme.device.tablet} { 
      
    }
    @media ${theme.device.laptop} { 
      max-width: 1200px;
      font-size: 3em !important;
      margin: ${theme["margin-large"]} auto !important;
      padding: 0 ${theme["padding-medium"]};
      
    }
    @media ${theme.device.desktop} { 
      max-width: 1600px;
    }
 `}
`

const CardContainer = styled.div`
  ${({ theme }) => ` 
    display: grid;
    grid-template-columns: 100%;
    margin: 5em auto;
    @media ${theme.device.tablet} { 
        grid-template-columns: 1fr 1fr;
    }
    @media ${theme.device.laptop} { 
        
    }
    @media ${theme.device.laptopL} { 
        grid-template-columns: 1fr 1fr 1fr 1fr;
        max-width: 1500px;

    }
 `}
`

const Card = styled(Link)`
  ${({ theme }) => ` 
    width: 90%;
    height: 350px;
    margin: ${theme["margin-small"]} auto;
    padding: ${theme["padding-medium"]};
    background-color: #f7f7f7;
    -webkit-box-shadow: -7px 6px 5px -3px rgba(0,0,0,0.22);
    -moz-box-shadow: -7px 6px 5px -3px rgba(0,0,0,0.22);
    box-shadow: -7px 6px 5px -3px rgba(0,0,0,0.22);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: rgba(0, 0, 0, 0.85);
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
    }

    &:hover {
      transform: scale(1.05) translateZ(0);
      h2, p {
          color: ${theme["hover-color"]};
      }
      h3 {
          color: ${theme["hover-color-darker"]};
      }
    }
 `}
`

const CardTitle = styled.h2`
  ${({ theme }) => ` 
    font-weight: normal;
    padding-top: ${theme["padding-small"]};
    letter-spacing: 1.5px;
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
    }

 `}
`

const CardIconContainer = styled.div`
  ${({ theme }) => ` 
    height: 100px;
    width: 100px;
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
    }

 `}
`

const CardIcon = styled.img`
  ${({ theme }) => ` 
    

    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
    }

 `}
`

const CardDescription = styled.p`
  ${({ theme }) => ` 
    // text-align: center;
    letter-spacing: 1.25px;
    @media ${theme.device.tablet} { 
      
    }
    @media ${theme.device.laptop} { 
      text-align: center;  
    }

 `}
`

const CardLink = styled.h3`
  ${({ theme }) => ` 
    text-transform: uppercase;
    margin-top: ${theme["margin-small"]};
    font-size: 1.25em;
    color: #2b257d;
    font-weight: 500;
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
    }

 `}
`

const SolutionsSection = () => {
  return (
    <SectionContainer id="solutions-section">
      <SectionTitle level={3}>
        One platform that provides a 360 degree view of your agency allowing you
        to manage cost and provide a superior level of care.
      </SectionTitle>
      <CardContainer>
        {Solutions.map(s => (
          <Card to={s.slug} key={s.title}>
            <CardIconContainer>
              <CardIcon src={s.icon} />
            </CardIconContainer>

            <CardTitle>{s.title}</CardTitle>
            <CardDescription>{s.description}</CardDescription>
            <CardLink href={s.slug}>Learn More ►</CardLink>
          </Card>
        ))}
      </CardContainer>
    </SectionContainer>
  )
}

export default SolutionsSection

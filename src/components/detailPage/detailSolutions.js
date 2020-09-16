import React from "react"
import { Link } from "gatsby"
import Solutions from "../../utils/solutions"
import styled from "styled-components"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    background-color: #fff;
    width: 100vw;
    padding: ${theme["padding-large"]} ${theme["padding-medium"]};
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
    }

 `}
`
const SectionTitleCaption = styled.p`
  ${({ theme }) => ` 
    margin: ${theme["margin-zero"]} ${theme["margin-small"]} ${theme["margin-medium"]} !important;
    color: ${theme["kisit-color"]};
    text-align: justify;
    line-height: 1.5;
    letter-spacing: 1.25px;
    
    font-size: ${theme["font-size-md"]};
    
    @media ${theme.device.mobileM} { 
      padding: ${theme["padding-small"]} ${theme["padding-zero"]} !important;
    }
    @media ${theme.device.tablet} { 
      text-align: center;
      max-width: 700px;
      margin: 0 auto  ${theme["margin-medium"]} !important;
    }
    @media ${theme.device.laptop} { 
       font-size: 1.75em;
       max-width: 1300px;
       margin: 0 auto ${theme["margin-xlarge"]} !important;
    }
 `}
`

const SolutionsList = styled.ul`
  ${({ theme }) => ` 
    list-style: none;
    margin: 0 auto;
    padding-left: 0;
    max-width: 1000px;
    

    @media ${theme.device.tablet} { 
        column-count: 2;        
    }
    @media ${theme.device.laptop} { 
        
        
    }

 `}
`
const SolutionListItem = styled.li`
  ${({ theme }) => ` 
    display: flex;
    align-items: center;
    padding-left: 20%; 
    margin: 0 auto ${theme["margin-small"]};
    color: rgba(0, 0, 0, 0.85);
    
    &:hover {
        transition: all 0.5s ease 0s;
        transform: scale(1.05) translateZ(0);
    }


    @media ${theme.device.tablet} { 
        padding-left: 27.5%;     
        margin: 0 auto ${theme["margin-medium"]};   
    }
    @media ${theme.device.laptop} { 

    }

 `}
`

const SolutionIconContainer = styled.div`
  ${({ theme }) => ` 
    height: 50px;
    width: 50px;
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
    }

 `}
`
const SolutionIcon = styled.img`
  ${({ theme }) => ` 
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
    }

 `}
`
const SolutionTitle = styled.span`
  ${({ theme }) => ` 
    padding-left: ${theme["padding-small"]};
    letter-spacing: 1px;
    font-size: 1.25em;

    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        
    }

 `}
`

const DetailSolutions = () => {
  return (
    <SectionContainer>
      <SectionTitleCaption>
        Simple solutions for home health care agency management
      </SectionTitleCaption>
      <SolutionsList>
        {Solutions.map(s => (
          <Link to={s.slug} key={s.title}>
            <SolutionListItem>
              <SolutionIconContainer>
                <SolutionIcon src={s.icon} />
              </SolutionIconContainer>
              <SolutionTitle>{s.title}</SolutionTitle>
            </SolutionListItem>
          </Link>
        ))}
      </SolutionsList>
    </SectionContainer>
  )
}

export default DetailSolutions

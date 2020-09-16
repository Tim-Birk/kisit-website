import React from "react"
import styled from "styled-components"
import DetailRequestDemo from "./detailRequestDemo"
import DetailSolutions from "./detailSolutions"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    background-color: ${theme["kisit-color"]};    
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
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
      padding: ${theme["padding-small"]} ${theme["padding-zero"]} ${theme["padding-zero"]};
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
 `}
`
const SectionTitle = styled.h1`
  ${({ theme }) => ` 
    color: ${theme["kisit-color"]};
    letter-spacing: 2px;
    @media ${theme.device.tablet} { 
        font-size: 3em !important;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const ContentContainer = styled.div`
  ${({ theme }) => ` 
    background-color: ${theme["kisit-color"]};
    color: #fff;
    text-align: center;
    overflow: hidden;
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
        padding-top: ${theme["padding-zero"]};
    }
 `}
`
const SectionTitleCaption = styled.p`
  ${({ theme }) => ` 
    margin: ${theme["margin-zero"]} ${theme["margin-small"]} !important;
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
      margin: 0 auto !important;
    }
    @media ${theme.device.laptop} { 
       font-size: 1.75em;
       max-width: 1300px;
       margin: 0 auto !important;
    }
 `}
`

const SvgContainerBottom = styled.div`
  ${({ theme }) => ` 
    width: 100vw;
    margin-bottom: -1em;

    @media ${theme.device.tablet} { 
      margin-bottom: -6em;  
    }
    @media ${theme.device.laptop} { 
      margin-bottom: -8em;  
    }
 `}
`
const TriangleSvg = styled.svg`
  ${({ theme }) => ` 
    display: block;
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`
const RectangleSvg = styled.svg`
  ${({ theme }) => ` 
    display: block;
    
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const DetailContent = styled.div`
  ${({ theme }) => ` 
    padding: ${theme["padding-small"]} ${theme["padding-small"]};
    

    @media ${theme.device.tablet} { 
      max-width: 1200px; 
      padding: ${theme["padding-zero"]} ${theme["padding-small"]}; 
    }
    @media ${theme.device.laptop} { 
      margin: 2em auto -4em;
        
    }
 `}
`

const DetailTextContainer = styled.div`
  ${({ theme }) => ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1700px;
    margin: ${theme["margin-zero"]} auto; 
    letter-spacing: 1.5px;
    

    h1 {
        font-size: 2em;
    }

    ul {
      margin-top: ${theme["margin-small"]};
      padding: 0 ${theme["padding-small"]};
    }
    li {
      text-align: left;
      line-height: 1.5;
      letter-spacing: 1.5px;
      margin-bottom: ${theme["margin-small"]};
      font-size: 1em;
    }
    @media ${theme.device.tablet} { 
      
    }
    @media ${theme.device.laptop} { 
        padding: 0 ${theme["padding-small"]};
        
        h1 {
            padding: ${theme["padding-xlarge"]} ${theme["padding-zero"]};
            font-size: 3em;
        }

        li {
          font-size: 1.5em;
        }
    }
 `}
`

const SolutionsLayout = ({ solution }) => {
  const { title, description, bulletPoints } = solution
  return (
    <SectionContainer>
      <SectionTitleContainer>
        <SectionTitle>{title}</SectionTitle>
        <SectionTitleCaption>{description}</SectionTitleCaption>
      </SectionTitleContainer>
      <TriangleSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 0 L 0 0 L 1800 0 L 0 100 Z"
          stroke="#fff"
          strokeWidth="3"
          fill="#fff"
        />
      </TriangleSvg>
      <ContentContainer>
        <DetailContent>
          <DetailTextContainer>
            <ul>
              {bulletPoints.map((bp, i) => (
                <li key={i}>{bp}</li>
              ))}
            </ul>
          </DetailTextContainer>
        </DetailContent>
        <SvgContainerBottom>
          <TriangleSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3000 400"
            preserveAspectRatio="none"
          >
            <path
              d="M 5000 10 L 0 400 L 5000 400 Z"
              stroke="#fff"
              strokeWidth="3"
              fill="#fff"
            />
          </TriangleSvg>
          <RectangleSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3000 400"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 0 L 5000 0 L 5000 400 L 0 400 Z"
              stroke="#fff"
              strokeWidth="3"
              fill="#fff"
            />
          </RectangleSvg>
        </SvgContainerBottom>
      </ContentContainer>
      <DetailSolutions />
      <DetailRequestDemo />
    </SectionContainer>
  )
}

export default SolutionsLayout

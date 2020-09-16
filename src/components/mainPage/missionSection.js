import React, {useState} from "react"
import styled from "styled-components"
import { Button, Modal } from "antd"
import DemoForm from "../demoForm/demoForm"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    padding: ${theme["padding-large"]} ${theme["padding-medium"]};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
      padding: ${theme["padding-medium"]} ${theme["padding-xlarge"]};
    }
 `}
`

const SectionTitle = styled.h1`
  ${({ theme }) => ` 
    color: ${theme["kisit-color"]};
    letter-spacing: 1.5px;
    @media ${theme.device.tablet} { 
        font-size: 3em !important;
    }
    @media ${theme.device.laptop} { 
      letter-spacing: 2px;
    }
 `}
`

const SectionSubtitle = styled.h3`
  ${({ theme }) => ` 
    color: ${theme["kisit-color"]};
    line-height: 1.25;
    max-width: 1000px;
    margin: ${theme["margin-small"]} auto;
    text-align: justify;
    letter-spacing: 1.25px;

    @media ${theme.device.tablet} { 
        text-align: center;
        font-size: 1.5em !important;
    }
    @media ${theme.device.laptop} { 
      letter-spacing: 1.5px;
    }
 `}
`

const SectionDescription = styled.p`
  ${({ theme }) => ` 
    color: ${theme["kisit-color"]};
    font-weight: 500;
    text-align: justify;
    max-width: 1500px;
    margin: ${theme["margin-small"]} auto;
    letter-spacing: 1.25px;
    
    @media ${theme.device.tablet} { 
        font-size: 1.25em !important;
    }
    @media ${theme.device.laptop} { 
        text-align: center;
    }
 `}
`

const RequestDemoButton = styled(Button)`
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

const MissionSection = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    console.log("show modal")
    setVisible(true)
  }

  const handleCancel = () => {
    console.log("Clicked cancel button")
    setVisible(false)
  }
  return (
    <>
      <SectionContainer>
        <SectionTitle>Our mission is...</SectionTitle>
        <SectionSubtitle>
          Giving home care agencies the tools they need to thrive in a rapidly
          changing landscape and supporting them in providing their patients
          with the highest quality of care.
        </SectionSubtitle>
        <SectionDescription>
          Tap into your home care agency’s full potential for growth and
          profitability with a home care solution designed by top industry
          experts. Our platform will drastically enhance workflow efficiency and
          simplify business processes. As our name states, we believe in{" "}
          <span style={{ textDecoration: "underline" }}>keeping it simple</span>
          . Our interface is intuitive and easy to use for even the most
          technilogically challenged across your staff. We pride ourselves on
          working directly with our clients by providing one-on-one support
          throughout implementation and being there whenever you need us after
          going live. KISIT offers a truly one stop job for all aspects of home
          health care and provides insights and analytics that only top industry
          experts can offer right out of the box.
        </SectionDescription>
        <RequestDemoButton type="primary" onClick={showModal}>Request Demo</RequestDemoButton>
      </SectionContainer>
      <Modal
        title="Request Demo"
        visible={visible}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <DemoForm />
      </Modal>
    </>
  )
}

export default MissionSection

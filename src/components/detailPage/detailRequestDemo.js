import React, { useState } from "react"
import styled from "styled-components"
import { Button, Modal } from "antd"
import DemoForm from "../demoForm/demoForm"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    background-color: #fff;
    padding: ${theme["padding-large"]} ${theme["padding-medium"]};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -1.5em;
    @media ${theme.device.tablet} { 
        
    }
    @media ${theme.device.laptop} { 
      padding: ${theme["padding-medium"]} ${theme["padding-xlarge"]};
    }
 `}
`
const SectionSubtitle = styled.h3`
  ${({ theme }) => ` 
    color: ${theme["kisit-color"]};
    line-height: 1.25;
    max-width: 960px;
    margin: ${theme["margin-small"]} auto;
    text-align: justify;
    letter-spacing: 1.25px;
    
    @media ${theme.device.tablet} { 
        text-align: center;
        font-size: 1.5em !important;
    }
    @media ${theme.device.laptop} { 
        
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
        margin: ${theme["margin-medium"]} auto ${theme["margin-xlarge"]};
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const DetailRequestDemo = () => {
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
        <SectionSubtitle>
          Every provider has their own unique set of challenges to face. We are
          here to help.
        </SectionSubtitle>
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

export default DetailRequestDemo

import React from "react"
import { Form, Input, Button } from "antd"
import { navigate } from "gatsby"

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

const endpoints = { contact: "/.netlify/functions/sendEmail" }
const axios = require("axios")

const DemoForm = () => {
  const onFinish = values => {
    console.log("Success:", values)
    const { company, fullName, email, phone, note } = values
    const message = `
      KISIT Demo Request

      From: ${fullName}
      Company: ${company ? company : "(not provided)"}
      Email: ${email}
      Phone: ${phone ? phone : "(not provided)"}

      ${note}
    `
    const data = { name: fullName, email, message }
    axios.post(endpoints.contact, JSON.stringify(data)).then(response => {
      if (response.status !== 200) {
        console.log(response)
      } else {
        console.log("Message sent")
        navigate("/request-confirmation")
      }
    })
  }

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo)
  }

  return (
    <Form
      name="demoRequest"
      initialValues={{
        company: "",
        fullName: "",
        email: "",
        phone: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="Company" name="company">
        <Input />
      </Form.Item>
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[
          {
            required: true,
            message: "Please enter your name",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please enter your email address",
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item label="Phone" name="phone">
        <Input />
      </Form.Item>
      <Form.Item label="Note" name="note">
        <Input.TextArea />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Request Demo
        </Button>
      </Form.Item>
    </Form>
  )
}

export default DemoForm

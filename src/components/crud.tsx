import React from "react";
import { useState } from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

type FieldType = {
  name?: string;
  password?: string;
  remember?: string;
};

function Crud() {
  const [data, setData] = useState([
    { id: 1, name: "ali", city: "Dushanbe", status: false },
    { id: 2, name: "Vali", city: "Kulob", status: false },
    { id: 3, name: "Ahmad", city: "Dangara", status: false },
    { id: 4, name: "Muhammad", city: "Xujand", status: false },
  ]);
  const [Dialog, setDialog] = useState(false);

  const handlSubmit = (newUser: any) => {
    setData([...data, newUser]);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handldelete = (id: number) => {
    setData((prev) => prev.filter((e) => e.id !== id));
    setDialog(false)
  };

  return (
    <>
      <Button onClick={() => setDialog(true)}>new Add</Button>
      {Dialog ? (
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={handlSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="name"
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              label={null}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button onClick={() => setDialog(false)}>Cancel</Button>
            </Form.Item>
          </Form>
        </div>
      ) : null}
      <div className="flex flex-wrap p-10 gap-10">
        {data.map((e) => {
          return (
            <div>
              <h1>{e.name}</h1>
              <p>{e.city}</p>
              <Checkbox>{e.status}</Checkbox>
              <div>
                <Button onClick={() => handldelete(e.id)}>Delete</Button>
                <Button>Edit</Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Crud;

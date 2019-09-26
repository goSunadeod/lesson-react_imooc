import React from 'react';
import {Select, Form} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 16
    }
};

function Item (props) {
    const {form, options} = props;
    return (
      <>
          <Form>
              <FormItem label={'团队名称'}
                        {...formItemLayout}
              >
                  {form.getFieldDecorator('name', {
                      initialValue: '',
                      rules: [{
                          required: true,
                          message: '此项必填'
                      }]
                  })(
                    <Select
                      allowClear
                      style={{
                          width: '100%'
                      }}
                    >
                        {options.map((p) => (
                          <Option
                            key={p.code}
                            name={p.name}
                            value={p.code}
                          >{p.name}</Option>
                        ))}
                    </Select>
                  )}
              </FormItem>
          </Form>
      </>
    )
}

export default Form.create()(Item);

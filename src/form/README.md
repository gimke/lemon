validator: [async-validator](https://github.com/yiminghe/async-validator)

```javascript
onSubmit = (e, errors, values) => {
    e.preventDefault();
    console.log(e, errors, values);
};


<Form onSubmit={this.onSubmit}>
    <Form.Item
        name="name"
        tip="您可以使用字母、数字和英文句点"
        rules={[
            {required: true, message: '请输入用户名!'},
            {type: 'string', message: '请输入5-20位有效的真实姓名!', pattern: /^.{5,20}$/},
        ]}
    >
        <Input style={{width: "100%"}} label="用户名" value={this.state.value} onChange={this.onChange}/>
    </Form.Item>
    <Button
        type="primary"
        htmlType="submit"
    >Submit</Button>
</Form>
```
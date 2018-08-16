import React from 'react';
import { Breadcrumb,Table,Button,Pagination,Dialog,Form,Input,Message } from 'element-react';

class Customer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                {
                    label: "客户名称",
                    prop: "name",
                },
                {
                    label: "注册时间",
                    prop: "date",
                },
                {
                    label: "操作",
                    render: (row, column, index)=>{
                        return <span><Button type="text" size="small" onClick={this.deleteRow.bind(this, index)}>移除</Button></span>
                    }
                }
            ],
            data: [{
                date: '2016-05-02',
                name: '王小虎',
            }],
            dialogVisible:false,
            form: {
                name: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入客户名称', trigger: 'blur' },
                ],
            }
        }
    }

    deleteRow(index) {
        const { data } = this.state;
        data.splice(index, 1);
        this.setState({
            data: [...data]
        })
    }
    createResource(){
        this.setState({
            dialogVisible: true
        })
    }
    handleSubmit(e) {
        e.preventDefault();

        this.refs.form.validate((valid) => {
            if (valid) {
                this.setState({
                    dialogVisible: false
                });
                Message({
                    message: '新增成功',
                    type: 'success'
                });
            } else {
                this.setState({
                    dialogVisible: false
                });
                Message({
                    message: '错误',
                    type: 'warning'
                });
                return false;
            }
        });
    }

    handleReset(e) {
        e.preventDefault();

        this.refs.form.resetFields();
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }
    render(){
        return(
            <div>
                <Breadcrumb separator="/">
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>客户管理</Breadcrumb.Item>
                </Breadcrumb>
                <div className="body-contain">
                    <div className="contain-op">
                        <Button type="primary" onClick={(e) => {this.createResource(e)}}>新增</Button>
                    </div>
                    <Table
                        style={{width: '100%'}}
                        columns={this.state.columns}
                        data={this.state.data}
                        border={true}
                    />
                    <div className="contain-page"><Pagination layout="prev, pager, next" total={50}/></div>
                    <Dialog
                        title="新增用户"
                        size="tiny"
                        visible={ this.state.dialogVisible }
                        onCancel={ () => this.setState({ dialogVisible: false }) }
                        lockScroll={ false }
                    >
                        <Dialog.Body>
                            <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
                                <Form.Item label="客户名称" prop="name">
                                    <Input type="name" value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} autoComplete="off" />
                                </Form.Item>
                            </Form>
                        </Dialog.Body>
                        <Dialog.Footer className="dialog-footer">
                            <Button onClick={this.handleReset.bind(this)}>重置</Button>
                            <Button type="primary" onClick={ this.handleSubmit.bind(this)}>确定</Button>
                        </Dialog.Footer>
                    </Dialog>
                </div>
            </div>
        )
    }
}
export default Customer
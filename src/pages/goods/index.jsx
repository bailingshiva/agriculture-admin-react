import React from 'react';
import { Breadcrumb,Table,Button,Pagination,Dialog,Form,Input,Message,Select } from 'element-react';

class Goods extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                {
                    label: "商品名称",
                    prop: "goodsName",
                },
                {
                    label: "价格",
                    prop: "price",
                },
                {
                    label: "分类",
                    prop: "type",
                    render: function(data){
                        return (
                            <span>
                                {data.type==1?'新鲜水果':'蜂蜜'}
                            </span>
                         )
                     }
                },
                {
                    label: "描述",
                    prop: "desc",
                },
                {
                    label: "操作",
                    render: (row, column, index)=>{
                        return <span><Button type="text" size="small" onClick={this.deleteRow.bind(this, index)}>移除</Button></span>
                    }
                }
            ],
            data: [{
                goodsName:'芒果',
                price: 20,
                desc: '芒果芒果芒果',
                type:1,
            }],
            dialogVisible:false,
            form: {
                goodsName: '',
                price: '',
                type: '',
                desc: '',
            },
            rules: {
                goodsName: [
                    { required: true, message: '请输入商品名称', trigger: 'blur' },
                ],
                price: [
                    { required: true, message: '请输入价格', trigger: 'blur' },
                ],
                type: [
                    { required: true, message: '请选择分类', trigger: 'blur' },
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
                    <Breadcrumb.Item>商品管理</Breadcrumb.Item>
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
                        title="新增商品"
                        size="tiny"
                        visible={ this.state.dialogVisible }
                        onCancel={ () => this.setState({ dialogVisible: false }) }
                        lockScroll={ false }
                    >
                        <Dialog.Body>
                            <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
                                <Form.Item label="商品名称" prop="goodsName">
                                    <Input value={this.state.form.goodsName} onChange={this.onChange.bind(this, 'goodsName')} autoComplete="off" />
                                </Form.Item>
                                <Form.Item label="价格" prop="price">
                                    <Input value={this.state.form.price} onChange={this.onChange.bind(this, 'price')} autoComplete="off" />
                                </Form.Item>
                                <Form.Item label="分类" prop="type">
                                    <Select value={this.state.form.type} onChange={this.onChange.bind(this, 'type')} placeholder="分类">
                                        <Select.Option label="新鲜水果" value="1"></Select.Option>
                                        <Select.Option label="蜂蜜" value="2"></Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="描述" prop="desc">
                                    <Input value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')} autoComplete="off" />
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
export default Goods
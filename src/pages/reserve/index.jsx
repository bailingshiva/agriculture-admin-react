import React from 'react';
import { Breadcrumb,Table,Button,Pagination,Dialog,Form,Input,Message,Select } from 'element-react';

class Reserve extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                {
                    label: "预定客户",
                    prop: "name",
                },
                {
                    label: "商品名称",
                    prop: "goodsName",
                },
                {
                    label: "价格",
                    prop: "price",
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
                name: '王小虎',
            }],

        }
    }

    deleteRow(index) {
        const { data } = this.state;
        data.splice(index, 1);
        this.setState({
            data: [...data]
        })
    }
    render(){
        return(
            <div>
                <Breadcrumb separator="/">
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>预定管理</Breadcrumb.Item>
                </Breadcrumb>
                <div className="body-contain">
                    {/*<div className="contain-op">
                        <Button type="primary" onClick={(e) => {this.createResource(e)}}>新增</Button>
                    </div>*/}
                    <Table
                        style={{width: '100%'}}
                        columns={this.state.columns}
                        data={this.state.data}
                        border={true}
                    />
                    <div className="contain-page"><Pagination layout="prev, pager, next" total={50}/></div>

                </div>
            </div>
        )
    }
}
export default Reserve
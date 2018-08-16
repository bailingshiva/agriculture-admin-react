import React from 'react';
import { Menu } from 'element-react';
import { Link ,withRouter} from 'react-router-dom'
class SideNav extends React.Component{
    constructor(props) {
        super(props);

    }
    onSelect(index){
       if(index==1){
           this.props.history.push("/customer");
       }
       else if(index==2){
           this.props.history.push("/goods");
       }
       else if(index==3){
           this.props.history.push("/reserve");
       }
    }
    render(){
        return(
            <div className="side-nav">
                <div className="side-nav-logo">Agriculture</div>
                <Menu onSelect={this.onSelect.bind(this)} className="el-menu-vertical-demo" style={"height:100%"} theme="dark">
                    {/*<Menu.Item index="1"><Link to="customer" activeClassName="side-nav-active">客户管理</Link></Menu.Item>
                    <Menu.Item index="2"><Link to="goods" activeClassName="side-nav-active">商品管理</Link></Menu.Item>
                    <Menu.Item index="3"><Link to="reserve" activeClassName="side-nav-active">预定管理</Link></Menu.Item>*/}
                    <Menu.Item index="1">客户管理</Menu.Item>
                    <Menu.Item index="2">商品管理</Menu.Item>
                    <Menu.Item index="3">预定管理</Menu.Item>
                </Menu>
            </div>
        )
    }
}
export default withRouter(SideNav)
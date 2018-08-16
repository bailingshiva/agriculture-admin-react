import React from 'react';
import { Dropdown } from 'element-react';

class TopNav extends React.Component{
    render(){
        return(
            <div className="top-nav">
                <div className="top-nav-right">
                    <Dropdown menu={(
                        <Dropdown.Menu>
                            <Dropdown.Item>退出登录</Dropdown.Item>
                        </Dropdown.Menu>
                    )}
                    >
                  <span className="el-dropdown-link">
                    欢迎您<i className="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                    </Dropdown>
                </div>
            </div>
        )
    }
}
export default TopNav
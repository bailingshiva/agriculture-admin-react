import React from 'react';
import SideNav from 'components/side-nav/index.jsx'
import TopNav from 'components/top-nav/index.jsx'
class Layout extends React.Component{
    constructor(props){
    super(props);
      }
    render(){
        return(
           <div>
               <TopNav />
               <SideNav />
               <div className="layout-contain">
                   {this.props.children}
               </div>
           </div>
        )
    }
}
export default Layout
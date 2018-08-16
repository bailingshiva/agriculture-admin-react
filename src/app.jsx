import React            from 'react';
import ReactDOM         from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import './assets/styles/common.css'
import 'element-theme-default';
// 页面
import Home             from 'pages/home/index.jsx';
import Customer         from 'pages/customer/index.jsx';
import Goods            from 'pages/goods/index.jsx';
import Reserve          from 'pages/reserve/index.jsx';
import Layout           from 'components/layout/index.jsx';
class App extends React.Component{
    render(){
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/customer" component={Customer}/>
                    <Route path="/goods" component={Goods}/>
                    <Route path="/reserve" component={Reserve}/>
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>
                    {/*<Route path="/login" component={Login}/>*/}
                    <Route path="/" render={ props => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
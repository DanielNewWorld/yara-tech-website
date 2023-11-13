import './App.css';
import React, {Component} from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Contact from './components/Contact/Contact';
import FooterContainer from './components/Footer/FooterContainer';
import AboutUs from './components/AboutUs/AboutUs';
import {Route, Routes} from "react-router-dom";
import Content from "./components/Content/Content";
import Services from "./components/Services/Services";
// import Login from "./components/Login/Login";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import AdminPanel from "./components/Admin/AdminPanel/AdminPanel";

//const UsersContainer = React.lazy(() => import("./components/Users/UserContainer"));

class App extends Component {
    catchAllUnhandledErrors = (reason, promiseRejectionEvent) => {
        alert("Some error occured");
        console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        //this.props.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        // if (!this.props.initialized) {
        //   return <Preloader/>
        // }

        return (
            <div className='gridApp'>
                <HeaderContainer/>
                <Routes>
                    <Route path='/' element={<Content/>}/>
                    <Route path='/services' element={<Services/>}/>
                    <Route path='/howwework' element={<HowWeWork/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/about' element={<AboutUs/>}/>
                    {/*<Route path='/signin' element={<Login/>}/>*/}
                    <Route path='/signin' element={<AdminPanel/>}/>
                </Routes>
                {/*<Suspense fallback={<div><Preloader/></div>}>*/}
                {/*    <UsersContainer/>*/}
                {/*</Suspense>*/}
                <FooterContainer/>
            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
//     //initialized: state.app.initialized
// })

//compose(
//withRouter,
//connect(mapStateToProps, {initializeApp}))(App);

//<MarineUpholstery data={props.state.homeServicesPage}/>
//<ImageSlider data={props.state.homeServicesPage} dispatch={props.dispatch} />

// let AppContainer = App;

// const SamuraiJSApp = (props) => {
//     <BrowserRouter>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </BrowserRouter>
// }

export default App;
import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import {getAuthAdminData} from "../../redux/auth-reducer";

class HeaderAPIComponent extends React.Component {
    async componentDidMount() {
        this.props.getAuthAdminData()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    data: state.firmData,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer
    = connect(mapStateToProps, {getAuthAdminData})(HeaderAPIComponent);

export default HeaderContainer;
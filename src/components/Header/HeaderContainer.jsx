import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import {authAPI} from "../../api/api";
import {setAuthAdminData} from "../../redux/auth-reducer";

class HeaderAPIComponent extends React.Component {
    async componentDidMount() {
        const response = await authAPI.me();
        console.log(response.data)
        if (response.data.resultCode === 0) {
            let {_id, login, password} = response.data.data;
            this.props.setAuthAdminData(_id, login, password)
        }
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
    = connect(mapStateToProps, {setAuthAdminData})(HeaderAPIComponent);

export default HeaderContainer;
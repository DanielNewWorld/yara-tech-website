import React, {useState} from 'react';
import {connect, Provider} from 'react-redux';
import {
    requestAddUsers,
    requestUsers,
    requestDeleteUsers, requestUpdateUsers
} from '../../../redux/userItem-reducer';
import Users from './Users';
import Preloader from '../../Common/Preloader/Preloader';
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {combineReducers, compose, createStore} from "redux";
import {getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../../redux/users-selectors";
import ModalAddUser from "../ModalAddUser/ModalAddUser";
import FindUser from "../ModalFindUser/FindUser";
import styleCSS from './User.module.css';
import ModalForm from "../ModalForm/ModalForm";
import ModalFormContainer from "../ModalForm/ModalFormContainer";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        // this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    handleOpenModal = () => {
        this.setState({showModal: true});
    };

    handleCloseModal = () => {
        this.setState({showModal: false});
    };

    render() {
        const {showModal} = true
        return <div>
                <div className={styleCSS.containerMenu}>
                    <ModalFormContainer/>

                    <button onClick={this.handleOpenModal}>Open Form</button>
                    {/*<ModalAddUser*/}
                    {/*    // showModal={showModal} handleCloseModal={this.handleCloseModal}*/}
                    {/*    onAddUser={this.props.addUserThunkCreator}*/}
                    {/*    pageSize={this.props.pageSize}*/}
                    {/*    currentPage={this.props.currentPage}*/}
                    {/*/>*/}


                    {/*<Form1 showModal={showModal} handleCloseModal={handleCloseModal} />*/}

                    <FindUser
                        onGetUser={this.props.getUsersThunkCreator}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                    />
                </div>

                {this.props.isFetching ? <Preloader/> : null}
                <Users totalCount={this.props.totalCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       data={this.props.data}
                       onDeleteUser={this.props.deleteUsersThunkCreator}
                       onUpdateUser={this.props.updateUsersThunkCreator}
                />
        </div>
    }
}

let mapStateToProps = (state) => {

    return {
        data: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        addUserThunkCreator: requestAddUsers,
        getUsersThunkCreator: requestUsers,
        deleteUsersThunkCreator: requestDeleteUsers,
        updateUsersThunkCreator: requestUpdateUsers
    })
    //,
    //withAuthRedirect
)(UsersAPIComponent)
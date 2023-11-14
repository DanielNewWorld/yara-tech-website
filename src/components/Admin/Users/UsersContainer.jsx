import React from 'react';
import {connect} from 'react-redux';
import {
    requestAddUsers,
    requestUsers
} from '../../../redux/userItem-reducer';
import Users from './Users';
import Preloader from '../../Common/Preloader/Preloader';
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../../redux/users-selectors";
import ModalAddUser from "../ModalAddUser/ModalAddUser";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return <div>
            <ModalAddUser onAddUser={this.props.addUserThunkCreator}/>

            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   data={this.props.data}
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
        getUsersThunkCreator: requestUsers
    })
    //,
    //withAuthRedirect
)(UsersAPIComponent)
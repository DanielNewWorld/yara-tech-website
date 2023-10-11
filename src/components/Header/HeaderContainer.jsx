import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import {toggleIsMobile} from "../../redux/firm-reducer";

class HeaderAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsMobile(window.innerWidth <= 768);
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsMobile(window.innerWidth <= 768);
    }

    render() {
        return (
            <Header {...this.props}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
      data: state.firmData
    }
    }
    
    const HeaderContainer = connect(mapStateToProps, {toggleIsMobile})
    (HeaderAPIComponent);

export default HeaderContainer;
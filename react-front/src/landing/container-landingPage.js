import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findUserById } from '../actions/actions';
import Landing from './landingPage';

const mapDispatchToProps = dispatch => {
    return {
        onSearchClick : id => {
            dispatch(findUserById(id))
        } 
    }
};

const LandingContainer = connect(
    mapDispatchToProps
)(Landing);

export default LandingContainer;
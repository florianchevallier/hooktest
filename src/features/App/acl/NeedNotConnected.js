import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const NeedConnected = ({
  component: Component,
  getSessionSuccess,
  getSessionFailed,
  ...rest
}) => {
  if (getSessionSuccess) {
    return <Redirect to="/" />;
  }
  if (getSessionFailed) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
  return (<p>chargement</p>)
};

NeedConnected.propTypes = {
  component: PropTypes.func.isRequired,
  getSessionSuccess: PropTypes.bool.isRequired,
  getSessionFailed: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  getSessionSuccess: state.session.getSessionSuccess,
  getSessionFailed: state.session.getSessionFailed,
  user: state.session.user
});

export default connect(mapStateToProps)(NeedConnected);

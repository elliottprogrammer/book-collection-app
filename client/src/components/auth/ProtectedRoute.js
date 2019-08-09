import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function ProtectedRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                rest.user.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
}
const mapStateToProps = state => ({
    user: state.user,
});
export default connect(
    mapStateToProps,
    null
)(withRouter(ProtectedRoute));

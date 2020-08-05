import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import StripeWrapper from './StripeWrapper';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null: 
                return;
            case false: 
                return <li><a href="/auth/google">Login With Google</a></li>;
            default: 
                return [
                    <li key="1"><StripeWrapper /></li>,
                    <li key="2" style={{margin: '0 50px'}}>
                        <button className="current-credits">
                            My Credits : {this.props.auth.credits}
                        </button>
                    </li>,
                    <li key="3"><a href="/api/logout"><b>Logout</b></a></li>
                ];
        }
    }

    render() {
        return(
            <div class="navbar-fixed">
                <nav>
                    <div className="nav-wrapper container">
                        <Link 
                            to={this.props.auth ? '/surveys' : '/' } 
                            className="left brand-logo"
                        >
                            Emaily
                        </Link>
                        <ul className="right">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
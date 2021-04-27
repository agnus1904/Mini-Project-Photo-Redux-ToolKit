import React from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';
import {Col, Container, Row} from "reactstrap";

interface HeaderProps{

}

const defaultProps: HeaderProps = {

}

const Header:React.FC = ():React.ReactElement => {
    return (
        <header className='header'>
            <Container>
                <Row className='justify-content-between'>
                    <Col xs='auto'>
                        <NavLink to='/' >
                            Easy Font-End
                        </NavLink>
                    </Col>
                    <Col xs='auto'>
                        <NavLink
                            exact
                            className='header__link'
                            to='/photos'
                            activeClassName='header__link--active'
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

Header.defaultProps = defaultProps;

export default Header;

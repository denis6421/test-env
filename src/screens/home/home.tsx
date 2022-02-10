import React, { FunctionComponent as Component } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import mixinLogo from '../../assets/images/mixin-logo.png';
import { RootState } from '../../store';
import { logout } from '../../store/reducers/auth';

export const HomeScreen: Component = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    return (
        <Container>
            <Row>
                <Col>
                    <h1>{t('homeScreen.welcome')}</h1>
                    <Image src={mixinLogo} />
                </Col>
                <button type="button" onClick={() => dispatch(logout())}>
                    Logout
                </button>
            </Row>
        </Container>
    );
};

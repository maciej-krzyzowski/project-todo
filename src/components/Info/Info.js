import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore.js';

const Info = () => (
    <Container>
        <Hero title={settings.infoTitle} image={settings.infoImage} />
        <p>{settings.contens}</p>
    </Container>
);

export default Info;
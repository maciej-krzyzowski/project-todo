import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore.js';

const Faq = () => (
    <Container>
        <Hero title={settings.faqTitle} image={settings.faqImage} />
        <p>{settings.contens}</p>
    </Container>
);

export default Faq;
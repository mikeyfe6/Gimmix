import React from 'react';

import Layout from '../components/layout';

import SEO from '../components/seo';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Us</h1>
      <p>
        Beste manier om mij te bereiken is via{' '}
        <a
          href="https://twitter.com/mikeyfe"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mikeyfe6
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Layout from '../components/layout';

import SEO from '../components/seo';

import contactDesign from '../styles/modules/contact.module.scss';

import Form from '../components/form';
import Maps from '../components/gmaps/maps';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <div className="container">
        <div className="whitespace" />

        <h2 className="page-title">Contact.</h2>
        <div className="hero-content">
          <div className="row">
            <div className="col-lg-8">
              <br />
              <ScrollAnimation animateIn="fadeInUp" delay={1000}>
                <h3 className={contactDesign.contacttitle}>Zeg 'ns hallo 👋🏾</h3>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp" delay={1200}>
                <p>
                  Aarzel niet een berichtje achter te laten. Wij zorgen zo dan
                  spoedig contact met u op te nemen.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <Form />
        <Maps />
      </div>
      <div className="whitespace" />
    </Layout>
  );
};

export default ContactPage;

/* <a
          href="https://twitter.com/mikeyfe"
          target="_blank"
          rel="noopener noreferrer"
        ></a> */
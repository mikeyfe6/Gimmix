import React from 'react';

import SEO from '../components/seo';

import Layout from '../components/layout';
import aboutDesign from '../styles/modules/about.module.scss';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />

      <div className="whitespace" />
      <div className="container">
        <div className="hero-content">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="page-title">Over Gimmix</h2>
              <br />

              <h3 className={aboutDesign.overtitle}>Wie zijn wij?</h3>
              <p>
                Gimmix is een jong digitaal -/ webmediabedrijf, opgericht door
                Michael Fransman, die zich inzet digitale oplossingen uit te
                denken en toe te passen voor eventuele passerende problemen
                en/of ambities van de client.
              </p>
              <br />
              <h3 className={aboutDesign.overtitle}>
                Wat zijn onze doelen en streven?
              </h3>
              <p>
                Wij staan voor efficientie, innovatie, gebruiksvriendelijkheid
                en misschien wel één onze belangrijkste aspecten; &apos; de
                design &apos;. Wij zijn van mening dat de functionaliteit in
                balans moet zijn met de visuele aspecten van de website voor een
                ultieme ervaring.
              </p>
              <br />
              <h3 className={aboutDesign.overtitle}>
                Wat maakt Gimmix zo uniek?
              </h3>
              <p>
                Wat Gimmix uniek maakt is dat we sterk meedenken met de
                client/klant. Wj werken het liefst met eigen design (geen
                wordpress). Alle websites/apps zijn bij ons tot op de laatste
                pixel gecodeerd
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// data-wow-descapeelay="0.2s"

export default AboutPage;
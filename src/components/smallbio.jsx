/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'gatsby';

import smallbioDesign from '../styles/modules/smallbio.module.scss';

// TODO: Responsive maken!

const Smallbio = () => {
  return (
    <div className={smallbioDesign.smallbioContainer}>
      <div className={smallbioDesign.smallbioWrapper}>
        <br />

        <hr className={smallbioDesign.thick} />
        <br />
        <p className={smallbioDesign.smallbioText}>
          <b>Gimmix</b> is een jong & modern webmediabedrijf, opgericht door{' '}
          <b>
            <a
              href="https://www.linkedin.com/in/michaelfransman"
              rel="noopener noreferrer"
              target="_blank"
            >
              Michael Fransman
            </a>
          </b>
          , die zich inzet en gespecialiseerd is in het in- en uitdenken &
          ontwikkelen van websites & webapplicaties, voor zowel jonge startups
          als gevestigde bedrijven. Wij zorgen dat uw digitale ambities en
          wensen tot één komen. Wij bouwen onze softwareproducten op maatwerk
          zodat u zich zoveel mogelijk kan relativeren met uw eindproduct.
          <br />
          <b>{/* <Link to="/about/">Meer over Gimmix .. </Link> */}</b>
          <br />
          {/* <u>Work, chill & vibe</u>{' '}
          <a
            href="https://open.spotify.com/playlist/08UGoWTjvpuooABCWyPx0m?si=caXZyz28R8u8Ck683qLgQA"
            rel="noopener noreferrer"
            target="_blank"
          >
            Spotify-playlist
          </a>{' '}
          ♫ */}
        </p>
        <Link to="/about/">
          <button
            type="button"
            name="meerover"
            // id="call-submit"
            className={smallbioDesign.meerover}
          >
            Meer over Gimmix!
          </button>
        </Link>
        <div className="clr" />

        <hr className={smallbioDesign.thin} />
      </div>
    </div>
  );
};

export default Smallbio;

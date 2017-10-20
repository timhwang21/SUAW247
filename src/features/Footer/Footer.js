import React from 'react';

import { hidable } from '../../components/decorators';
import { Dot } from '../../components/icons';
import { Link } from '../../components/links';
import { Mobile, Default } from '../../components/responsive';

import './Footer.css';

const Footer = () => (
  <div id="Footer" className="noselect">
    <div className="Footer-center">
      <Link to="/" className="Footer-text">
        <Mobile>
          <i className="fa fa-info-circle" />
        </Mobile>
        <Default>
          <span className="Footer-text-small">About</span>
        </Default>
      </Link>
      <Dot />
      <Link to="https://github.com/timhwang21/SUAW247" className="Footer-text">
        <Mobile>
          <i className="fa fa-github" />
        </Mobile>
        <Default>
          <span className="Footer-text-small">Github</span>
        </Default>
      </Link>
      <Dot />
      <Link to="mailto:timhwang21@gmail.com" className="Footer-text">
        <Mobile>
          <i className="fa fa-at" />
        </Mobile>
        <Default>
          <span className="Footer-text-small">Contact</span>
        </Default>
      </Link>
    </div>
  </div>
);

export default hidable(Footer);

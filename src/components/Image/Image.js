import React, { Component } from 'react';
import { bool, string } from 'prop-types';
import classnames from 'classnames';

import './Image.css';

class Image extends Component {
  static propTypes = {
    className: string,
    alt: string,
    title: string,
    src: string,
    circle: bool,
    small: bool,
  };

  static defaultProps = {
    alt: 'image',
  };

  get className() {
    const { className, circle, small } = this.props;

    return classnames({
      Image: true,
      [className]: className,
      circle,
      small,
    });
  }

  render() {
    const { src, title, alt } = this.props;

    return <img className={this.className} src={src} title={title} alt={alt} />;
  }
}

export default Image;

import React, { Component } from 'react';
import ReactDropzone from 'react-dropzone';
import { string, node, func } from 'prop-types';
import classnames from 'classnames';

import './Dropzone.css';

class Dropzone extends Component {
  static propTypes = {
    className: string,
    children: node,
    accept: string,
    onDropAccepted: func,
  };

  get className() {
    const { className } = this.props;

    return classnames({
      Dropzone: true,
      [className]: className,
    });
  }

  render() {
    const { accept, children, onDropAccepted } = this.props;

    return (
      <ReactDropzone
        className={this.className}
        acceptClassName="accept"
        accept={accept}
        disableClick
        onDropAccepted={onDropAccepted}
      >
        {children}
      </ReactDropzone>
    );
  }
}

export default Dropzone;

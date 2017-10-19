import React, { Component } from 'react';
import { arrayOf } from 'prop-types';
import { connect } from 'react-redux';

import { postShape } from '../../../../../../propTypes';
import { getProcessedPosts } from '../../../../../../modules/posts';

import Table from '../../../../../../components/Table';
import { TextCell, ScaleCell } from '../../../../../../components/cells';
import { Desktop } from '../../../../../../components/icons';
import { Message, Panel } from '../../../../../../components/layout';
import { Default } from '../../../../../../components/responsive';

import './Today.css';

const columns = [
  {
    Header: '#',
    accessor: 'session',
    width: 50,
  },
  {
    Header: 'Goal',
    accessor: 'goal',
    Cell: TextCell,
    width: 360,
  },
  {
    Header: 'Accomplishment',
    accessor: 'accomplishment',
    Cell: TextCell,
    width: 360,
  },
  {
    Header: 'Focus',
    accessor: 'focus',
    Cell: ScaleCell,
  },
  {
    Header: 'Productivity',
    accessor: 'productivity',
    Cell: ScaleCell,
  },
];

const defaultSorted = [
  {
    id: 'session',
    desc: false,
  },
];

const mapStateToProps = state => ({
  posts: getProcessedPosts(state),
});

class Today extends Component {
  static propTypes = {
    posts: arrayOf(postShape).isRequired,
  };

  renderPosts() {
    const { posts } = this.props;

    return (
      <Table data={posts} columns={columns} defaultSorted={defaultSorted} />
    );
  }

  renderResponsive = match => {
    return match ? (
      <Panel id="Today">{this.renderPosts()}</Panel>
    ) : (
      <Message title={<Desktop />}>
        Please switch to desktop for 'Today' view.
      </Message>
    );
  };

  render() {
    return <Default>{this.renderResponsive}</Default>;
  }
}

export default connect(mapStateToProps)(Today);

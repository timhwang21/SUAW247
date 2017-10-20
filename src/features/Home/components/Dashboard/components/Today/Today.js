import React, { Component } from 'react';
import { arrayOf } from 'prop-types';
import { connect } from 'react-redux';

import { postShape } from '../../../../../../propTypes';
import { getProcessedPosts } from '../../../../../../modules/posts';

import Table from '../../../../../../components/Table';
import { TextCell, ScaleCell } from '../../../../../../components/cells';
import { Panel } from '../../../../../../components/layout';

import './Today.css';

const columns = [
  {
    Header: '#',
    accessor: 'session',
    width: 35,
  },
  {
    Header: 'Goal',
    accessor: 'goal',
    Cell: TextCell,
    minWidth: 280,
  },
  {
    Header: 'Accomplishment',
    accessor: 'accomplishment',
    Cell: TextCell,
    minWidth: 280,
  },
  {
    Header: 'Focus',
    accessor: 'focus',
    Cell: ScaleCell,
    width: 100,
  },
  {
    Header: 'Productivity',
    accessor: 'productivity',
    Cell: ScaleCell,
    width: 100,
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

  render() {
    return <Panel id="Today">{this.renderPosts()}</Panel>;
  }
}

export default connect(mapStateToProps)(Today);

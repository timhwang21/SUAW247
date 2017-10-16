import React, { Component } from 'react';
import { arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { postShape } from '../../../../../../propTypes';
import { getPosts } from '../../../../../../modules/posts';

import { Panel } from '../../../../../../components/layout';
import Scale from '../../../../../../components/Scale';

import './Today.css';

const mapStateToProps = state => ({
  posts: getPosts(state),
});

class Today extends Component {
  static propTypes = {
    posts: arrayOf(postShape).isRequired,
  };

  renderShittyPosts() {
    const { posts } = this.props;

    return posts.map(post => (
      <div key={post.id} className="TODO-box">
        <div>
          <b>Goal</b>
          <div>{post.goal}</div>
        </div>
        <div>
          <b>Accomplishment</b>
          <div>{post.accomplishment}</div>
        </div>
        <div>
          <b>Focus</b>
          <Scale value={post.focus} disabled />
        </div>
        <div>
          <b>Productivity</b>
          <Scale value={post.productivity} disabled />
        </div>
      </div>
    ));
  }
  render() {
    return (
      <Panel id="Today">
        <h3>{"One day I'll have REAL data to display (ง •̀_•́)ง"}</h3>
        {this.renderShittyPosts()}
      </Panel>
    );
  }
}

export default connect(mapStateToProps)(Today);

/**
PEARSON PROPRIETARY AND CONFIDENTIAL INFORMATION SUBJECT TO NDA
 *  Copyright © 2017 Pearson Education, Inc.
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Pearson Education, Inc.  The intellectual and technical concepts contained
 * herein are proprietary to Pearson Education, Inc. and may be covered by U.S. and Foreign Patents,
 * patent applications, and are protected by trade secret or copyright law.
 * Dissemination of this information, reproduction of this material, and copying or distribution of this software
 * is strictly forbidden unless prior written permission is obtained
 * from Pearson Education, Inc.
**/

import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

// import {messages} from './defaultMessages';

class ResultsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: props.results
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      list: nextProps.results
    });
  };

  handleLinkClick(pageId) {
    this.props.searchListClick(pageId);
    this.props.listClick();
  }

  renderGlossaryList = glossaryList => (<div>
    <span className="titleWrapper">
      <span className="glossaryterm" />
      <span className="title"> {glossaryList.glossaryTitle}</span>
      <span className="pageNo">{glossaryList.pageNo}</span>
    </span>
    <p className="content" dangerouslySetInnerHTML={{ __html: glossaryList.contentPreview }} />
  </div>)

  renderPhraseList = phraseList => (<div className="phraseList" onClick={this.handleLinkClick.bind(this, phraseList.urn)}>
    <span className="titleWrapper">
      <span className="title phraseTitle"> {phraseList.title}</span>
      <span className="pageNo">{phraseList.pageNo}</span>
    </span>
    <p className="content" dangerouslySetInnerHTML={{ __html: phraseList.contentPreview }} />
  </div>)

  _renderResults = () => {
    // const that = this;
    const list = this.state.list;

    if (this.props.fetching) {
      return (<CircularProgress
        style={{ margin: '40px auto', display: 'block' }}
      />);
    }
    if (this.props.fetched) {
      const listItems = list.map(datalist =>
        <li
          key={datalist.id}
          role="link"
        >
          {(datalist.glossaryTitle ? this.renderGlossaryList(datalist) : this.renderPhraseList(datalist))}
        </li>);
      return (<ul>{listItems}</ul>);
    }
  }

  _renderNoResults = () => {
    // const {formatMessage} = this.props.intl;
    if (this.props.fetching) {
      return (<CircularProgress
        style={{ margin: '40px auto', display: 'block' }}
      />);
    }
    if (this.props.fetching === undefined || this.props.fetched || (!this.props.fetched && !this.props.fetching)) {
      return (<div className="search__no-results">
        <p className="search__no-results_header">No Recent Searches found.</p>
        <p className="search__no-results_text">You can search by word or phrase, glossary term, chapter or section</p>
      </div>);
    }
  };

  render() {
    let nodes = [];
    const list = this.state.list;

    if (list.length) {
      nodes = this._renderResults();
    } else {
      nodes = this._renderNoResults();
    }

    return (
      <ul>
        {nodes}
      </ul>
    );
  }

}

ResultsComponent.propTypes = {
  results: PropTypes.array.isRequired
};

export default ResultsComponent;

import React, {PropTypes} from 'react';
import {messages} from './defaultMessages';

class ResultsComponent extends React.Component {

  static propTypes = {
    results: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      list:props.results
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      list:nextProps.results
    });
  };

  _handleClick = (url, numResults) => {
    console.log(url, numResults);
  };

  _renderResults = () => {
    const that = this;
    const list = this.state.list;
    const numResults = this.state.list.length;
    return list.map(function(n) {
      return <li
        key= {n.url}
        role="link"
        onClick = {that._handleClick(n.url, numResults)}
      ><p className="title"> {n.title + ' :'}</p>
        <p className="content" dangerouslySetInnerHTML={{__html: n.contentPreview}} />
      </li>
    });
  };

  _renderNoResults = () => {
    const {formatMessage} = this.props.intl;
    return <div className="search__no-results">
      <p className="search__no-results_header">{formatMessage(messages.noSearchesHeader)}</p>
      <p className="search__no-results_text">{formatMessage(messages.noSearchesText)}</p>
    </div>
  };

  render() {
    let nodes = [];
    const list = this.state.list;

    if (list.length) {
      nodes = this._renderResults();
    }else {
      nodes = this._renderNoResults();
    }

    return(
      <ul>
           {nodes}
      </ul>
    );
  }

}

export default ResultsComponent;

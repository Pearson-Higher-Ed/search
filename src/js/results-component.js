import React, {PropTypes} from 'react';
//import {messages} from './defaultMessages';

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

  _handleClick = (url, numResults) => {
    console.log(url, numResults);
  };

  _renderResults = () => {
    const that = this;
    const list = this.state.list;
    const numResults = this.state.list.length;
    return list.map(n => <li
      key={n.url}
      role="link"
      onClick={that._handleClick(n.url, numResults)}
    >
      <span className="glossaryterm"></span>
      <p className="title"> {n.title + ' :'}</p>
      <p className="content" dangerouslySetInnerHTML={{__html: n.contentPreview}} />
    </li>);
  };

  _renderNoResults = () => {
    //const {formatMessage} = this.props.intl;
    return <div className="search__no-results">
      <p className="search__no-results_header">No Recent Searches found.</p>
      <p className="search__no-results_text">You can search by word or phrase, glossary term, page number, chapter or section</p>
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

ResultsComponent.propTypes = {
  results: PropTypes.array.isRequired
}

export default ResultsComponent;

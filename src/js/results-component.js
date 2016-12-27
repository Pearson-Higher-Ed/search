import React, {PropTypes} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

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

  _renderResults = () => {
    //const that = this;
    const list = this.state.list;
    if (this.props.fetching) {
      return (<CircularProgress
        style={{ margin: '40px auto', display: 'block' }}
      />);
    }
    if (this.props.fetched) {
      return list.map(n => <li
      key={n.url}
      role="link"> <span className="titleWrapper">
      <span className="glossaryterm"></span>
      <span className="title"> {n.title}</span></span>
      <p className="content" dangerouslySetInnerHTML={{__html: n.contentPreview}} />
    </li>);
    }
    
  };

  _renderNoResults = () => {
    //const {formatMessage} = this.props.intl;
    if (this.props.fetching) {
      return (<CircularProgress
        style={{ margin: '40px auto', display: 'block' }}
      />);
    }
    if (this.props.fetching===undefined || this.props.fetched || (!this.props.fetched && !this.props.fetching)) {
      return <div className="search__no-results">
        <p className="search__no-results_header">No Recent Searches found.</p>
        <p className="search__no-results_text">You can search by word or phrase, glossary term, page number, chapter or section</p>
      </div>
    }
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

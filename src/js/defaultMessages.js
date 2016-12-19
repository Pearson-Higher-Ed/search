import {defineMessages} from 'react-intl';

export const messages = defineMessages({
  searchTitle: {
    id: 'searchTitle',
    description : 'this is search input title text',
    defaultMessage: 'Search'
  },
  placeholder: {
    id: 'placeholder',
    description : 'this is a demo placeholder',
    defaultMessage: 'search by word, phrase or page number'
  },
  noSearchesHeader:{
    id:'noSearchesHeader',
    description: 'header for no searches message',
    defaultMessage: 'No Recent Searches found.'
  },
  noSearchesText:{
    id:'noSearchesText',
    description: 'text for no searches message',
    defaultMessage: 'You can search by word or phrase, glossary term, page number, chapter or section'
  }
});

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

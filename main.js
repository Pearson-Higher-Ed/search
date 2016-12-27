//
// Change all references to 'MyComponent' in this file to your real component name!
//

// bundled component styling
import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import ComponentOwner from './src/js/component-owner';

// i18n, set up for French out-of-the-box
import {addLocaleData, IntlProvider} from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import frJson from './translations/fr.json';
const translations = {
  'fr' : frJson
};

export default class DemoSearchComponent {

  constructor(config) {
    addLocaleData(frLocaleData);
    this.init(config);
  }

  init(config) {

    const locale = config.locale ? config.locale : 'en';

    ReactDOM.render(
      <IntlProvider locale={locale} messages={translations[locale]}>
        <ComponentOwner data={config}  results = {config.results} fetch={config.fetch}/>
      </IntlProvider>,
      document.getElementById(config.elementId)
    );
  }
}
export SearchComponent from './src/js/search-component';

document.body.addEventListener('o.InitSearchComponent', e => new DemoSearchComponent(e.detail));

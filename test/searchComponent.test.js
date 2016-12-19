import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import {IntlProvider} from 'react-intl';
import TestUtils from 'react-addons-test-utils';
import ComponentOwner from '../src/js/search-component';

expect.extend(expectJSX);

describe('Component Owner Suite', () => {
  let renderer;
  let intlProvider;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    intlProvider = new IntlProvider({locale: 'en'}, {});
  });

  it('shallowly renders the component owner using React TestUtils', () => {

    const {intl} = intlProvider.getChildContext();
    const targetData = {
      elementId: 'demo-target1'
    };

    renderer.render(
      <ComponentOwner.WrappedComponent
        data={targetData}
        intl={intl} />
      , {intl}
    );

    let result = renderer.getRenderOutput();
    expect(result.type).toEqual('div');
    expect(result.props.className).toEqual('search');
    expect(result.props.children[0].props.children.type).toEqual('input');
  });
});

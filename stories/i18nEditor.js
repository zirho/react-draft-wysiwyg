/* @flow */

import React, { Component } from 'react';
import { Editor } from '../packages/core/src';
import { translations } from '../packages/i18n/src';

class I18nEditor extends Component {

  state: any = {
    locale: '',
  };

  onLocaleChange: Function = (locale) => {
    this.setState({
      locale,
    });
  };

  render() {
    const { locale } = this.state;
    return (
      <div className="playground-root">
        <Editor
          toolbarClassName="playground-toolbar"
          wrapperClassName="playground-wrapper"
          editorClassName="playground-editor"
          localization={{
            locale,
            translations: translations[locale]
          }}
        />
      </div>
    );
  }
}

export default I18nEditor;

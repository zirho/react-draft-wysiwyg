/* @flow */

import React, { Component } from 'react';
import { Editor } from '../../packages/core/src';
import { translations } from '../../packages/i18n/src';

import './styles.css';

class I18nEditor extends Component {

  state: any = {
    locale: 'en',
  };

  onLocaleChange: Function = (event) => {
    this.setState({
      locale: event.target.value,
    });
  };

  render() {
    const { locale } = this.state;
    return (
      <div className="rdw-root">
        <div className="rdw-locale-wrapper">
          <span className="rdw-locale-lbl">Select Language</span>
          <select value={locale} onChange={this.onLocaleChange}>
            <option value="zh">Chinese</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="ko">Korean</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
          </select>
        </div>
        <Editor
          toolbarClassName="rdw-toolbar"
          wrapperClassName="rdw-wrapper"
          editorClassName="rdw-editor"
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

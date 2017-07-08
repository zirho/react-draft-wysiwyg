import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSelectedBlocksType } from 'draftjs-utils';
import { RichUtils } from 'draft-js';
import { mergeRecursive } from 'rdw-utils';

import LayoutComponent from './ui';
import defaultConfig from '../config/toolbar';

class BlockType extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object,
    modalHandler: PropTypes.object,
    config: PropTypes.object,
    translations: PropTypes.object,
  };

  state: Object = {
    expanded: false,
    currentBlockType: 'unstyled',
  };

  componentWillMount() {
    const { editorState, modalHandler, config } = this.props;
    const state = {};
    if (editorState) {
      state.currentBlockType = getSelectedBlocksType(editorState);
    }
    state.config = mergeRecursive(defaultConfig, config);
    if (modalHandler) {
      modalHandler.registerCallBack(this.expandCollapse);
    }
    this.setState(state);
  }

  componentWillReceiveProps(properties): void {
    const state = {};
    if (properties.editorState &&
      this.props.editorState !== properties.editorState) {
      state.currentBlockType = getSelectedBlocksType(properties.editorState);
    }
    if (properties.config !== this.props.config) {
      state.config = mergeRecursive(defaultConfig, properties.config);
    }
    if (properties.modalHandler && !this.props.modalHandler) {
      properties.modalHandler.registerCallBack(this.expandCollapse);
    }
    this.setState(state);
  }

  componentWillUnmount(): void {
    const { modalHandler } = this.props;
    modalHandler.deregisterCallBack(this.expandCollapse);
  }

  onExpandEvent: Function = (): void => {
    this.signalExpanded = !this.state.expanded;
  };

  expandCollapse: Function = (): void => {
    this.setState({
      expanded: this.signalExpanded,
    });
    this.signalExpanded = false;
  }

  blocksTypes: Array<Object> = [
    { label: 'Normal', style: 'unstyled' },
    { label: 'H1', style: 'header-one' },
    { label: 'H2', style: 'header-two' },
    { label: 'H3', style: 'header-three' },
    { label: 'H4', style: 'header-four' },
    { label: 'H5', style: 'header-five' },
    { label: 'H6', style: 'header-six' },
    { label: 'Blockquote', style: 'blockquote' },
  ];

  doExpand: Function = (): void => {
    this.setState({
      expanded: true,
    });
  };

  doCollapse: Function = (): void => {
    this.setState({
      expanded: false,
    });
  };

  toggleBlockType: Function = (blockType: string) => {
    const blockTypeValue = this.blocksTypes.find(bt => bt.label === blockType).style;
    const { editorState, onChange } = this.props;
    const newState = RichUtils.toggleBlockType(
      editorState,
      blockTypeValue,
    );
    if (newState) {
      onChange(newState);
    }
  };

  render(): Object {
    const { translations } = this.props;
    const { expanded, currentBlockType, config } = this.state;
    const BlockTypeComponent = config.component || LayoutComponent;
    const blockType = this.blocksTypes.find(bt => bt.style === currentBlockType);
    return (
      <BlockTypeComponent
        config={config}
        translations={translations}
        currentState={{ blockType: blockType && blockType.label }}
        onChange={this.toggleBlockType}
        expanded={expanded}
        onExpandEvent={this.onExpandEvent}
        doExpand={this.doExpand}
        doCollapse={this.doCollapse}
      />
    );
  }
}

export default BlockType;

import React from 'react';
import { Editor } from '../../packages/core/src';
import { BlockType } from '../../packages/blockType/src';

const BlockTypeEditor = () =>
  (<div className="rdw-root">
    <div className="rdw-editorSection">
      <div className="rdw-editorWrapper">
        <Editor
          toolbarClassName="rdw-toolbar"
          wrapperClassName="rdw-wrapper"
          editorClassName="rdw-editor"
          toolbarTempProp={[
            <BlockType config={{ title: 'BlockType' }} />,
          ]}
        />
      </div>
    </div>
  </div>);

export default BlockTypeEditor;

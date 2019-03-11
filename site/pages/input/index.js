/**
 * Created by yanggang on 2019/3/11.
 */
import React from "react";

import ReactMarkdown from "react-markdown"
import CodeBlock from "../../components/codeblock"

import "./index.css"
import Basic from  "./basic";
import Size from  "./size";

const input = `
## API

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| size      | can be set to small large or default | string | default |
| disabled  | disabled state of button	 | boolean | false |
| defaultValue | The input content default value   | string | |
| value     | The input content value	 | string  | |
| onChange  | set the handler to handle change event	| (event) => void | - |
`;

export default () => {
    return <div className="input-wrapper">
        <div className="markdown">
            <ReactMarkdown source={`## Examples`} renderers={{code: CodeBlock}} />
        </div>
        <Basic/>
        <Size/>
        <div className="markdown">
            <ReactMarkdown source={input} renderers={{code: CodeBlock}} />
        </div>
    </div>
}
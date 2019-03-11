/**
 * Created by yanggang on 2019/3/11.
 */
import React from "react";

import ReactMarkdown from "react-markdown"
import CodeBlock from "../../components/codeblock"

import "./index.css"
import Basic from  "./basic";

const input = `
## API

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| disabled  | disabled state of button	 | boolean | false |
| checked | The input content checked   | boolean | |
| defaultChecked | The input content default checked   | boolean | false |
| value     | The input content value	 | string  | |
| onChange  | set the handler to handle change event	| (event) => void | - |
`;

export default () => {
    return <div className="checkbox-wrapper">
        <div className="markdown">
            <ReactMarkdown source={`## Examples`} renderers={{code: CodeBlock}} />
        </div>
        <Basic/>
        <div className="markdown">
            <ReactMarkdown source={input} renderers={{code: CodeBlock}} />
        </div>
    </div>
}
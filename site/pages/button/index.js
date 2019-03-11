/**
 * Created by yanggang on 2019/3/10.
 */
import React from "react";

import ButtonTypes from "./types"
import ButtonSize from "./size"
import ButtonDisabled from "./disabled"
import ReactMarkdown from "react-markdown"
import CodeBlock from "../../components/codeblock"

import "./index.css"


const input = `
## API

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| type      | can be set to primary or default | string | default |
| size      | can be set to small large or default | string | default |
| disabled  | disabled state of button	 | boolean | false |
| htmlType  | htmlType | string | button |
| onClick   | set the handler to handle click event	| (event) => void | - |
`;

export default () => {
    return <div className="button">
        <div className="markdown">
            <ReactMarkdown source={`## Examples`} renderers={{code: CodeBlock}} />
        </div>
        <ButtonTypes/>
        <ButtonSize/>
        <ButtonDisabled/>
        <div className="markdown">
            <ReactMarkdown source={input} renderers={{code: CodeBlock}} />
        </div>
    </div>
}
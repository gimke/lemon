/**
 * Created by yanggang on 2019/3/11.
 */
import React from "react";
import {Input} from "../../../src";
import "../../../src/input/style";
import ReactMarkdown from "react-markdown"
import CodeBlock from "../../components/codeblock"

const input = `
> basic usage

\`\`\`javascript
import React from "react";
import {Input} from "lemon-ui";

export default () => <div>
    <Input placeholder="Name"></Input>
    <Input disabled placeholder="disabled"></Input>
</div>
\`\`\`
`;

export default () => <div>
    <div className="examples">
        <Input placeholder="Name"/>
        <Input disabled placeholder="disabled"/>
    </div>
    <div className="markdown">
        <ReactMarkdown source={input} renderers={{code: CodeBlock}} />
    </div>
</div>

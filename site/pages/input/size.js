/**
 * Created by yanggang on 2019/3/10.
 */
import React from "react";
import {Input} from "../../../src";
import "../../../src/input/style";
import ReactMarkdown from "react-markdown"
import CodeBlock from "../../components/codeblock"

const input = `
> size: \`large\`,\`default\`,\`small\`

\`\`\`javascript
import React from "react";
import {Input} from "lemon-ui";

export default () => <div>
    <Input size="large" placeholder="large"></Input>
    <Input placeholder="default"></Input>
    <Input size="small" placeholder="small"></Input>
</div>
\`\`\`
`;

export default () => <div>
    <div className="examples">
        <Input size="large" placeholder="large"/>
        <Input placeholder="default"/>
        <Input size="small" placeholder="small"/>
    </div>
    <div className="markdown">
        <ReactMarkdown source={input} renderers={{code: CodeBlock}} />
    </div>
</div>

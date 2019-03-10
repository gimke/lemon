/**
 * Created by yanggang on 2019/3/10.
 */
import React from "react";
import {Button} from "../../../src";
import "../../../src/button/style";
import ReactMarkdown from "react-markdown"
import CodeBlock from "../../components/codeblock"

const input = `
> size: \`large\`,\`default\`,\`small\`


\`\`\`javascript
import React from "react";
import {Button} from "lemon-ui";

export default () => <div>
    <Button size="large">large</Button>
    <Button>default</Button>
    <Button size="small">small</Button>
</div>
\`\`\`
`;

export default () => <div>
    <Button size="large">large</Button>
    <Button>default</Button>
    <Button size="small">small</Button>
    <div className="markdown">
        <ReactMarkdown source={input} renderers={{code: CodeBlock}} />
    </div>
</div>

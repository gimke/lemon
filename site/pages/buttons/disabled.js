/**
 * Created by yanggang on 2019/3/10.
 */
import React from "react";
import {Button} from "../../../src";
import "../../../src/button/style";
import ReactMarkdown from "react-markdown"
import CodeBlock from "../../components/codeblock"

const input = `
> disabled

\`\`\`javascript
import React from "react";
import {Button} from "lemon-ui";

export default () => <div>
    <Button disabled>disabled</Button>
    <Button>default</Button>
</div>
\`\`\`
`;

export default () => <div>
    <Button disabled>disabled</Button>
    <Button>default</Button>
    <div className="markdown">
        <ReactMarkdown source={input} renderers={{code: CodeBlock}} />
    </div>
</div>

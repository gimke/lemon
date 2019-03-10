/**
 * Created by yanggang on 2019/3/10.
 */
import React from "react";
import {Button} from "../../../src";
import "../../../src/button/style";
import ReactMarkdown from "react-markdown"
import CodeBlock from "../../components/codeblock"

const input = `
\`\`\`javascript
import React from "react";
import {Button} from "../../../src";
import "../../../src/button/style";

export default () => <div>
    <Button type="primary">primary</Button>
    <Button type="normal">normal</Button>
</div>
\`\`\`
`;

export default () => <div>
    <Button type="primary">primary</Button>
    <Button type="normal">normal</Button>
    <ReactMarkdown source={input} renderers={{code: CodeBlock}}
    />
</div>

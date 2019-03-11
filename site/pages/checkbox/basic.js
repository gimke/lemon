/**
 * Created by yanggang on 2019/3/11.
 */
import React from "react";
import {Checkbox} from "../../../src";
import "../../../src/checkbox/style";

import {Group} from "../../../src";
import "../../../src/group/style";

import ReactMarkdown from "react-markdown"
import CodeBlock from "../../components/codeblock"

const input = `
> basic usage

\`\`\`javascript
import React from "react";
import {Checkbox} from "lemon-ui";

export default () => <div>
    <Checkbox>Checkbox</Checkbox>
    <Checkbox disabled>disabled</Checkbox>
</div>
\`\`\`
`;

const groupinput = `
> group usage

\`\`\`javascript
import React from "react";
import {Checkbox,Group} from "lemon-ui";

export default () => <div>
    <Group defaultValue={["A","B"]}>
        <Checkbox value="A">A</Checkbox>
        <Checkbox value="B">B</Checkbox>
    </Group>
</div>
\`\`\`
`;


export default () => <div>
    <div className="examples">
        <Checkbox>Checkbox</Checkbox>
        <Checkbox disabled>disabled</Checkbox>
    </div>
    <div className="markdown">
        <ReactMarkdown source={input} renderers={{code: CodeBlock}} />
    </div>
    <div className="examples">
        <Group defaultValue={["A","B"]}>
            <Checkbox value="A">A</Checkbox>
            <Checkbox value="B">B</Checkbox>
        </Group>
    </div>
    <div className="markdown">
        <ReactMarkdown source={groupinput} renderers={{code: CodeBlock}} />
    </div>
</div>

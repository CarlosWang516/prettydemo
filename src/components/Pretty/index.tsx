import * as React from 'react';
import './index.css';

interface PrettyProps {
    data: any;
}

export default function Pretty(props: PrettyProps) {
    let newData = JSON.stringify(props.data);
    let tab = 0;

    let [prettyCode, setPrettyCode] = React.useState<string>(newData);

    React.useEffect(() => {
        const arr = ['{', '}', '[', ']'];
        arr.map((i, idx) =>
            newData = newData.replaceAll(i, `,${i},`)
        )
        setPrettyCode(newData);
    }, []);

    return (
        <React.Fragment>
            {prettyCode.split(",").filter(i => !!i).map((code, idx) => {
                const isIndentRight = (code === "[" || code === "{");
                const isIndentLeft = (code === "]" || code === "}");
                if (isIndentRight) {
                    tab += 1;
                } else if (isIndentLeft) {
                    tab -= 1;
                }
                return (
                    <div className="pretty-area">
                        <div className="pretty-sidebar">
                            {idx + 1}
                        </div>
                        <div className="pretty-code">
                            <span style={{marginLeft: 20 * (tab - (isIndentRight ? 1 : 0))}}/>
                            {code}
                        </div>
                    </div>
                );
            })}
        </React.Fragment>
    );
}
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

function CodeReadOnly({codeValue, uniqueIdName}) {

    function onChange(newValue) {
        console.log("change", newValue);
    }

    return (
        <>
            <AceEditor style={{borderRadius:"7px"}}
                       mode="javascript"
                       theme="monokai"
                       onLoad={function(editor){ editor.renderer.setPadding(15); editor.renderer.setScrollMargin(15, 15, 15, 15); }}
                       onChange={onChange}
                       name={uniqueIdName}
                       editorProps={{ $blockScrolling: true }}
                       fontSize={20}
                       width={'100%'}
                       showPrintMargin={true}
                       showGutter={true}
                       highlightActiveLine={true}
                       value={codeValue}
                       setOptions={{
                           showLineNumbers: true,
                           maxLines: 10
                       }}/>
        </>
    )
}

export default CodeReadOnly;

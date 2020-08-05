import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

function CodeEditor({codeValue, uniqueIdName, codeMode, majValue}) {

    function onChange(newValue) {
        console.log("change", newValue);
        majValue(newValue);
    }

    return (
        <>
            <AceEditor style={{borderRadius:"7px 7px 0px 0px "}}
                       mode={codeMode}
                       theme="monokai"
                       onLoad={function(editor){ editor.renderer.setPadding(15); editor.renderer.setScrollMargin(15, 15, 15, 15); }}
                       onChange={onChange}
                       name={uniqueIdName}
                       editorProps={{ $blockScrolling: true }}
                       fontSize={18}
                       width={'100%'}
                       showPrintMargin={true}
                       showGutter={true}
                       highlightActiveLine={true}
                       value={codeValue}
                       setOptions={{
                           showLineNumbers: true,
                           maxLines: 10,
                           minLines: 5
                       }}/>
        </>
    )
}

export default CodeEditor;

import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

function CodeReadOnly({codeValue, uniqueIdName, codeMode}) {


    return (
        <>
            <AceEditor style={{borderRadius:"7px" , marginBottom:"10px"}}
                mode={codeMode}
                theme="monokai"
                onLoad={function(editor){ editor.renderer.setPadding(0); editor.renderer.setScrollMargin(15, 15, 15, 15); }}
                name={uniqueIdName}
                editorProps={{ $blockScrolling: true }}
                fontSize={20}
                width={'100%'}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                readOnly={true}
                value={codeValue}
                setOptions={{
                    showLineNumbers: true,
                    maxLines: Infinity,
                    wrap : true
                }}
            />
        </>
    )
}

export default CodeReadOnly;

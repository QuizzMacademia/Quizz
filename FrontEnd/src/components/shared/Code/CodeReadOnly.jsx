import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-iplastic";

function CodeReadOnly({codeValue, uniqueIdName, codeMode, theme}) {


    return (
        <>
            <AceEditor style={{borderRadius:"7px" , marginBottom:"10px"}}
                mode={codeMode}
                theme={theme}
                onLoad={function(editor){ editor.renderer.setPadding(15); editor.renderer.setScrollMargin(15, 15, 15, 15); }}
                name={uniqueIdName}
                editorProps={{ $blockScrolling: true }}
                fontSize={18}
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

// import React from 'react'

import { Box, styled } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { Controlled as ControlledEditor } from "react-codemirror2";

import "../App.css";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "CodeMirror/addon/runmode/colorize.js";
import "CodeMirror/addon/hint/javascript-hint.js";
import "CodeMirror/addon/hint/html-hint.js";
import "CodeMirror/addon/hint/css-hint.js";
import "CodeMirror/addon/hint/sql-hint.js";
import "CodeMirror/addon/hint/anyword-hint.js";
import "CodeMirror/addon/lint/lint.js";
import "CodeMirror/keymap/sublime.js";

import { useState } from "react";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 15px;
  border-top: 3px solid #34363e;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-weight: 600;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  border-left: 1px solid #232323;
  border-right: 1px solid #232323;
  height: 350px;
  margin-bottom: 18px;
`;

const Options = styled(Box)`
  display: flex;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Editor = ({ heading, icon, color, mode, value, onChange }) => {
  const [max, setMax] = useState(false);
  const [min, setMin] = useState(false);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  const handleEditorChange = (setState) => {
    setState((prev) => !prev);
    if (max && min) {
      setMax((prev) => !prev);
      setMin((prev) => !prev);
    }
  };

  return (
    <Container style={{ flexGrow: max === min ? 1 : max ? 2 : 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              display: "flex",
              borderRadius: 5,
              marginRight: 6,
              width: "17px",
              height: "17px",
              color: "#000000",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <Options>
          <FullscreenExitIcon
            style={{
              fontSize: "20px",
              background: "#444857",
              padding: "3px",
              borderRadius: 5,
              color: "#ffffff",
              marginRight: 5,
            }}
            onClick={() => handleEditorChange(setMin)}
          />
          <FullscreenIcon
            style={{
              fontSize: "20px",
              background: "#444857",
              padding: "3px",
              borderRadius: 5,
              color: "#ffffff",
              marginRight: 7.5,
            }}
            onClick={() => handleEditorChange(setMax)}
          />
        </Options>
      </Header>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          mode: mode,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Container>
  );
};

export default Editor;

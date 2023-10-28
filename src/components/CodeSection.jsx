import { Box, styled } from "@mui/material";
import Editor from "./Editor";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box) `
    display: flex;
    background: #060606;

    @media only screen and (max-width: 768px){
      flex-direction: column;
    }
`

const CodeSection = () => {
    const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);
  return (
    <Container>
      <Editor heading="HTML" icon="/" color="#FF3C41" mode="xml" value={html} onChange={setHtml}/>
      <Editor heading="CSS" icon={<img src="/Asterisk.png" style={{width:8, height:8}}/>} color="#0EBEFF" mode="css" value={css} onChange={setCss}/>
      <Editor heading="JS" icon="( )" color="#FCD000" mode="javascript" value={js} onChange={setJs}/>
    </Container>
  );
};

export default CodeSection;

import React from "react";
import styled from "styled-components";
import RawInputArea from "./RawInputArea";
import ReactMarkdown from "react-markdown"

const Container = styled.div`
    width:50%;
    height:100%;
    padding:13px;
    border-right:1.5px solid rgba(15,15,15,0.4);
    font-family:'Lato',sans-serif;
`;

const Title = styled.div`
  font-size:22px;
  font-weight:600;
  padding:8px 0
  margin-bottom:1em;
  border-bottom:1px solid rgba(15,15,15,0.3);
`;

const ResultArea = styled.div`
    width:100%;
    height:100%;
    border:none;
    font-size:17px;
`

export default function MarkdownSanitazed(){
    return(
        <Container>
            <Title>Markdown output</Title>
            <ResultArea>
                <ReactMarkdown source="# Hello"/>
            </ResultArea>
        </Container>
    )
}
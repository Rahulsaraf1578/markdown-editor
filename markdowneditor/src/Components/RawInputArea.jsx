import React from "react";
import styled from "styled-components";

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

const TextArea = styled.textarea`
    width:100%;
    height:100%;
    resize:none;
    border: none;
    outline:none;
    font-size:17px;
`

export default function RawInputArea(){
    return(
        <Container>
            <Title>Markdown text</Title>
            <TextArea/>
        </Container>
    )
}
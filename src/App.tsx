import styles from "./App.module.css";
import { Card, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import evaluatex from "evaluatex/dist/evaluatex";

export default function App() {

  const [expr, setExpr] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    setExpr(input);
  }

  return (
    <div>
      <div className={styles.header}>
        <h1 style={{ color: "White" }}>Tex Evaluator</h1>
      </div>

      <Card className={styles.card}>
        <h2>Evaluate Tex Expression</h2>
        <TextField variant="filled" label="Enter Tex Expression here" onChange={handleInputChange} />
        <Latex>{`$$${expr}$$`}</Latex>
        <p>{evaluate(expr) ?? ''}</p>
      </Card>
    </div>
  );
}

function evaluate(texExpr: string): number | undefined {
  try {
    return evaluatex(texExpr)();
  } catch (error) {
    return undefined;
  }
}
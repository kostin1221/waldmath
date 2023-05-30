import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Task from "../lib/Task";

const MathContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MathWrap = styled.div`
  font-size: 2em;
  width: 2em;
  border: grey solid 1px;
  margin: 1%;
  border-radius: 8px;
  text-align: center;
`;

const AnswerInput = styled.input`
  font-size: 2em;
  width: 3em;
  margin: 1%;
  border: red solid 1px;
`;
type TaskRendererProps = {
  task: Task;
  onTaskAttempt: (success: boolean) => void;
};

const TaskRenderer = ({
  task,
  onTaskAttempt,
}: TaskRendererProps): React.ReactElement => {
  const [userAnswer, setUserAnswer] = useState("");

  const colorMap: { [details: string]: string } = {
    "-": "blue",
    "+": "red",
    "/": "blue",
    "*": "red",
  };

  const textInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    textInput.current?.focus();
  });

  const onAnswerChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newAnswer: string = e?.currentTarget?.value;

    if (newAnswer.length >= task.getCorrectAnswer.length) {
      setUserAnswer("");
      onTaskAttempt(newAnswer === task.getCorrectAnswer);
    } else {
      setUserAnswer(newAnswer);
    }
  };

  return (
    <MathContainer>
      {task.getTaskElements.map((toRender, i) => (
        <MathWrap style={{ color: colorMap[toRender] || "black" }}>
          {toRender}
        </MathWrap>
      ))}
      <AnswerInput
        ref={textInput}
        value={userAnswer}
        onChange={onAnswerChange}
      ></AnswerInput>
    </MathContainer>
  );
};

export default TaskRenderer;

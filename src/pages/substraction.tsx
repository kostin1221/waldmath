import React, { useState } from "react";
import TaskRenderer from "../components/TaskRenderer";
import TaskGenerator from "../lib/TaskGenerators";
import pikachuThumbImage from "./../assets/pikachu_thumb.jpeg";
import pikachuSadImage from "./../assets/pikachu_sad.jpeg";
import styled from "@emotion/styled";
import { Button, Card, Modal } from "react-bootstrap";

const AttemptResultImage = styled.img`
  max-width: 300px;
`;

const Substraction = (): React.ReactElement => {
  const taskGenerator = new TaskGenerator();
  const [task, setTask] = useState(taskGenerator.generateSubstraction());
  const [lastAttempt, setLastAttempt] = useState<boolean | undefined>(
    undefined
  );

  const [show, setShow] = useState<boolean>(false);

  type Statictics = {
    failed: number;
    succeeded: number;
  };
  const [statictics, setStatictics] = useState<Statictics>({
    failed: 0,
    succeeded: 0,
  });

  const onTaskAttempt = (result: boolean) => {
    if (result) {
      setTask(taskGenerator.generateSubstraction());
      setStatictics((currentStatictics) => ({
        ...currentStatictics,
        succeeded: currentStatictics.succeeded + 1,
      }));
    } else {
      setStatictics((currentStatictics) => ({
        ...currentStatictics,
        failed: currentStatictics.failed + 1,
      }));
    }

    setLastAttempt(result);
  };

  return (
    <>
      <Card style={{ minWidth: "18rem", margin: "20px" }}>
        <Card.Body>
          <Card.Title>
            {task.getTitle}{" "}
            <Button variant="outline-info" onClick={() => setShow(true)}>
              Stats
            </Button>
          </Card.Title>
          <Card.Text>
            <TaskRenderer
              task={task}
              onTaskAttempt={onTaskAttempt}
            ></TaskRenderer>
          </Card.Text>
        </Card.Body>
      </Card>

      {lastAttempt === true && (
        <AttemptResultImage
          src={pikachuThumbImage}
          alt="pikachu"
        ></AttemptResultImage>
      )}
      {lastAttempt === false && (
        <AttemptResultImage
          src={pikachuSadImage}
          alt="pikachu sad"
        ></AttemptResultImage>
      )}

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Statistiken</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Richtig: {statictics.succeeded} / Falsch: {statictics.failed}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShow(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Substraction;

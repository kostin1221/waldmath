import React, { useState } from "react";
import TaskRenderer from "../components/TaskRenderer";
import TaskGenerator from "../lib/TaskGenerators";
import { Button, Card, Modal } from "react-bootstrap";
import { OutcomeStatistics } from "../lib/CommonTypes";
import OutcomeImage from "../components/OutcomeImage";

const Substraction = (): React.ReactElement => {
  const taskGenerator = new TaskGenerator();
  const [task, setTask] = useState(taskGenerator.generateSubstraction());
  const [show, setShow] = useState<boolean>(false);

  const [statistics, setStatistics] = useState<OutcomeStatistics>({
    failed: 0,
    failedInARow: 0,
    succeeded: 0,
    succeededInARow: 0,
  });

  const onTaskAttempt = (result: boolean) => {
    if (result) {
      setTask(taskGenerator.generateSubstraction());
      setStatistics((currentStatictics) => ({
        ...currentStatictics,
        succeeded: currentStatictics.succeeded + 1,
        succeededInARow: currentStatictics.succeededInARow + 1,
        failedInARow: 0
      }));
    } else {
      setStatistics((currentStatictics) => ({
        ...currentStatictics,
        failed: currentStatictics.failed + 1,
        failedInARow: currentStatictics.failedInARow + 1,
        succeededInARow: 0,
      }));
    }
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

      <OutcomeImage statistics={statistics}></OutcomeImage>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Statistiken</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Richtig: {statistics.succeeded} / Falsch: {statistics.failed}
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

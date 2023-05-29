import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import TaskRenderer from '../components/TaskRenderer';
import TaskGenerator from '../lib/TaskGenerators';


const Substraction = (): React.ReactElement => {
    const taskGenerator = new TaskGenerator();
    const [task, setTask] = useState(taskGenerator.generateSubstraction());

    const onTaskAttempt = (success: boolean) => {
        if (success) {
            setTask(taskGenerator.generateSubstraction());
        }
  	}

    return (
        <TaskRenderer task={task} onTaskAttempt={onTaskAttempt}></TaskRenderer>
    );
};

export default Substraction;
import Task from "./Task";

class TaskGenerator {
    public generateSubstraction(): Task {
        const minuend = this.getRandomIntInclusive(1, 20);
        const subtrahend = this.getRandomIntInclusive(1, minuend);
    
        return new Task([minuend + "", "-", subtrahend + ""], (minuend - subtrahend) + "", "Subtraktion");
    }

    private getRandomIntInclusive(min: number, max: number): number {
        const randomBuffer = new Uint32Array(1);

        window.crypto.getRandomValues(randomBuffer);
    
        let randomNumber = randomBuffer[0] / (0xffffffff + 1);
    
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(randomNumber * (max - min + 1)) + min;
    }
}

export default TaskGenerator;
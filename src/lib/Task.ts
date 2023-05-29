class Task {
    private taskElements: string[];
    private correctAnswer: string;
    private title: string;

    constructor(taskElements: string[], correctAnswer: string, title: string) {
        this.taskElements = taskElements;
        this.correctAnswer = correctAnswer;
        this.title = title;
    }

    public get getTaskElements() {
        return this.taskElements;
    }

    public get getCorrectAnswer() {
        return this.correctAnswer;
    }

    public get getTitle() {
        return this.title;
    }
}

export default Task;
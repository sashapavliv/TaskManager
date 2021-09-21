import {ITask} from "../types/Task";

export const complete = (id:number, tasks: Array<ITask>) => {
    const findedIndex = tasks.findIndex((value: ITask) => value.id === id);
    tasks[findedIndex].isCompleted = true;
    return tasks;
}

export const create = (task: ITask, tasks: Array<ITask>) => {
    task.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;
    task.isCompleted = false;
    tasks.push(task);
    return tasks;
}
export const edit = (task: ITask, tasks: Array<ITask>) => {
    const findedIndex = tasks.findIndex((value: ITask) => value.id === task.id);
    tasks[findedIndex] = task;
    return tasks;
}

export const deleteItem = (id: number, tasks: Array<ITask>) => {
    const findedIndex = tasks.findIndex((value: ITask) => value.id === id);
    tasks.splice(findedIndex, 1);
    return tasks;
}
export function setLocalStorage(tasks: Array<ITask>) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

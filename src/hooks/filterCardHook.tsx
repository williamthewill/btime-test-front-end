type tasks = {
    id: number,
    title: string;
    priority: string;
    dateExecution: string;
    localExecution: string;
    description: string;
    status: string,
    imagem: string;
}[]

const filterCardHook = () => {
    const searchBy = (objList: tasks, substring: string) => {
        return objList.filter(task => {
            if (
                task.id.toString().toLowerCase().includes(substring.toLocaleLowerCase()) ||
                task.title.toLowerCase().includes(substring.toLocaleLowerCase()) ||
                task.priority.toLowerCase().includes(substring.toLocaleLowerCase()) ||
                task.localExecution.toLowerCase().includes(substring.toLocaleLowerCase()) ||
                task.description.toLowerCase().includes(substring.toLocaleLowerCase())
            ) {
                return task
            }
        })
    }
    const filterBy = (objList: tasks, target: any, value: string) => {
        return objList.filter(task => {
            if ((task as any)[target] == value) {
                return task
            }
        })
    }

    return { searchBy, filterBy }
}

export default filterCardHook
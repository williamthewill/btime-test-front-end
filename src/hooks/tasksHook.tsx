type task = {
    id: number,
    title: string;
    priority: string;
    dateExecution: string;
    localExecution: string;
    description: string;
    status: string;
    imagem: string;
}
type tasks = Array<task>

const tasksHook = () => {

    const getTasks = (args?: any) => {
        return [
            {
                id: 11,
                title: 'Title task 1',
                priority: 'alta',
                dateExecution: '22/12/2024',
                localExecution: 'Faria Lima',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                status: 'scheduled',
                imagem: 'https://camo.githubusercontent.com/760f65278e85ed9d69106473ae2db04c2c2f088d84ab1123d1ce7da71de1c36e/68747470733a2f2f757070792e696f2f696d672f6c6f676f2e737667'
            },
            {
                id: 22,
                title: 'Title task 2',
                priority: 'baixa',
                dateExecution: '28/11/2024',
                localExecution: 'Bocaiuva',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                status: 'executed',
                imagem: 'https://camo.githubusercontent.com/760f65278e85ed9d69106473ae2db04c2c2f088d84ab1123d1ce7da71de1c36e/68747470733a2f2f757070792e696f2f696d672f6c6f676f2e737667'
            },
            {
                id: 31,
                title: 'Title task 3',
                priority: 'alta',
                dateExecution: '22/12/2024',
                localExecution: 'Faria Lima',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                status: 'scheduled',
                imagem: 'https://camo.githubusercontent.com/760f65278e85ed9d69106473ae2db04c2c2f088d84ab1123d1ce7da71de1c36e/68747470733a2f2f757070792e696f2f696d672f6c6f676f2e737667'
            },
            {
                id: 42,
                title: 'Title task 4',
                priority: 'baixa',
                dateExecution: '28/11/2024',
                localExecution: 'Bocaiuva',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                status: 'executed',
                imagem: 'https://camo.githubusercontent.com/760f65278e85ed9d69106473ae2db04c2c2f088d84ab1123d1ce7da71de1c36e/68747470733a2f2f757070792e696f2f696d672f6c6f676f2e737667'
            },
            {
                id: 43,
                title: 'Title task 4',
                priority: 'baixa',
                dateExecution: '28/11/2024',
                localExecution: 'Bocaiuva',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                status: 'executed',
                imagem: 'https://camo.githubusercontent.com/760f65278e85ed9d69106473ae2db04c2c2f088d84ab1123d1ce7da71de1c36e/68747470733a2f2f757070792e696f2f696d672f6c6f676f2e737667'
            },
            {
                id: 45,
                title: 'Title task 4',
                priority: 'baixa',
                dateExecution: '28/11/2024',
                localExecution: 'Bocaiuva',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                status: 'executed',
                imagem: 'https://camo.githubusercontent.com/760f65278e85ed9d69106473ae2db04c2c2f088d84ab1123d1ce7da71de1c36e/68747470733a2f2f757070792e696f2f696d672f6c6f676f2e737667'
            },
            {
                id: 46,
                title: 'Title task 4',
                priority: 'baixa',
                dateExecution: '28/11/2024',
                localExecution: 'Bocaiuva',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                status: 'executed',
                imagem: 'https://camo.githubusercontent.com/760f65278e85ed9d69106473ae2db04c2c2f088d84ab1123d1ce7da71de1c36e/68747470733a2f2f757070792e696f2f696d672f6c6f676f2e737667'
            },
            {
                id: 47,
                title: 'Title task 4',
                priority: 'baixa',
                dateExecution: '28/11/2024',
                localExecution: 'Bocaiuva',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                status: 'executed',
                imagem: 'https://camo.githubusercontent.com/760f65278e85ed9d69106473ae2db04c2c2f088d84ab1123d1ce7da71de1c36e/68747470733a2f2f757070792e696f2f696d672f6c6f676f2e737667'
            },
            {
                id: 48,
                title: 'Title task 4',
                priority: 'baixa',
                dateExecution: '28/11/2024',
                localExecution: 'Bocaiuva',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                status: 'executed',
                imagem: 'https://camo.githubusercontent.com/760f65278e85ed9d69106473ae2db04c2c2f088d84ab1123d1ce7da71de1c36e/68747470733a2f2f757070792e696f2f696d672f6c6f676f2e737667'
            }
        ]
    }

    const groupByExecutionStatus = (tasks: tasks) => {
        return tasks.reduce((acc: any, task) => {
            task.status === 'scheduled'
                ? acc = { ...acc, 'scheduled': [...acc['scheduled'], task] }
                : acc = { ...acc, 'executed': [...acc['executed'], task] }

            return acc
        }, { 'scheduled': [], 'executed': [] } as { [key: string]: [] })
    }

    return { getTasks, groupByExecutionStatus }
}

export default tasksHook
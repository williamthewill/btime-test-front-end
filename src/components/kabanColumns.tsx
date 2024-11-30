import * as React from "react";
import Card from "./card";

type tasks = {
    id: number,
    title: string;
    priority: string;
    dateExecution: string;
    localExecution: string;
    description: string;
    imagem: string;
}[]

const KanbanColumns = ({ columnsMap, tasksByColumns }: { columnsMap: Array<[string, string]>, tasksByColumns: { [key: string]: tasks } }) => {
    return (
        <div className="column-container">
            {columnsMap.map(([colName, attName]: [string, string], i) =>
                <div className="task-column max-h-[85vh] overflow-hidden" key={i}>
                    <h3>{colName}</h3>
                    <hr className="custom-hr" />
                    <ul className="task-list max-h-[100%] overflow-auto">
                        {
                            tasksByColumns[attName].map((task) =>
                                < li key={task.id} >
                                    <Card
                                        task={task} />
                                </li>
                            )}
                    </ul>
                </div>
            )
            }
        </div >
    );
}

export default KanbanColumns
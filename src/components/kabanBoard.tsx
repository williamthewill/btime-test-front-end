import * as React from "react";
import '../css/KanbanBoard.css';
import KanbanColumns from "./kabanColumns";

const KanbanBoard = ({ tasksByColumns }: { tasksByColumns: any }) => {
    return (
        <div className="kanban-grid">
            <KanbanColumns
                columnsMap={[['A ser Executada', 'scheduled'], ['Executada', 'executed']]}
                tasksByColumns={tasksByColumns} />
        </div>
    );
}

export default KanbanBoard

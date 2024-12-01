import * as React from "react";
import '../css/KanbanBoard.css';
import KanbanColumns from "./kabanColumns";

const KanbanBoard = ({ search, filter }: { search: string, filter: { target: string, value: string } }) => {
    return (
        <div className="kanban-grid">
            <KanbanColumns
                search={search}
                filter={filter}
                columnsMap={[['A ser Executada', 'scheduled'], ['Executada', 'executed']]} />
        </div>
    );
}

export default KanbanBoard

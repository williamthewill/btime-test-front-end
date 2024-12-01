import * as React from "react";
import '../css/KanbanBoard.css';
import KanbanColumns from "./kabanColumns";

const KanbanBoard = ({ search }: { search: string }) => {
    return (
        <div className="kanban-grid">
            <KanbanColumns
                search={search}
                columnsMap={[['A ser Executada', 'scheduled'], ['Executada', 'executed']]} />
        </div>
    );
}

export default KanbanBoard

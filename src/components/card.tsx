import { useState } from 'react';
import Modal from './modal';
import ContentModal from './contentModal';

type task = {
    id: number,
    title: string;
    priority: string;
    dateExecution: string;
    localExecution: string;
    description: string;
    imagem: string;
}

const Card = ({ task }: { task: task }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = (e: Event) => {
        setShowModal(false)
        e.stopPropagation();
    }

    return (
        <div className="task-container overflow-hidden rounded-lg bg-white shadow" onClick={handleShowModal}>
            <Modal
                taskId={task.id}
                isShow={showModal}
                onClose={handleCloseModal}
            >
                <ContentModal
                    title={task.title}
                    description={task.description}
                    img={task.imagem} />


            </Modal>
            <div className={`${task.priority} task-header px-4 py-5 sm:px-6`}>
                <p className="title">{task.title}</p>
            </div >
            <div className="task-description-container bg-gray-50 px-4 py-5 sm:p-6">
                <p className="priority">{task.priority}</p>
                <p className="date-execution">{task.dateExecution}</p>
                <p className="local-execution">{task.localExecution}</p>
            </div>
        </div >
    );
}

export default Card
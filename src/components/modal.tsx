import { useState } from 'react';
import '../css/Modal.css'

const Modal = ({ taskId, isShow, onClose, children }: { taskId: number, isShow: boolean, onClose: any, children: any }) => {
    const style = {
        display: isShow ? 'block' : 'none'
    }

    return (
        <div id={`${taskId}`} className="modal fixed inset-0 bg-gray-500/75 transition-opacity" style={style}>
            <div className="modal-content-container fixed inset-60 z-10 overflow-y-auto p-10">
                <span className="close" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div >)
}
export default Modal
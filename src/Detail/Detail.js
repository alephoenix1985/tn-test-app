import React from 'react';
import './Detail.css';

function Detail(props) {
    const task = props.task;
    return (
        <div className='bg-detail-modal'>
            <div className="detail">
                <div>
                    <p>{task.UUID+(task.completedAt?' (Completed)':'')}</p>
                    <p>{task.title}</p>
                </div>
                <div className="buttons">
                    <button onClick={() => props.finishTask(task)}>Complete</button>
                    <button onClick={() => props.onClose()}>Close</button>
                </div>

            </div>
        </div>
    );
}

export default Detail;
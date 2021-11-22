import React, {useEffect} from 'react';
import './List.css';

function List(props) {
    const tasks = props.tasks;

    useEffect(() => {
        document.title = 'TN | Test'
        const icon = document.querySelector('link[rel=icon]')
        icon.setAttribute('href', 'https://truenorth.co/favicon-32x32.png')
    })
    return (
        <div>
            <div className="task-list">
                {tasks.map((t, k) => (
                    <div key={k} className="task-item" onClick={() => props.openDetail(t)}>
                        <div>Task #{k + 1} {(t.completedAt ? '(Completed)' : '')}</div>
                        <div>{t.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;
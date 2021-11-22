import React from 'react';
import './Import.css';

function Import(props) {
    let input;
    return (
        <div className="wrapper">
            <div className='import-box'>
                <div className="input-box">
                    <label htmlFor="inputImport">Number of task to import:</label>
                    <input placeholder="Type number of tasks..." defaultValue={3} id="inputImport" pattern="\d*" ref={(e) => input = e} name="taskNumber" type="number"/>
                </div>
                <button onClick={() => props.importTask(input)}>
                    Import <br/>
                    Tasks
                </button>
            </div>
        </div>
    );
}

export default Import;
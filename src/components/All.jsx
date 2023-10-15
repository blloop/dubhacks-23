import { useState } from 'react';
import Navbar from "./Navbar";
import Create from './Create';

const All = props => {
    const [creating, setCreating] = useState(false);

    function toggleCreate() {
        setCreating(!creating)
    }

    if (creating) {
        return (
            <>
                <div className='page-all'>
                        <button className="addButton"
                            onClick={toggleCreate}>ADD TASK</button>
                        <div className='disable-div'>
                        </div>
                </div>
                <div className='disable-div'></div>
                <Create 
                    addTask={props.addTask}></Create>

                <Navbar
                    idx={props.pageIndex}
                    setIndex={props.setIndex}
                />
            </>
        )
    } else {
        return (
            <>
                <div className='page-all'>
                    <button className="addButton"
                        onClick={toggleCreate}>ADD TASK</button>
                </div>

                <Navbar
                    idx={props.pageIndex}
                    setIndex={props.setIndex}
                />
            </>
        )
    }
}

export default All;
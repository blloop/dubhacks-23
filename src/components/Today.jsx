import Navbar from "./Navbar";

const Today = props => {
    
    return (
        <>
            <div className='page-today'>
                <h1> Today </h1>
            </div>
            <Navbar 
                idx={props.pageIndex}
                setIndex={props.setIndex}
            />
        </>
    )
}

export default Today;
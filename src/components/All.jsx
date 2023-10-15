import Navbar from "./Navbar";

const All = props => {
    return (
        <>
            <div className='page-all'>
                <h1> All </h1>
            </div>
            <Navbar
                idx={props.pageIndex}
                setIndex={props.setIndex}
            />
        </>
    )
}

export default All;
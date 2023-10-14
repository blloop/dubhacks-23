import Navbar from "./Navbar";

const All = props => {
    return (
        <>
            <div>
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
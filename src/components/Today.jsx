import Navbar from "./Navbar";

const Today = props => {
    return (
        <>
            <div>
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
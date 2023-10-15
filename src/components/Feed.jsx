import Navbar from "./Navbar";

const Feed = props => {
    return (
        <>
            <div className='page-feed'>
                <h1> Feed </h1>
            </div>
            <Navbar
                idx={props.pageIndex}
                setIndex={props.setIndex}
            />
        </>
    )
}

export default Feed;
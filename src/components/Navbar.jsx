const Navbar = props => {
    return (
        <div>
            <button
                onClick={() => props.setIndex(0)}
                className={props.idx === 0 ? 'selected' : ''}>
                Today
            </button>
            <button
                onClick={() => props.setIndex(1)}
                className={props.idx === 1 ? 'selected' : ''}>
                All
            </button>
            <button
                onClick={() => props.setIndex(2)}
                className={props.idx === 2 ? 'selected' : ''}>
                Feed
            </button>
        </div>
    )
}

export default Navbar;
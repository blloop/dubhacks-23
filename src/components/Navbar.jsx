const Navbar = props => {
    return (
        <div className='navbar'>
            <button
                onClick={() => props.setIndex(0)}
                className={props.idx === 0 ? 'selected' : ''}>
                TODAY
            </button>
            <button
                onClick={() => props.setIndex(1)}
                className={props.idx === 1 ? 'selected' : ''}>
                ALL
            </button>
            <button
                onClick={() => props.setIndex(2)}
                className={props.idx === 2 ? 'selected' : ''}>
                FEED
            </button>
        </div>
    )
}

export default Navbar;
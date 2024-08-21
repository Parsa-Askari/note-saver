import "../styles/SearchBar.scss"
function SearchBar()
{
    return(
        <>
            <div className='col-3'></div>
            <div className="search col-6">
                <span className="fa fa-search" aria-hidden="true"></span>
                <input type="text" placeholder="Search"></input>
            </div>
            <div className='col-3'></div>
        </>
        
    )
}
export default SearchBar;
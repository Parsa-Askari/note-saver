import "./styles/Header.scss"
function Header({children})
{
    return(
        <header>
            <div className="menu-bar row ">
                {children}
            </div>
        </header>
    )
}
export default Header;
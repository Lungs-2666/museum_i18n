    import './navBar.css';

    const NavBar = () => {
        return (
            <nav className='nav_bar'>
                <p className='nav_logo'> Future </p>

                <div className='nav_items'>
                    <a href=""> Home     </a>
                    <a href=""> Tickets  </a>
                    <a href=""> Exhibits </a>
                </div>
            </nav>
        )
    }

    export default NavBar;
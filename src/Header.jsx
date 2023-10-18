import 
 {BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        {/* <div className='header-right'> */}
            {/* <BsSearch  className='icon'/> */}
            <div className="search_bar">
        <span class="material-symbols-outlined search_icon"><BsSearch  className='icon'/></span>
        
        <input
          className="search_input"
          placeholder="Search "
        />
      </div>
        {/* </div> */}
    </header>
  )
}

export default Header

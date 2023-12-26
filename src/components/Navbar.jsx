import '../style/main.scss'

function Navbar() {

    const navContent = {
      navLogo: 'CatalouGESS',
      navList: [
        'Home','Catalouge','About','Contact'
      ]
    }
    return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <h2>{navContent.navLogo}</h2>
      </div>
      <ul>      
        {navContent.navList.map(content => {
          return <li key={content}><a href="#">{content}</a></li>
        })}
      </ul>
    </div>
    )
}

export default Navbar
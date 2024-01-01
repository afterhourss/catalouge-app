import { catalougeList } from "../assets/data"
import { useState } from "react";

function Catalouge() {
  // prevent list duplication using Set
  const uniqueList = new Set(catalougeList.map(item => item.type));
  const [list, setList] = useState(catalougeList);
  const [active,setActive] = useState('all');

  function handleCategory(selected) {
    const filterType = catalougeList.filter(item => item.type === selected)
    if(selected === 'all'){
      setList(catalougeList)
    } else{
      setList(filterType)
    }
    setActive(selected)
  }

  // const change
  return (
    <div className="catalouge">
      <h1>Our Catalouge</h1>
      <div className="catalouge-menu-bar">
        <ul>
        <li className={active === 'all' ? 'active' : ''} onClick={() => handleCategory('all')}>All</li> 
          {[...uniqueList].map(item => {
            return <li className={active === item ? 'active' : ''} onClick={() => handleCategory(item)} key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
          })}
        </ul>
      </div>
        <div className="catalouge-gallery">
          {list.map(item => {
            return <div className="catalouge-item" key={item.id}>
              <img key={item.id} src={item.url} alt="" />
              <h3>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
              <p>{item.desc}</p>
              <p>{'Rp' + item.price}</p>
            </div>
          })}
        </div>
    </div>
  )
}

export default Catalouge
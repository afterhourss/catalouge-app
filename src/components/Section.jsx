import { CgInbox, CgHeart, CgEditShadows } from "react-icons/cg";
function Section() {
  return (
    <div className="section">
      <div className="main-box">
        <h2>Good Quality and Durability</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad repellat esse vel porro recusandae ullam vero ratione itaque qui deleniti quae aperiam magni, tempore in earum at. Mollitia, reprehenderit?</p>
      </div>
      <div className="box1">
        <CgInbox className="icon"/>
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dignissimos quam libero.</p>
      </div>
      <div className="box2">
        <CgHeart className="icon"/>
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dignissimos quam libero.</p>
      </div>
      <div className="box3">
        <CgEditShadows className="icon"/>
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dignissimos quam libero.</p>
      </div>
    </div>
  )
}

export default Section
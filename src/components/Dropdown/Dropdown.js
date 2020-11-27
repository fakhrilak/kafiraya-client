import React from 'react'
import './Dropdown.css'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import {handleLogout} from "../../redux/action/auth"
const Dropdown = ({data,handleLogout}) => {
  return (
   <>
    {data.map((data) => (<div  className="dropdown">
         <li><Link>{data.Judul}</Link></li>
        <div className="dropdown-content">
            <Link to={data.route1}><p>{data.subJudul1}</p></Link>
            <Link to={data.route2}><p>{data.subJudul2}</p></Link>
            <Link to={data.route3}><p>{data.subJudul3}</p></Link>
            <Link to={data.route4}><p>{data.subJudul4}</p></Link>
            <Link to={data.route5}><p>{data.subJudul5}</p></Link>
            <Link to={data.route6}><p>{data.subJudul6}</p></Link>
            {data.route === "logout" ?
            (<Link ><p onClick={()=>handleLogout()}>{data.subJudul}</p>
            </Link>):null}
        </div>  
    </div>))}
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {handleLogout})(Dropdown);

import React,{useEffect,useState} from 'react';
import image from '../assets/images/logo-DH.png';
import { Link, Route,Switch } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import ContentRowTop from './ContentRowTop';
import GenresInDb from './GenresInDb';


function SideBar(){
    const [juegosInfo, setJuegosInfo] = useState({
        count: 0,
        countByCategory: {},
        products: [],
    })
    async function fetchApi(){
        let respuesta = await fetch("/api/product")
        let data = await respuesta.json()
        setJuegosInfo(data)
    }
    useEffect(()=>{ 
       fetchApi()

    },[])
    console.log(juegosInfo)
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/contentRowTop">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to ="/genresInDB">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Switch>
                <Route path="/" exact={true} ><ContentWrapper juegosInfo = {juegosInfo}></ContentWrapper></Route>
                <Route path="/contentRowTop" exact={true} ><ContentRowTop juegosInfo = {juegosInfo}/></Route>
                <Route path="/genresInDB" exact={true} ><GenresInDb generos= {juegosInfo.countByCategory}/></Route>
            </Switch>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;
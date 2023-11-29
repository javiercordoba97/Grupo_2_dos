import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg'
import Cards from './Cards'
import GenresInDb from './GenresInDb';
let moviesInDB = {
    titulo: 'Movies in Data Base',
    color: 'primary', 
    cantidad: 21,
    icono: 'fa-clipboard-list'
}
let totalAwards = {
    titulo:' Total awards', 
    color:'success', 
    cantidad: '79',
    icono:'fa-award'
}
let actorsQuantity = {
    titulo:'Actors quantity' ,
    color:'warning',
    cantidad:'49',
    icono:'fa-user-check'
}
let cartProps = [moviesInDB, totalAwards, actorsQuantity];
function ContentRowTop({juegosInfo}){
	if (juegosInfo.count > 0 ){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
						<Cards datos = {cartProps}/>
						

						
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto en DB</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>{juegosInfo.products[juegosInfo.products.length -1].detail}</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View juego detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb generos= {juegosInfo.countByCategory}/>
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )}

}
export default ContentRowTop;
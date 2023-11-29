import React,{Component} from 'react'
import Genre from './Genre' 
function GenresInDb ({generos}){
console.log(generos)
if (typeof generos == "object"){
    return(
        <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="row">
										{Object.keys(generos).map((genero,i)=> {
                                            return (<Genre key={genero+i} genero={genero}/>) 
                                        })}

									</div>
								</div>
							</div>
						</div>
    )
}


}
export default GenresInDb
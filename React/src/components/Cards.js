import React from 'react'
function Cards(props) {
    return (
        props.datos.map((dato,i)=>
        <div className="col-md-4 mb-4" key={dato.titulo+i}>
            <div className={`card border-left-${dato.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${dato.color} text-uppercase mb-1`}>{dato.titulo}
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{dato.cantidad}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${dato.icono} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
        
    )
}


export default Cards
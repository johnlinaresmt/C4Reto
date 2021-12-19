import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
       return( 
        <div className="md:w-2/6 xl:w-1/5 bg-green-800">
            <div className="p-6">
            <img src="https://res.cloudinary.com/db8vy6omm/image/upload/v1639950260/Contra_Corriente_pnqi4t.png"></img>
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Contra Corriente LTDA</p>
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Empresa de Tecnologia</p>

                <p className="mt-3 text-gray-600">Lista de Opciones</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/">Login</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;
import React from "react";
import "./contacto.css"

const Contacto = () => {
    return (
        <div className="contacto px-4">
            <div class="form-floating-sm mb-1 mt-2">
                <input type="text" class="form-control" id="email" placeholder="Nombre" name="nombre"/>
            </div>
            <div class="form-floating-sm mt-2 mb-2">
                <input type="text" class="form-control" id="pwd" placeholder="Email" name="email"/>
            </div>
            <div class="form-floating-sm mt-2 mb-2">
                <input type="text" class="form-control" id="asunto" placeholder="Asunto" name="asunto"/>
            </div>
            <div class="form-floating-sm mt-2 mb-2">
                <textarea class="form-control" id="comment" name="text" placeholder="Tus comentarios aqui!!!"></textarea>      
            </div>
            <div class="col d-md-flex justify-content-around">
                <button type="submit" className="btn btn-outline-dark btn-lg me-md-2">Enviar...</button>
                <p className="pt-3">Gracias por tu mensaje!!!</p>
            </div>
        </div>
    ); 
};
export default Contacto;

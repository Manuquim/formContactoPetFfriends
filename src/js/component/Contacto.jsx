import React from "react";
import "/workspace/formContactoPetFfriends/src/styles/contacto.css"

const Contacto = () => {
    return (
        <div>
            <div class="form-floating mb-1 mt-2">
                <input type="text" class="form-control" id="email" placeholder="Nombre" name="nombre"/>
                <label for="email">Nombre</label>
            </div>
            <div class="form-floating mt-3 mb-3">
                <input type="text" class="form-control" id="pwd" placeholder="Email" name="email"/>
                <label for="pwd">Email</label>
            </div>
            <div class="form-floating mt-3 mb-3">
                <input type="text" class="form-control" id="asunto" placeholder="Asunto" name="asunto"/>
                <label for="asunto">Asunto</label>
            </div>
            <div class="form-floating mt-3 mb-3">
                <textarea class="form-control" id="comment" name="text" placeholder="Comment goes here"></textarea>
                <label for="comment">Mensaje</label>
            </div>
            <div class="col d-md-flex justify-content-md-end">
                <button type="submit" class="btn btn-warning me-md-2">Ingresar</button>
            </div>
            <div class="col d-md-flex justify-content-md-end">
                <p>Gracias por tu mensaje!!!</p>
            </div>
        </div>
    );
};
export default Contacto;

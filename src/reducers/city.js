import { SET_CITY } from './../actions';

export const city = (state = {}, action) => {
    /* Mantener los users con una unica acción */
    switch(action.type){
        case SET_CITY:
    /* Generemos una copia del estado con una propiedad alterada: generar estado inmutable
                que va inmutando con la realización de acciones */
            return action.payload 
            /*  Se hace un desgloce de la propiedad original */
        default:
            return state;  
    }
}

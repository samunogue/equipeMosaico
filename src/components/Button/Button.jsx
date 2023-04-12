import './Button.css'
import copy from "copy-to-clipboard"; 

export const Button = ({texto}) =>{
    const copiarQrCode = (e) =>{
        const codigo = "00020101021126360014br.gov.bcb.pix0114+55859979695285204000053039865802BR5919VICTOR DE V MARTINS6009FORTALEZA62070503***6304076A"
        copy(codigo);
        e.target.innerHTML = "Chave copiada"
        e.target.classList.add("onClick-button")
        setTimeout(() =>{
            e.target.innerHTML = texto
            e.target.classList.remove("onClick-button")
        }, 5000);
    }
    return(
        <button className="button-copiar-pix" onClick={copiarQrCode}>
            {texto}
        </button>
    )
}
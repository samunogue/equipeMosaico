import icone from '../../assets/iconeMosaico.png'
import tituloLogo from '../../assets/tituloLogo.png'
import './Logo.css'

export const Logo = () =>{
    return(
        <div className='box-logo'>
            <img src={icone} alt=""  className='icone-logo'/>
            <img src={tituloLogo} alt="" className='titulo-logo' />
        </div>
    )
}
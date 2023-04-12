import telefone from '../../assets/telephone.png'
import user from '../../assets/user.png'
import './Dados.css'

export const Dados = () =>{
    return(
        <div className="section-dados">
            <h1 className="titulo-dados">Faça sua doação</h1>
            <div className="box-dados">
                <img src={telefone} className="icone-dados"></img>
                <p>85 997969528</p>
            </div>
            <div className="box-dados">
                <img src={user} className="icone-dados"></img>
                <p>Victor de Vasconcelos Martins</p>
            </div>
        </div>
    )
}
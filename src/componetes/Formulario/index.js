import CampoTexto from "../CampoTexto";
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css'
export default function Formulario() {
    const item=[
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    return(
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar um usuario</h2>
                <CampoTexto label="Nome" placeholder="Digite um nome"/>
                <CampoTexto label="Cargo" placeholder="Digite um cargo"/>
                <CampoTexto label="Imagen"placeholder="Digite a url de uma imagem"/>
                <ListaSuspensa label="Times" itens={item}/>
            </form>
        </section>
    )
}
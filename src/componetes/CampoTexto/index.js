import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderEditada = `${props.placeholder}...`
    return(
        <div className="Campo-Texto">
            <label>
            {props.label}
            </label>
            <input placeholder={placeholderEditada}/>
        </div>
    )
}         
export default CampoTexto
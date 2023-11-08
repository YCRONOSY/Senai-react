import './CampoTexto.css'

const CampoTexto = (Props) => {
    return(
        <div className="Campo-Texto">
            <label>
            {Props.label}
            </label>
            <input placeholder={placeholderEditada}/>
        </div>
    )
}         
export default CampoTexto
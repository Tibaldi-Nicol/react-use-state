function LinguaggioCard ({linguaggio}){
    if(!linguaggio){
        return <p>Nessun linguaggio selezionato</p>
    }

    return(
        <div>
            <h2>{linguaggio.nome}</h2>
            <p>{linguaggio.description}</p>
        </div>
    )
}

export default LinguaggioCard;
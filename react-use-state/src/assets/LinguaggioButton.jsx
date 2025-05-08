function LinguaggioButton({ linguaggio, onClick, isActive}){
    return(
        <button>
            onClick={onClick}{linguaggio.nome}
        </button>
    )
}
export default LinguaggioButton;
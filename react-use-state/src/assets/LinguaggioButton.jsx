function LinguaggioButton({ linguaggio, onClick, isActive }) {
    return (
     
      <button
        onClick={onClick}
        className={`button ${isActive ? 'active' : ''}`}
      >
        {linguaggio.title}
      </button>
 
    );
  }
  
  export default LinguaggioButton;
  
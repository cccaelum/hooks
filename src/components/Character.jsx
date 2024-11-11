const Character = ({ nombre, imagen }) => (
    <div>
      <p>{nombre}</p>
      <img src={imagen} alt={nombre} />
    </div>
  );
  
  export default Character;
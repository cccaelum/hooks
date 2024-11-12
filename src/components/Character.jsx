const Character = ({ nombre, imagen, title }) => (
    <div>
      <h2>{title}</h2>
      <p>{nombre}</p>
      <img src={imagen} alt={nombre} />
    </div>
  );
  
  export default Character;
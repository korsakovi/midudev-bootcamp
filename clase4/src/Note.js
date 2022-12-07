export const Note = (props) => {
 const { content, date, categories = [] } = props;

 return (
  <ul>
   <li>
    <p>{content}</p>
    <small>{date}</small>
    {categories.length === 0 ? (
     <p>Sin categorias</p>
    ) : (
     categories.map((category) => (
      <ul key={category}>
       <li>{category}</li>
      </ul>
     ))
    )}
   </li>
  </ul>
 );
};

const Description = (props) => {
 console.log(props);
 return <h2 style={{ color: props.color }}>{props.text}</h2>;
};

export default Description;

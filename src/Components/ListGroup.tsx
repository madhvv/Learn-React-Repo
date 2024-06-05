function ListGroup() {
  const items = ["New York", "San Franciso", "Tokyo", "London", "Paris"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className="list-group-item"
          key={item}
          onClick={() => console.log(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;

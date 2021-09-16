import AddTodo from "./AddTodo";

const Header = ({title,add}) => {
  return (
    <header className="header">
      <h2>{title}</h2>
      <AddTodo add={add}/>
    </header>
  );
};

export default Header;

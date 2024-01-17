import ListItem from "./ListItem";
import TextName from "./TextName";

function App() {
  const items = ["Item 1","Item 2","Item 3","Item 4","Item 5"];
  const array = ["Magnum","Magda","Luciana","Luana","Biscoito","Brownie"];
  return (
    <ul>
      {items.map((item,index) => ( 
      <ListItem key={index} text={item} />
      ))}
      {array.map((nome,index) => ( 
      <TextName key={index} texto={nome} />
      ))}
    </ul>
    
  );
}

export default App;

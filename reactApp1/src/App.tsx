import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "Alaska", "South Africa", "Greece", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>Hello World</Alert>
      <Button colour="secondary" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

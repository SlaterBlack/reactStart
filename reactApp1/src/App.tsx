import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "Alaska", "South Africa", "Greece", "Paris"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button colour="secondary" onClick={() => setAlertVisibility(true)}>
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

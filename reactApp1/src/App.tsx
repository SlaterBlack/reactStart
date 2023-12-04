import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import LikeIcon from "./components/LikeIcon";

function App() {
  let items = ["New York", "Alaska", "South Africa", "Greece", "Paris"];
  let like = "grey";
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button colour="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <LikeIcon
        onClick={() => {
          console.log("clicked");
        }}
      />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

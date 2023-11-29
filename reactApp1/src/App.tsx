/*  Content to add a list to a page

  import ListGroup from "./components/ListGroup";

  let items = ["New York", "Alaska", "South Africa", "Greece", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
*/

import Alert from "./components/alert";

function App() {
  return (
    <div>
      <Alert>Hello World</Alert>
    </div>
  );
}

export default App;

import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import LikeIcon from "./components/LikeIcon";
import NavBar from "./components/NavBar";
import Cart from "./components/cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/form";
import "./components/index.css";

function App() {
  let items = ["New York", "Alaska", "South Africa", "Greece", "Paris"];
  let [view, setview] = useState(false);
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <h1>
        <b>ReactApp1</b>
      </h1>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClick={() => setCartItems([])}></Cart>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Make it yellow</Alert>
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
        heading="City List"
        onSelectItem={handleSelectItem}
      />
      <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, odit!
        Iste alias neque sapiente esse nostrum voluptate dolore fugit
        dignissimos id sequi praesentium fugiat fuga adipisci cumque
        necessitatibus ducimus, expedita ea porro veniam quidem sunt rem.
        Architecto, exercitationem necessitatibus. Incidunt quidem fugiat odit?
        Beatae suscipit, animi tenetur provident eos adipisci explicabo
        praesentium ipsum quos. Provident, repellat quam magnam minima et libero
        quia voluptatibus maiores odio similique a doloribus? Debitis fuga
        reprehenderit incidunt laborum velit eligendi omnis laudantium? Dolor
        minus distinctio recusandae, quam sint voluptatibus quidem sunt? Tempore
        fuga asperiores corrupti modi necessitatibus deleniti ab, illo cum ipsa,
        fugiat animi mollitia!
      </ExpandableText>
      <Form></Form>
    </div>
  );
}

export default App;

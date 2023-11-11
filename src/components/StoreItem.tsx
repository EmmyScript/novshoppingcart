import { Button, Card, Row } from "react-bootstrap";
import { CurrencyFormat } from "../utilities/CurrencyFormat";
import { useShoppingCart } from "../context/ShoppingCartContext";
import{BsAlarm} from "react-icons/bs"

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl,  }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  console.log(cartItems)
  return (
    <Row>
    <Card className="h-100">
      <h3 className="text-center mb-4"> <span><BsAlarm/> For Shopping pls</span>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
</h3>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{CurrencyFormat(price)}</span>
        </Card.Title>
        

        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100"onClick={() => increaseCartQuantity(id)} >+ Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-item-center justify-content-center"
                style={{ gap: ".5rem" }}
              > 
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                
                <div> <span className="fs-3">{quantity}</span></div>

                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">
                REmove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
    </Row>
  );
}

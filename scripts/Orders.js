export const Orders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=upgrade&_expand=wheel"
  );
  const orders = await fetchResponse.json();

  let ordersHtml = "";
  const ordersArray = orders.map((order) => {
    const price =
      order.paint.price +
      order.interior.price +
      order.upgrade.price +
      order.wheel.price;
    return `<div>
        <h3 name='orders' value='${order.id}' />Order# ${order.id}- A custom ${
      order.paint.color
    } car with ${order.interior.fabric} Interior,
        ${order.upgrade.option} Technology Package, and finally...unreal ${
      order.wheel.type
    } Wheels! Coming to a Grand Total Price of ${price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}. 
        </div>`;
  });
  ordersHtml += ordersArray.join("");
  return ordersHtml;
};

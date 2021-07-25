import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "P1",
    price: 6,
    title: "My First Book",
    description: "The First book i ever wrote",
  },
  {
    id: "P2",
    price: 6,
    title: "My Ssecond Book",
    description: "The Ssecond book i ever wrote",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
      return    <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        })}
      </ul>
      ;
    </section>
  );
};

export default Products;

import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: "30px",
        marginBottom: "60px",
        borderRadius: "20px",
      }}
    >
      {items.map((item) => {
        return (
          <div key={item.id} style={{ margin: "10px" }}>
            <ProductCard item={item} />
          </div>
        );
      })}
    </section>
  );
};

export default ItemList;

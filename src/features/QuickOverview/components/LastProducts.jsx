import { Link } from "react-router";
import { products } from "../../../data/products";
const LastProducts = () => {
  return (
    <article className="panel">
      <header className="panel-header">
        <h2>آخرین محصولات</h2>
        <Link to="/dashboard/products">صفحه محصولات ←</Link>
      </header>
      <div className="mini-products">
         {products.slice(-3).map((product) => (
          <div className="mini-product" key={product.id}>
            <img src={product.img} alt={product.title} />
            <div className="mini-product-info">
              <strong>{product.title}</strong>
              <span>موجودی: {product.entity} عدد</span>
            </div>
            <span className="price">{product.price.toLocaleString("fa-IR")} تومان</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default LastProducts;

import LastProducts from "./components/LastProducts";
import LastUsers from "./components/LastUsers";

const QuickOverview = () => {
  return (
    <section className="quick-grid">
      <LastProducts />
      <LastUsers />
    </section>
  );
};

export default QuickOverview;
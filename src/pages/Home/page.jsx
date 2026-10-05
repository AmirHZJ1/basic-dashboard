import { Link } from "react-router";
import { HiPlus } from "react-icons/hi2";
import Summaries from "../../features/Summaries/Summaries";
import DetailsCharts from "../../features/DetailsCharts/DetailsCharts";
import QuickOverview from "../../features/QuickOverview/QuickOverview";
const Home = () => {
  return (
    <div className="content">
      <section className="page-heading">
        <div>
          <h1>داشبورد</h1>
          <p>خلاصه‌ای از وضعیت فروشگاه شما</p>
        </div>
        <Link className="button button-primary" to="/dashboard/products">
          ایجاد محصول <HiPlus />
        </Link>
      </section>
      <Summaries />
      <div className="dashboard-stack">
        <DetailsCharts />
        <QuickOverview />
      </div>
    </div>
  );
};

export default Home;

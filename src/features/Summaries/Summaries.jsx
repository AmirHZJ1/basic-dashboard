import SummaryCard from "./Components/SummaryCard";
import { generateSummaries } from "../../utils/home";

const Summaries = () => {
const summariesData = generateSummaries({
  productsLength:  44,
  usersLength: 444 ,
  ticketsLength:32 ,
  
  adminsLength: 4 ,
});


  return (
    <section className="summary-grid">
    {
        summariesData.map((summaryData)=>(


            <SummaryCard key={summaryData.id} {...summaryData}/>
        ))
    }
        </section>
  );
};

export default Summaries;
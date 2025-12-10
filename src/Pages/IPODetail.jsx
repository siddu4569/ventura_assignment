import { useParams } from "react-router-dom";
import { IPO_DATA } from "../utils/constant";   
import CompanyInfo from "../components/IPODetails/CompanyInfo";
// import Footer from '../../components/Footer';

const slugify = (name) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and").replace(/\./g,"").replace(/,/g,"");

function IPODetail() {
  const { companyID } = useParams();  


  const allCompanies = [
    ...IPO_DATA.Upcoming,
    ...IPO_DATA.Closed,
    ...IPO_DATA.Listed,
    ...IPO_DATA.openIPO
  ];

  const companyInfo = allCompanies.find(
    (company) => slugify(company.name) === companyID
  );

  if (!companyInfo)
    return <h1 className="text-center mt-10 text-red-600">Company Not Found</h1>;

  return (
    <div className="relative flex flex-col gap-3 min-h-screen">
      <CompanyInfo companyInfo={companyInfo} />
      
    </div>
  );
}

export default IPODetail;

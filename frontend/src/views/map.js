import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SalaryCharts from "../components/map";
import { useEffect } from "react";


const JobsMap = () => {
    const [searchData, setSearchData] = useState(null);

    // Search results
    const responseSearch = fetch("/cached_responses/search_results.json", {
        method: "GET",
    }).then((response) => response.json())
    .catch((error) => console.error(error));
  
        console.log("Response:", responseSearch);
        useEffect(()=>{
            setSearchData(responseSearch);
        }, [])

    return (
        <>
            {/* <SalaryCharts {...searchData}/> */}
            {searchData && <SalaryCharts {...searchData} />}
        </>
    )
}

export default JobsMap;
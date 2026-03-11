import React from 'react';
import Linechart from "../components/LineChart";
import Barchart from "@/components/BarChart";
import Areachart from "@/components/AreaChart";

export default function Welcome() {
  return (
    <div> 
      <div>My very first data visualization</div>

 <Linechart />
 <Barchart />
 <Areachart />
    </div>


  );
}
import "./App.css";
import { ArrowDown } from "./componets/icons/ArrowDown/ArrowDown";
import { Games } from "./componets/icons/Games/Games";
import { HallOfFame } from "./componets/icons/HallOfFame/HallOfFame";
import { LiveDealers } from "./componets/icons/LiveDealers/LiveDealers";
import { Lottery } from "./componets/icons/Lottery/Lottery";
import { Payment } from "./componets/icons/Payment/Payment";
import { Promotions } from "./componets/icons/Promotions/Promotions";
import { Search } from "./componets/icons/Search/Search";
import { Support } from "./componets/icons/Support/Support";
import { Tournaments } from "./componets/icons/Tournaments/Tournaments";
import { Vip } from "./componets/icons/Vip/Vip";

function App() {
  return (
    <div className="App">
      <ArrowDown></ArrowDown>

      <Games></Games>
      <Promotions></Promotions>
      <Tournaments></Tournaments>
      <LiveDealers></LiveDealers>
      <Lottery></Lottery>
      <HallOfFame></HallOfFame>
      <Vip></Vip>
      <Payment></Payment>
      <Support></Support> adad

      <Search></Search>
    </div>
  );
}

export default App;

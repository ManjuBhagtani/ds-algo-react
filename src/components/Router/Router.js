import {Route, Routes } from 'react-router-dom';
import Home from '../../components/Home/Home';
import PrefixSum from '../../components/Arrays/PrefixSum/PrefixSum';
import CarryForward from '../../components/Arrays/CarryForward/CarryForward';
import Subarrays from '../../components/Arrays/Subarrays/Subarrays';
import SubsequencesAndSubsets from '../Arrays/SubsequencesAndSubsets/SubsequencesAndSubsets';
import Hashing from '../Hashing/Hashing';
import Strings from '../Strings/Strings';
import BitManipulation from '../BitManipulation/BitManipulation';

function Router() {
  return (
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/arrays/prefixSum" element={<PrefixSum/>}/>
          <Route exact path="/arrays/carryForward" element={<CarryForward/>}/>
          <Route exact path="/arrays/subarrays" element={<Subarrays/>}/>
          <Route exact path="/bitManipulation" element={<BitManipulation/>}/>
          <Route exact path="/arrays/subsequencesAndSubsets" element={<SubsequencesAndSubsets/>}/>
          <Route exact path="/hasing/hashing" element={<Hashing/>}/>
          <Route exact path="/strings/strings" element={<Strings/>}/>
        </Routes>
  );
}

export default Router;
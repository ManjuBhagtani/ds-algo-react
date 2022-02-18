import React from 'react';
import UIConstants from '../Constants/UIConstants';
import ProblemContainer from '../Common/ProblemContainer';

function Hashing(){
        return(
            <div className="p-3">
                <ProblemContainer
                    problems={UIConstants.problems.HASHING}
                />
            </div>
        );
}
export default Hashing;
import React from 'react';
import UIConstants from '../../Constants/UIConstants';
import ProblemContainer from '../../Common/ProblemContainer';

function Subarrays(){
        return(
            <div className="p-3">
                <ProblemContainer
                    problems={UIConstants.problems.SUBARRAYS}
                />
            </div>
        );
}

export default Subarrays;
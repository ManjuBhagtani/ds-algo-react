import React from 'react';
import UIConstants from '../../Constants/UIConstants';
import ProblemContainer from '../../Common/ProblemContainer';

function CarryForward(){
        return(
            <div className="p-3">
                <ProblemContainer
                    problems={UIConstants.problems.CARRYFORWARD}
                />
            </div>
        );
}
export default CarryForward;
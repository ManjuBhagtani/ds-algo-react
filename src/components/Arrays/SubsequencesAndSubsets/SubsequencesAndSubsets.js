import React from 'react';
import UIConstants from '../../Constants/UIConstants';
import ProblemContainer from '../../Common/ProblemContainer';

function SubsequencesAndSubsets(){
        return(
            <div className="p-3">
                <ProblemContainer
                    problems={UIConstants.problems.SUBSEQUENCESANDSUBSETS}
                />
            </div>
        );
}

export default SubsequencesAndSubsets;
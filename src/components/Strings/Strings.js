import React from 'react';
import UIConstants from '../Constants/UIConstants';
import ProblemContainer from '../Common/ProblemContainer';

function Strings(){
        return(
            <div className="p-3">
                <ProblemContainer
                    problems={UIConstants.problems.STRINGS}
                />
            </div>
        );
}

export default Strings;
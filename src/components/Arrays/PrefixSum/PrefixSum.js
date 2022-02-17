import React from 'react';
import UIConstants from '../../Constants/UIConstants';
import CommonInfoContainer from '../../Common/CommonInfoContainer';
import ProblemContainer from '../../Common/ProblemContainer';

function PrefixSum(){
        return(
            <div className="p-3">
                <CommonInfoContainer
                    topicName={UIConstants.topicNames.PREFIXSUM}
                    topicDescription={UIConstants.topicDescriptions.PREFIXSUM}
                />
                <ProblemContainer
                    problems={UIConstants.problems.PREFIXSUM}
                />
            </div>
        );
}
export default PrefixSum;
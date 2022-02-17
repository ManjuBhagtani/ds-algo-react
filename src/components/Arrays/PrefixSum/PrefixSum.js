import React from 'react';
import UIConstants from '../../Constants/UIConstants';
import CommonInfoContainer from '../../Common/CommonInfoContainer';

function PrefixSum(){
        return(
            <CommonInfoContainer
                topicName={UIConstants.topicNames.PREFIXSUM}
                topicDescription={UIConstants.topicDescriptions.PREFIXSUM}
            />
        );
}
export default PrefixSum;
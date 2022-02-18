import React from 'react';
import UIConstants from '../../Constants/UIConstants';
import CommonInfoContainer from '../../Common/CommonInfoContainer';
import ProblemContainer from '../../Common/ProblemContainer';
import NotesFile from '../../../assets/Arrays__Prefix_Sum..pdf';

function PrefixSum(){
        return(
            <div className="p-3">
                <CommonInfoContainer
                    topicName={UIConstants.topicNames.PREFIXSUM}
                    topicDescription={UIConstants.topicDescriptions.PREFIXSUM}
                    notesFileName={UIConstants.notesFileNames.PREFIXSUM}
                    notesFile={NotesFile}
                />
                <ProblemContainer
                    problems={UIConstants.problems.PREFIXSUM}
                />
            </div>
        );
}
export default PrefixSum;
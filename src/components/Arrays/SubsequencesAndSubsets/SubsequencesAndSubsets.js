import React from 'react';
import UIConstants from '../../Constants/UIConstants';
import ProblemContainer from '../../Common/ProblemContainer';
import CommonInfoContainer from '../../Common/CommonInfoContainer';
import NotesFile from '../../../assets/Subsequences_and_Subset.pdf';

function SubsequencesAndSubsets(){
        return(
            <div className="p-3">
                <CommonInfoContainer
                    topicName={UIConstants.topicNames.SUBSEQUENCESANDSUBSETS}
                    //topicDescription={UIConstants.topicDescriptions.SUBARRAYS}
                    notesFileName={UIConstants.notesFileNames.SUBSEQUENCESANDSUBSETS}
                    notesFile={NotesFile}
                />
                <ProblemContainer
                    problems={UIConstants.problems.SUBSEQUENCESANDSUBSETS}
                />
            </div>
        );
}

export default SubsequencesAndSubsets;
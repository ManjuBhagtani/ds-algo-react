import React from 'react';
import UIConstants from '../../Constants/UIConstants';
import ProblemContainer from '../../Common/ProblemContainer';
import CommonInfoContainer from '../../Common/CommonInfoContainer';
import NotesFile from '../../../assets/Strings_basics.pdf';

function CarryForward(){
        return(
            <div className="p-3">
                <CommonInfoContainer
                    topicName={UIConstants.topicNames.CARRYFORWARD}
                    //topicDescription={UIConstants.topicDescriptions.CARRYFORWARD}
                    notesFileName={UIConstants.notesFileNames.CARRYFORWARD}
                    notesFile={NotesFile}
                />
                <ProblemContainer
                    problems={UIConstants.problems.CARRYFORWARD}
                />
            </div>
        );
}
export default CarryForward;
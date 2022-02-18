import React from 'react';
import UIConstants from '../../Constants/UIConstants';
import ProblemContainer from '../../Common/ProblemContainer';
import CommonInfoContainer from '../../Common/CommonInfoContainer';
import NotesFile from '../../../assets/Arrays_Subarrays.pdf';

function Subarrays(){
        return(
            <div className="p-3">
                <CommonInfoContainer
                    topicName={UIConstants.topicNames.SUBARRAYS}
                    //topicDescription={UIConstants.topicDescriptions.SUBARRAYS}
                    notesFileName={UIConstants.notesFileNames.SUBARRAYS}
                    notesFile={NotesFile}
                />
                <ProblemContainer
                    problems={UIConstants.problems.SUBARRAYS}
                />
            </div>
        );
}

export default Subarrays;
import React from 'react';
import UIConstants from '../Constants/UIConstants';
import ProblemContainer from '../Common/ProblemContainer';
import CommonInfoContainer from '../Common/CommonInfoContainer';
import NotesFile from '../../assets/Hashing_1.pdf';

function Hashing(){
        return(
            <div className="p-3">
                <CommonInfoContainer
                    topicName={UIConstants.topicNames.HASHING}
                    //topicDescription={UIConstants.topicDescriptions.HASHING}
                    notesFileName={UIConstants.notesFileNames.HASHING}
                    notesFile={NotesFile}
                />
                <ProblemContainer
                    problems={UIConstants.problems.HASHING}
                />
            </div>
        );
}
export default Hashing;
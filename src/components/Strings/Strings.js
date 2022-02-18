import React from 'react';
import UIConstants from '../Constants/UIConstants';
import ProblemContainer from '../Common/ProblemContainer';
import CommonInfoContainer from '../Common/CommonInfoContainer';
import NotesFile from '../../assets/Strings_basics.pdf';

function Strings(){
        return(
            <div className="p-3">
                <CommonInfoContainer
                    topicName={UIConstants.topicNames.STRINGS}
                    //topicDescription={UIConstants.topicDescriptions.STRINGS}
                    notesFileName={UIConstants.notesFileNames.STRINGS}
                    notesFile={NotesFile}
                />
                <ProblemContainer
                    problems={UIConstants.problems.STRINGS}
                />
            </div>
        );
}

export default Strings;
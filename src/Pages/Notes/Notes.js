import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { useDispatch, useSelector } from "react-redux"
import { add1 } from "../../redux/reducers/notesData/notesData"
import { deleteNote } from "../../redux/reducers/notesData/notesData"
import { TiDelete } from "react-icons/ti";
import "./Notes.css"
import { useState } from "react"


const Notes = () => {

    const [saveClick, setSaveClick] = useState(false);
    const [note, setNote] = useState("");
    const [noteHeader, setNoteHeader] = useState("");

    const dispatch = useDispatch();
    const notes = useSelector((state) => state.noteD.namee);

    console.log(notes)

    const handleNoteSave = () => {
        dispatch(add1({ note: { key: Date.now(), noteHeader, note } }));
        setSaveClick(false);
        setNoteHeader("");
        setNote("");
    };

    const handleNoteDelete = (key) => {
        dispatch(deleteNote({ key }));
    };

    function noteSaveBtn() {
        setSaveClick(!saveClick)
    }

    function noSaveNote() {
        setSaveClick(!saveClick)
    }

    return (
        <>
            <div className="notesContainer">
                <Header />
                <div className="notesCount">
                    <div className="notesHeaderDesDiv">
                        <span className="notesHeaderDes">You can write and save your notes in this section.</span>
                    </div>
                    <div className="notesMainDiv">

                        <div className="getNoteSection">
                            <div className="getNoteHeaderInputDiv">
                                <label className="headerInputLabel">set your Note Header</label>
                                <input type="text" className="getNoteHeaderInput" onChange={(e) => setNoteHeader(e.target.value)} />
                            </div>
                            <div className="getNoteInputDiv">
                                <div className="noteLabelDiv">
                                    <label className="noteLabel">set Your Note : </label>
                                </div>
                                <textarea className="getNoteInput" onChange={(e) => setNote(e.target.value)} />
                                <div className="noteSaveBtnDiv">
                                    <button className={`noteSaveBtn ${saveClick ? "clickedSave" : ""}`} onClick={noteSaveBtn}>Save</button>
                                    <div className={`yesNoBtnsDiv ${saveClick ? "btnsBlock" : ""}`}>
                                        <span className="saveQuestionSpan">Are you sure to save the note?</span>
                                        <button className="noteSaveYesBtn" onClick={handleNoteSave}>Yes</button>
                                        <button className="noteSaveYesBtn2" onClick={noSaveNote}>no</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="saveNotesSection">
                            {notes.map((item) => (
                                <div className="noteDiv" key={item.key}>
                                    <div className="noteHeaderSaveDiv">
                                        <span className="noteHeader">{item.noteHeader}</span>
                                        <TiDelete
                                            className="deleteNoteIcon"
                                            onClick={() => handleNoteDelete(item.key)}
                                        />
                                    </div>
                                    <div className="noteDesSaveDiv">
                                        <span className="notenoteNote">{item.note}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Notes
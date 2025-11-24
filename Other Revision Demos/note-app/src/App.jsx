/* eslint-disable react-hooks/set-state-in-effect */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, settextareaValue] = useState("");
  const [currNote, setcurrNote] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("myNotes"));
    if (storedNotes) {
      setcurrNote(storedNotes);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("myNotes", JSON.stringify(currNote));
    }
  }, [currNote, isLoaded]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const addNewNote = [
      ...currNote,
      { id: Date.now(), inputValue, textareaValue },
    ];

    setcurrNote(addNewNote);

    setInputValue("");
    settextareaValue("");
  };

  const inputValHandler = (e) => {
    setInputValue(e.target.value);
  };

  const detailsValHander = (e) => {
    settextareaValue(e.target.value);
  };

  const deleteNoteHandler = (currentId) => {
    const updatedNotes = currNote.filter(
      (noteItem) => noteItem.id !== currentId
    );
    setcurrNote(updatedNotes);
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">My Notes</h1>

        {/* Note Input Form */}
        <form
          className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
          onSubmit={(e) => {
            formSubmitHandler(e);
          }}
        >
          <input
            type="text"
            placeholder="Write Note Heading Here"
            className="w-full px-4 py-2 mb-4 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={inputValue}
            onChange={inputValHandler}
          />
          <textarea
            placeholder="Write Note Details Here"
            rows="4"
            className="w-full px-4 py-2 mb-4 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            value={textareaValue}
            onChange={detailsValHander}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer py-2 px-4 rounded-lg transition duration-200"
          >
            Add Note
          </button>
        </form>

        {/* Sample Notes */}
        <div className="space-y-4">
          {currNote.map((noteItem) => (
            <div
              key={noteItem.id}
              className="bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {noteItem.inputValue}
              </h3>
              <p className="text-gray-300 mb-4">{noteItem.textareaValue}</p>

              <button
                type="button"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 cursor-pointer rounded-lg transition duration-200"
                onClick={() => deleteNoteHandler(noteItem.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

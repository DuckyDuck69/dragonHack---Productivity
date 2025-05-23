import { useState, useRef } from "react";

function StudyMethod({method, setMethod }) {
  function handleChanges(event) {
    const selectedOne = event.target.value;
    setMethod(selectedOne);
    console.log("Choose study: ", selectedOne);
  }
  return (
    <div className="bg-primary border-2 border-[var(--primary)] shadow-md rounded-xl p-6">
      <h4>Extra Study Methods: </h4>
      <select value={method} onChange={handleChanges}>
        <option value="regular">No Option</option>
        <option value="pomodoro">Pomodoro</option>
        <option value="flowtime">Flowtime Technique</option>
        <option value="ultradian">Ultradian Sprints</option>
        <option value = "eyecare">Eye Care</option>
      </select>
    </div>
  );
}
export default StudyMethod;

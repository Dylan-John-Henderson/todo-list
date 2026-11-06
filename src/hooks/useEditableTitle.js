import { useState } from 'react';

function useEditableTitle(initialTitle) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(initialTitle);

  function startEditing() {
    setIsEditing(true);
  }

  function cancelEdit() {
    setWorkingTitle(initialTitle);
    setIsEditing(false);
  }

  function updateTitle(newTitle) {
    setWorkingTitle(newTitle);
  }

  function finishEdit() {
    setIsEditing(false);
    return workingTitle;
  }

  return {
    isEditing,
    workingTitle,
    startEditing,
    cancelEdit,
    updateTitle,
    finishEdit,
  };
}

export default useEditableTitle;
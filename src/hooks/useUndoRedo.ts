import { useState, useCallback } from 'react';
import { CharacterData } from '../types';

interface UndoRedoManager {
  past: CharacterData[];
  present: CharacterData;
  future: CharacterData[];
}

export const useUndoRedo = (initialState: CharacterData) => {
  const [manager, setManager] = useState<UndoRedoManager>({
    past: [],
    present: initialState,
    future: [],
  });

  const push = useCallback((state: CharacterData) => {
    setManager(prev => ({
      past: [...prev.past, prev.present],
      present: state,
      future: [],
    }));
  }, []);

  const undo = useCallback(() => {
    setManager(prev => {
      if (prev.past.length === 0) return prev;

      const newPast = prev.past.slice(0, -1);
      const newPresent = prev.past[prev.past.length - 1];
      const newFuture = [prev.present, ...prev.future];

      return {
        past: newPast,
        present: newPresent,
        future: newFuture,
      };
    });
  }, []);

  const redo = useCallback(() => {
    setManager(prev => {
      if (prev.future.length === 0) return prev;

      const newPresent = prev.future[0];
      const newFuture = prev.future.slice(1);
      const newPast = [...prev.past, prev.present];

      return {
        past: newPast,
        present: newPresent,
        future: newFuture,
      };
    });
  }, []);

  const canUndo = manager.past.length > 0;
  const canRedo = manager.future.length > 0;

  return {
    state: manager.present,
    push,
    undo,
    redo,
    canUndo,
    canRedo,
  };
};

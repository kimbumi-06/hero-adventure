import {useContext} from 'react';
import NameContext from '../contexts/nameContext.js';
import AdventureContext from '../contexts/adventureContext.js';
import TargetContext from '../contexts/targetContext.js'


export function useName() {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
}

export function useAdventure() {
  const context = useContext(AdventureContext);
  if (!context) {
    throw new Error("useAdventure must be used within a AdventureProvider");
  }
  return context;
}

export function useTarget() {
  const context = useContext(TargetContext);
  if (!context) {
    throw new Error("useTarget must be used within a TargetProvider");
  }
  return context;

}
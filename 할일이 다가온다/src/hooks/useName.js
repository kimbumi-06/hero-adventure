import {useContext} from 'react';
import NameContext from '../contexts/namecontext.js';

export function useName() {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
}

import React from "react";
import { NameProvider } from "./nameContext.js";
import { AdventureProvider } from "./adventureContext.js";
import { TargetProvider } from "./targetContext.js";

// 공용 변수 저장하는거 한 곳에 모으기

export function Provider({ children }) {
  return (
    <NameProvider>
      <AdventureProvider>
        <TargetProvider>
          {children} {/* children은 아마도 <App />이 될 것입니다. */}
        </TargetProvider>
      </AdventureProvider>
    </NameProvider>
  );
}

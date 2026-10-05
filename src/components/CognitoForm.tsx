"use client";

import { useEffect, useRef } from "react";

// Cognito's seamless embed renders the form wherever its <script> tag sits, so the
// tag is appended into this container rather than loaded via next/script (which
// would place it in <head>). The embed auto-sizes; the container has no height.
export default function CognitoForm() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src = "https://www.cognitoforms.com/f/seamless.js";
    script.dataset.key = "_uaaiFEytEy94LxTIBfO1w";
    script.dataset.form = "277";
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={ref} />;
}

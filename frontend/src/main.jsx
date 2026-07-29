import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HeroUIProvider } from "@heroui/react" // 1. Importamos o provider

import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 2. Envolvemos o App com o Provider da HeroUI */}
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </StrictMode>,
)

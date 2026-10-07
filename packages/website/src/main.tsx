import { initApp } from "@openlooks/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { getPrism } from "./utils/prism";

import "@openlooks/styles/styles.css";

import "./index.css";

getPrism().manual = true;
initApp();

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// const root = createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <StrictMode>
//     <MedplumProvider medplum={medplum} navigate={navigate}>
//       <MantineProvider theme={theme}>
//         <Notifications position="bottom-right" />
//         <RouterProvider router={router} />
//       </MantineProvider>
//     </MedplumProvider>
//   </StrictMode>
// );

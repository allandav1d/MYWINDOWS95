import { ThemeProvider } from "@react95/core";
import { AppRoutes } from "./Routes";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
}

export default App;

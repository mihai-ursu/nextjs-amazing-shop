import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;

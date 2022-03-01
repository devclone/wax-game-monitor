import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { Layout } from "../components/organisms";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b6fba",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MDXProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

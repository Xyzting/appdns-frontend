import { useState, createContext } from "react";

interface SnackbarProps {
  open: boolean;
  variant?: "error" | "success" | "info" | "warning";
  text: string;
}

interface ContextProps {
  snackbar: SnackbarProps;
  setSnackbar: React.Dispatch<React.SetStateAction<SnackbarProps>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initSnackbar: SnackbarProps = {
  open: false,
  variant: "success",
  text: "",
};

export const AppContext = createContext<ContextProps>({
  loading: false,
  setLoading: () => {},
  snackbar: initSnackbar,
  setSnackbar: () => {},
});

export default function AppProvider(props: any) {
  const [snackbar, setSnackbar] = useState<SnackbarProps>(initSnackbar);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ snackbar, setSnackbar, loading, setLoading }}>
      {props.children}
    </AppContext.Provider>
  );
}

interface userProps {
  email: string;
  role_id: number;
  role_name: string;
}

export function isUserAuthenticated() {
  const token = localStorage.getItem("sass-token");

  if (token) {
    return JSON.parse(token);
  }

  return false;
}

export const userAuthenticated: userProps =
  typeof window !== "undefined"
    ? JSON.parse(window.localStorage.getItem("sass-user") ?? "{}")
    : null;

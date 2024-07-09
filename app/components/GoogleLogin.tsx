export const GoogleLogin = ({ children }: { children: React.ReactNode }) => {
  const loginWithGoogle = () => console.log("google");
  return <button onClick={loginWithGoogle}>{children}</button>;
};

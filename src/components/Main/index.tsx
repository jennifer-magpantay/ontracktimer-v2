import { Main } from "./style";

type MainProps = {
  children: React.ReactNode;
};

export const index = ({ children }: MainProps) => {
  return <Main>{children}</Main>;
};

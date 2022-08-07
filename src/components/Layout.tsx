import { FC, memo, ReactNode } from "react";

interface ILayout {
    children: ReactNode;
  }

const Layout: FC<ILayout> = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export default Layout
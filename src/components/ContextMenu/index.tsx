import { List } from "@react95/core";
import { RightMenu } from "./styles";

type Props = {
  anchorPoint: { x: number; y: number };
  show: boolean;
  refMenu: any;
  children?: JSX.Element | JSX.Element[];
};

export const ContextMenu = ({
  anchorPoint,
  refMenu,
  show,
  children,
}: Props) => {
  return (
    <>
      {show ? (
        <RightMenu
          ref={refMenu}
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x,
          }}
        >
          {children}
        </RightMenu>
      ) : (
        <> </>
      )}
    </>
  );
};

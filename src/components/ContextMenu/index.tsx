import { List } from "@react95/core";
import { RightMenu, ScreenBox } from "./styles";

type Props = {
  anchorPoint: { x: number; y: number };
  show: boolean;
  refMenu: any;
  children?: JSX.Element | JSX.Element[];
  handleClick: (e: any) => void;
};

export const ContextMenu = ({
  anchorPoint,
  refMenu,
  show,
  children,
  handleClick,
}: Props) => {
  return (
    <>
      {show ? (
        <ScreenBox onContextMenu={(e) => handleClick(e)}>
          <RightMenu
            ref={refMenu}
            style={{
              top: anchorPoint.y,
              left: anchorPoint.x,
            }}
          >
            {children}
          </RightMenu>
        </ScreenBox>
      ) : (
        <> </>
      )}
    </>
  );
};

import {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import { ContextMenu as ContextMenuElement } from "~/components/ContextMenu";
import useWindowStore from "~/stores/useWindowStore";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const useContextMenu = () => {
  const refMenu = useRef(null as null | HTMLDivElement);
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const window = useWindowStore((state) => state.monitor);

  useEffect(() => {
    if (refMenu.current === undefined || refMenu.current === null) {
      return;
    }

    console.log(refMenu.current);
    console.log(refMenu.current?.clientHeight);
    console.log(refMenu.current?.clientWidth);
    setHeight(refMenu.current?.clientHeight);
    setWidth(refMenu.current?.clientWidth);
  }, [refMenu.current]);

  const handleContextMenu = useCallback(
    (event: any) => {
      event.preventDefault();

      console.log(window);
      console.log(height, width);
      setAnchorPoint({
        x:
          event.pageX + width > window.width
            ? event.pageX - width
            : event.pageX,
        y:
          event.pageY + height > window.height
            ? event.pageY - height
            : event.pageY,
      });
      setShow(true);
    },
    [setShow, setAnchorPoint, height, width]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    //document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      //document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  const ContextMenu = ({ children }: Props) => (
    <ContextMenuElement anchorPoint={anchorPoint} show={show} refMenu={refMenu}>
      {children}
    </ContextMenuElement>
  );

  return { anchorPoint, show, refMenu, handleContextMenu, ContextMenu };
};

export default useContextMenu;

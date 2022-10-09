import { useRef, useState, useEffect } from "react";
import { TaskBarWrapper } from "~/components/TaskBarWrapper";
import { Content, Screen } from "./styles";
import { writeStorage } from "@rehooks/local-storage";
import useWindowStore from "~/stores/useWindowStore";
import useContextMenu from "~/hooks/useContextMenu";
import { List } from "@react95/core";

export const Desktop = () => {
  const ref = useRef(null as null | HTMLDivElement);
  const setWindow = useWindowStore((state) => state.setMonitor);

  const { handleContextMenu, ContextMenu } = useContextMenu();

  useEffect(() => {
    if (ref.current === undefined) {
      return;
    }

    setWindow({
      height: ref.current?.clientHeight || 0,
      width: ref.current?.clientWidth || 0,
    });
  }, [ref.current]);

  return (
    <>
      <ContextMenu>
        <List>
          <List.Item>
            <List>
              <List.Item className="disabled">por Nome</List.Item>
              <List.Item className="disabled">por Tipo</List.Item>
              <List.Item className="disabled">por Tamanho</List.Item>
              <List.Item className="disabled">por Data</List.Item>
              <List.Divider />
              <List.Item className="disabled">AutoOrganizar</List.Item>
            </List>
            Organizar Ícones
          </List.Item>
          <List.Item className="disabled">Alinhar Ícones</List.Item>
          <List.Divider />
          <List.Item className="disabled">Colar</List.Item>
          <List.Item className="disabled">Colar Atalho</List.Item>
          <List.Divider />
          <List.Item>
            <List>
              <List.Item className="disabled">Pasta</List.Item>
              <List.Item className="disabled">Atalho</List.Item>
              <List.Divider />
              <List.Item className="disabled">Som Wave</List.Item>
              <List.Item className="disabled">Documento Texto</List.Item>
              <List.Item className="disabled">Documento do WordPad</List.Item>
              <List.Item className="disabled">Documento de Bitmap</List.Item>
            </List>
            Novo
          </List.Item>
          <List.Divider />
          <List.Item className="disabled">Propriedades</List.Item>
        </List>
      </ContextMenu>

      <Screen ref={ref}>
        <Content onContextMenu={(e) => handleContextMenu(e)} />
        <TaskBarWrapper />
      </Screen>
    </>
  );
};

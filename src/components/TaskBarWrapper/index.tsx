import { List, Modal, TaskBar } from "@react95/core";
import { ReaderClosed, WindowsExplorer } from "@react95/icons";
import { useState } from "react";
import useContextMenu from "~/hooks/useContextMenu";
import { TaskBarContainer } from "./styles";

export const TaskBarWrapper = () => {
  const [first, toggleFirst] = useState(false);
  const [second, toggleSecond] = useState(false);

  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);

  const { handleContextMenu, ContextMenu } = useContextMenu();

  return (
    <>
      <ContextMenu>
        <List>
          <List.Item className="disabled">Em Cascata</List.Item>
          <List.Item className="disabled">
            Lado a Lado Horizontalmente
          </List.Item>
          <List.Item className="disabled">Lado a Lado Verticalmente</List.Item>
          <List.Divider />
          <List.Item className="disabled">Minimizar Todas as Janelas</List.Item>
          <List.Divider />
          <List.Item className="disabled">Propriedades</List.Item>
        </List>
      </ContextMenu>

      <TaskBarContainer onContextMenu={(e) => handleContextMenu(e)}>
        {first && (
          <Modal
            icon={<WindowsExplorer variant="16x16_4" />}
            title="Windows Explorer"
            closeModal={closeFirst}
            width="300"
            height="200"
          />
        )}
        {second && (
          <Modal
            defaultPosition={{ x: 50, y: 50 }}
            width="300"
            height="200"
            icon={<ReaderClosed variant="16x16_4" />}
            title="Local Disk (C:)"
            closeModal={closeSecond}
          />
        )}

        <TaskBar
          list={
            <List>
              <List.Item icon={<ReaderClosed variant="32x32_4" />}>
                Local Disk (C:)
              </List.Item>
              <List.Item icon={<WindowsExplorer variant="32x32_4" />}>
                Windows Explorer
              </List.Item>
            </List>
          }
        />
      </TaskBarContainer>
    </>
  );
};

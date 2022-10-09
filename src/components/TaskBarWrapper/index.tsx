import { List, Modal, TaskBar } from "@react95/core";
import {
  Computer3,
  FileFind,
  FolderPrint,
  HelpBook,
  LoaderBat,
  ReaderClosed,
  WindowsExplorer,
  FolderSettings,
  Settings,
  FolderFile,
  MsDos,
  MicrosoftNetwork,
  MicrosoftExchange,
  FolderExe,
  FolderExe2,
  Computer2,
} from "@react95/icons";
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
              <List.Item icon={<FolderExe2 variant="32x32_4" />}>
                <List>
                  <List.Item icon={<FolderExe variant="16x16_4" />}>
                    Acessórios
                  </List.Item>
                  <List.Item icon={<FolderExe variant="16x16_4" />}>
                    Iniciar
                  </List.Item>
                  <List.Item icon={<MicrosoftExchange variant="16x16_4" />}>
                    Microsoft Exchange
                  </List.Item>
                  <List.Item icon={<MsDos variant="16x16_32" />}>
                    Prompt do MS-DOS
                  </List.Item>
                  <List.Item icon={<MicrosoftNetwork variant="16x16_4" />}>
                    The Microsoft Network
                  </List.Item>
                  <List.Item icon={<WindowsExplorer variant="16x16_4" />}>
                    Windows Explorer
                  </List.Item>
                </List>
                Programas
              </List.Item>
              <List.Item icon={<FolderFile variant="32x32_4" />}>
                <List>
                  <List.Item className="disabled">( Vazio )</List.Item>
                </List>
                Documentos
              </List.Item>
              <List.Item icon={<Settings variant="32x32_4" />}>
                <List>
                  <List.Item icon={<FolderSettings variant="16x16_4" />}>
                    Painel de Controle
                  </List.Item>
                  <List.Item icon={<FolderPrint variant="16x16_4" />}>
                    Impressoras
                  </List.Item>
                </List>
                Configurações
              </List.Item>
              <List.Item icon={<FileFind variant="32x32_4" />}>
                <List>
                  <List.Item className="disabled">( Vazio )</List.Item>
                </List>
                Localizar
              </List.Item>
              <List.Item icon={<HelpBook variant="32x32_4" />}>Ajuda</List.Item>
              <List.Item icon={<LoaderBat variant="32x32_4" />}>
                Executar...
              </List.Item>
              <List.Divider />
              <List.Item icon={<Computer2 variant="32x32_4" />}>
                Suspender
              </List.Item>
              <List.Item icon={<Computer3 variant="32x32_4" />}>
                Desligar...
              </List.Item>
            </List>
          }
        />
      </TaskBarContainer>
    </>
  );
};

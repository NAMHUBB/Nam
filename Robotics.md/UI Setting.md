```import { useAtomValue, useAtom } from "jotai";
import {
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListSubheader,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { controlConnectedAtom, dataConnectedAtom } from "../state/message";
import { settingsAtom } from "../state/settings";
import { ChangeEvent, useCallback, useMemo, useState } from "react";

export const Settings: React.FC = () => {
  const controlConnected = useAtomValue(controlConnectedAtom);
  const dataConnected = useAtomValue(dataConnectedAtom);

  const [settings, setSettings] = useAtom(settingsAtom);

  const [homePositionCommandString, setHomePositionString] = useState({
    j1: settings.homePositionCommand.j1.toString(),
    j2: settings.homePositionCommand.j2.toString(),
    j3: settings.homePositionCommand.j3.toString(),
    j4: settings.homePositionCommand.j4.toString(),
    j5: settings.homePositionCommand.j5.toString(),
    j6: settings.homePositionCommand.j6.toString(),
    a: settings.homePositionCommand.a.toString(),
    v: settings.homePositionCommand.v.toString(),
  });

  const settingDisabled = useMemo(() => {
    return controlConnected || dataConnected;
  }, [controlConnected, dataConnected]);

  const changeFunction = useCallback(
    (event: ChangeEvent, fieldName: string) => {
      const value = (event.target as HTMLInputElement).value;
      setHomePositionString((prev) => {
        return {
          ...prev,
          [fieldName]: value,
        };
      });
      let parsedValue = parseFloat(value);
      if (fieldName === "a") {
        parsedValue = Math.max(parsedValue, 0);
      } else if (fieldName === "v") {
        parsedValue = Math.min(Math.max(parsedValue, 0), 0.1);
      }
      if (isNaN(parsedValue)) {
        return;
      }
      setSettings((prev) => {
        return {
          ...prev,
          homePositionCommand: {
            ...prev.homePositionCommand,
            [fieldName]: parsedValue,
          },
        };
      });
    },
    []
  );

  const blurFunction = useCallback(
    (fieldName: string) => {
      setHomePositionString({
        ...homePositionCommandString,
        [fieldName]: settings.homePositionCommand[fieldName].toString(),
      });
    },
    [settings]
  );

  return (
    <Stack flex={1} padding={1} height={"calc(100vh - 60px)"}>
      <List
        sx={{
          overflowY: "auto",
        }}
      >
        <ListSubheader disableSticky={true}>연결</ListSubheader>
        <ListItem>
          <TextField
            disabled={settingDisabled}
            label={"IP"}
            size={"small"}
            fullWidth
            value={settings.ip}
            onChange={(event) => {
              setSettings({ ...settings, ip: event.target.value });
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            disabled={settingDisabled}
            label={"Control Port"}
            size={"small"}
            fullWidth
            value={settings.controlPort}
            onChange={(event) => {
              const value = Number(event.target.value);
              if (isNaN(value)) {
                return;
              }
              setSettings({
                ...settings,
                controlPort: value,
              });
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            disabled={settingDisabled}
            label={"Data Port"}
            size={"small"}
            fullWidth
            value={settings.dataPort}
            onChange={(event) => {
              const value = Number(event.target.value);
              if (isNaN(value)) {
                return;
              }
              setSettings({
                ...settings,
                dataPort: value,
              });
            }}
          />
        </ListItem>
        <Divider sx={{ margin: 2 }} />
        <ListSubheader>홈 포지션</ListSubheader>
        <ListItem>
          <Stack direction={"row"} spacing={1}>
            <TextField
              disabled={settingDisabled}
              label={"J1"}
              size={"small"}
              fullWidth
              value={homePositionCommandString.j1}
              onChange={(event) => {
                changeFunction(event, "j1");
              }}
              onBlur={() => {
                blurFunction("j1");
              }}
            />
            <TextField
              disabled={settingDisabled}
              label={"J2"}
              size={"small"}
              fullWidth
              value={homePositionCommandString.j2}
              onChange={(event) => {
                changeFunction(event, "j2");
              }}
              onBlur={() => {
                blurFunction("j2");
              }}
            />
            <TextField
              disabled={settingDisabled}
              label={"J3"}
              size={"small"}
              fullWidth
              value={homePositionCommandString.j3}
              onChange={(event) => {
                changeFunction(event, "j3");
              }}
              onBlur={() => {
                blurFunction("j3");
              }}
            />
            <TextField
              disabled={settingDisabled}
              label={"J4"}
              size={"small"}
              fullWidth
              value={homePositionCommandString.j4}
              onChange={(event) => {
                changeFunction(event, "j4");
              }}
              onBlur={() => {
                blurFunction("j4");
              }}
            />
            <TextField
              disabled={settingDisabled}
              label={"J5"}
              size={"small"}
              fullWidth
              value={homePositionCommandString.j5}
              onChange={(event) => {
                changeFunction(event, "j5");
              }}
              onBlur={() => {
                blurFunction("j5");
              }}
            />
            <TextField
              disabled={settingDisabled}
              label={"J6"}
              size={"small"}
              fullWidth
              value={homePositionCommandString.j6}
              onChange={(event) => {
                changeFunction(event, "j6");
              }}
              onBlur={() => {
                blurFunction("j6");
              }}
            />
            <TextField
              disabled={settingDisabled}
              label={"A"}
              size={"small"}
              fullWidth
              value={homePositionCommandString.a}
              onChange={(event) => {
                changeFunction(event, "a");
              }}
              onBlur={() => {
                blurFunction("a");
              }}
            />
            <TextField
              disabled={settingDisabled}
              label={"V"}
              size={"small"}
              fullWidth
              value={homePositionCommandString.v}
              onChange={(event) => {
                changeFunction(event, "v");
              }}
              onBlur={() => {
                blurFunction("v");
              }}
            />
          </Stack>
        </ListItem>
        <Divider sx={{ margin: 2 }} />
        <ListSubheader disableSticky={true}>TCP 조정 도우미</ListSubheader>
        <ListItem>
          <FormControlLabel
            control={
              <Switch
                disabled={settingDisabled}
                checked={settings.tcpGizmoEnabled}
                onChange={(event) => {
                  setSettings({
                    ...settings,
                    tcpGizmoEnabled: event.target.checked,
                  });
                }}
              />
            }
            label={"활성화"}
            labelPlacement={"start"}
          />
        </ListItem>
      </List>
    </Stack>
  );
};
```

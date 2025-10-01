``` javascript

import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls, TransformControls } from "@react-three/drei";
import { TransformControls as TransformControlsImpl } from "three-stdlib";
import { CssBaseline, GlobalStyles, Stack, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { RobotLoader } from "./components/RobotLoader";
import { Object3D, Quaternion, Vector3 } from "three";
import { CodeEditor } from "./components/CodeEditor";
import {
  controlGizmoInUseAtom,
  jointValueAtom,
  robotAtom,
  tcpControlModeAtom,
  tcpControlSpaceAtom,
  tcpValueAtom,
} from "./state/robot";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { setUrdfFromIK } from "closed-chain-ik";
import { Socket } from "./components/Socket";
import { dataConnectedAtom, robotMessageAtom } from "./state/message";
import { MenuBar } from "./components/MenuBar";
import { JointInfo } from "./components/JointInfo";
import { TCPInfo } from "./components/TCPInfo";
import { useCallback, useEffect, useRef, useState } from "react";
import { Jog } from "./components/Jog";
import { Settings } from "./components/Settings";
import { TCPControlSetting } from "./components/TCPControlSetting";
import { jogSpeedAtom } from "./state/ui";
import { send } from "@kuyoonjo/tauri-plugin-tcp";
import { settingsAtom } from "./state/settings";

// +z 방향을 위로 설정
Object3D.DEFAULT_UP.set(0, 0, 1);

// 메인 컴포넌트
export const App: React.FC = () => {
  const settings = useAtomValue(settingsAtom);

  const setControlGizmoInUse = useSetAtom(controlGizmoInUseAtom);
  const tcpControlSpace = useAtomValue(tcpControlSpaceAtom);
  const tcpControlMode = useAtomValue(tcpControlModeAtom);

  const [robot, setRobot] = useAtom(robotAtom);
  const setJointValue = useSetAtom(jointValueAtom);
  const setTcpValue = useSetAtom(tcpValueAtom);

  const dataConnected = useAtomValue(dataConnectedAtom);

  const robotMessage = useAtomValue(robotMessageAtom);
  const robotMessageRef = useRef(robotMessage);

  const jogSpeed = useAtomValue(jogSpeedAtom);

  const [selectedTab, setSelectedTab] = useState<"main" | "settings">("main");

  const transformControlsRef = useRef<TransformControlsImpl>(null);

  const intervalRef = useRef<number | null>(null);

  const tcpRotationRef = useRef<{
    rotationAxis: Vector3;
    rotationAngle: number;
    worldQuaternionStart: Quaternion;
    worldQuaternion: Quaternion;
  }>({
    rotationAxis: new Vector3(),
    rotationAngle: 0,
    worldQuaternionStart: new Quaternion(),
    worldQuaternion: new Quaternion(),
  });

  useEffect(() => {
    robotMessageRef.current = robotMessage;
  }, [robotMessage]);

  const controlFunc = useCallback(() => {
    const target = robot.target;

    const targetPosition = new Vector3();
    const targetQuaternion = new Quaternion();

    const toolPosition = new Vector3(
      robotMessageRef.current.toolVectorActual.x,
      robotMessageRef.current.toolVectorActual.y,
      robotMessageRef.current.toolVectorActual.z
    );

    const rotationVector = new Vector3(
      robotMessageRef.current.toolVectorActual.rx,
      robotMessageRef.current.toolVectorActual.ry,
      robotMessageRef.current.toolVectorActual.rz
    );
    const theta = rotationVector.length();
    const axis = rotationVector.clone().normalize();

    const toolQuaternion = new Quaternion().setFromAxisAngle(axis, theta);

    target.matrixWorld.decompose(
      targetPosition,
      targetQuaternion,
      new Vector3()
    );

    let value: number[] = [];

    if (tcpControlMode === "translate") {
      value = [
        targetPosition.x - toolPosition.x,
        targetPosition.y - toolPosition.y,
        targetPosition.z - toolPosition.z,
        0,
        0,
        0,
      ];
      const valueVector = new Vector3(...value);
      const valueLengthClamped = Math.max(
        -0.05,
        Math.min(0.05, valueVector.length() / 2)
      );
      value = [
        ...valueVector.normalize().multiplyScalar(valueLengthClamped).toArray(),
        0,
        0,
        0,
      ];
    } else {
      const { rotationAxis, rotationAngle } = tcpRotationRef.current;

      const rotationAngleClamped = Math.max(
        -0.05,
        Math.min(0.05, rotationAngle / 2)
      );

      if (tcpControlSpace === "world") {
        value = [
          0,
          0,
          0,
          rotationAxis.x * rotationAngleClamped,
          rotationAxis.y * rotationAngleClamped,
          rotationAxis.z * rotationAngleClamped,
        ];
      } else {
        const worldRotationAxis = rotationAxis
          .clone()
          .applyQuaternion(toolQuaternion);

        value = [
          0,
          0,
          0,
          worldRotationAxis.x * rotationAngleClamped,
          worldRotationAxis.y * rotationAngleClamped,
          worldRotationAxis.z * rotationAngleClamped,
        ];
      }
    }

    const message = `speedl([${value
      .map((v) => v.toFixed(4))
      .join(",")}],a=0.5,t=1.0)\n`;
    send("data", message).catch(() => {});
  }, [tcpControlMode, tcpControlSpace, jogSpeed]);

  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            ":not(input):not(textarea),:not(input):not(textarea)::after,:not(input):not(textarea)::before":
              {
                userSelect: "none",
                cursor: "default",
              },
          },
        }}
      />

      <Stack height={"100vh"} overflow={"hidden"}>
        <MenuBar />

        <Stack flex={1} direction={"row"}>
          <Socket />
          <TabContext value={selectedTab}>
            <Tabs
              variant="fullWidth"
              orientation="vertical"
              value={selectedTab}
              onChange={(_: unknown, value: typeof selectedTab) => {
                setSelectedTab(value);
              }}
              sx={{
                width: 60,
                "& .MuiTabs-flexContainer": {
                  height: "100%",
                },
                "& .MuiTab-root": {
                  padding: 0,
                  minWidth: 0,
                  "& .tab-text": {
                    transform: "rotate(-90deg)",
                  },
                },
                "& .MuiTabs-indicator": {
                  width: 4,
                },
              }}
            >
              <Tab
                label={<span className="tab-text">Main</span>}
                value={"main"}
              />
              <Tab
                label={<span className="tab-text">Settings</span>}
                value={"settings"}
              />
            </Tabs>
            <TabPanel
              keepMounted={true}
              value={"main"}
              sx={{
                flex: 1,
                display: selectedTab === "main" ? "flex" : "none",
                flexDirection: "row",
                padding: 0,
                "@media (max-width:960px) or (max-aspect-ratio:1)": {
                  flexDirection: "column",
                },
              }}
            >
              <Stack flex={1} position={"relative"}>
                <Stack width={"100%"} height={"100%"} position={"absolute"}>
                  <Canvas
                    // 카메라 설정
                    camera={{
                      fov: 60,
                      near: 0.1,
                      far: 1000,
                      position: [1.5, 1.5, 1.5],
                    }}
                  >
                    {/* 로봇을 씬에 추가하는 컴포넌트 */}
                    <RobotLoader />
                    {/* 조명 설정 */}
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight
                      position={[10, 10, 10]}
                      angle={0.15} // 조명 범위를 0.15로 설정
                      penumbra={1} // 조명의 가장자리의 부드러운 정도를 1로 설정
                      intensity={Math.PI} // 조명의 강도를 PI로 설정
                      decay={0} // 조명의 감쇠율을 0으로 설정
                    />
                    <pointLight
                      position={[-10, -10, -10]}
                      intensity={Math.PI}
                      decay={0}
                    />
                    {/* 그리드를 x축을 기준으로 90도 회전 */}
                    <Grid args={[5, 5]} rotation={[Math.PI / 2, 0, 0]} />
                    {/* x, y, z축을 보여주는 헬퍼 */}
                    <axesHelper args={[2.5]} />
                    {/* 카메라 컨트롤러 추가 */}
                    <OrbitControls makeDefault />
                    <TransformControls
                      ref={transformControlsRef}
                      object={robot.target}
                      mode={tcpControlMode}
                      space={tcpControlSpace === "world" ? "world" : "local"}
                      enabled={settings.tcpGizmoEnabled}
                      onMouseDown={() => {
                        if (!dataConnected) {
                          return;
                        }
                        setControlGizmoInUse(true);

                        intervalRef.current &&
                          clearInterval(intervalRef.current);
                        intervalRef.current = setInterval(controlFunc, 100);
                      }}
                      onMouseUp={() => {
                        intervalRef.current &&
                          clearInterval(intervalRef.current);

                        setControlGizmoInUse(false);

                        if (!dataConnected) {
                          robot.target.matrixWorld.fromArray(
                            robot.goal.matrixWorld
                          );
                          return;
                        }

                        robot.target.position.set(
                          robotMessage.toolVectorActual.x,
                          robotMessage.toolVectorActual.y,
                          robotMessage.toolVectorActual.z
                        );
                        const rotationVector = new Vector3(
                          robotMessage.toolVectorActual.rx,
                          robotMessage.toolVectorActual.ry,
                          robotMessage.toolVectorActual.rz
                        );
                        const theta = rotationVector.length();
                        const axis = rotationVector.clone().normalize();
                        robot.target.quaternion.setFromAxisAngle(axis, theta);

                        const message = `stopl(a=1)\n`;
                        send("data", message).catch(() => {});
                      }}
                      onChange={(e) => {
                        if (dataConnected) {
                          if (e?.target && tcpControlMode === "rotate") {
                            const { gizmo: g } = e.target as {
                              gizmo: {
                                rotationAxis: Vector3;
                                rotationAngle: number;
                                worldQuaternionStart: Quaternion;
                                worldQuaternion: Quaternion;
                              };
                            };

                            const {
                              rotationAxis,
                              rotationAngle,
                              worldQuaternionStart,
                              worldQuaternion,
                            } = g;

                            tcpRotationRef.current = {
                              rotationAxis,
                              rotationAngle,
                              worldQuaternionStart,
                              worldQuaternion,
                            };
                          }
                          return;
                        }
                        setRobot((prev) => {
                          prev.goal.position.set(
                            prev.target.position.toArray()
                          );
                          prev.goal.quaternion.set(
                            prev.target.quaternion.toArray()
                          );

                          prev.goal.setMatrixNeedsUpdate();
                          prev.solver.solve();
                          setUrdfFromIK(prev.urdf, prev.ikRoot);
                          const tempJointValue = prev.joints.map((joint) => {
                            return joint.getDoFValue(5);
                          });
                          setJointValue(tempJointValue);
                          setTcpValue();
                          return prev;
                        });
                      }}
                    />
                  </Canvas>
                </Stack>
                <Stack padding={2} gap={2}>
                  <JointInfo />
                </Stack>
                <Stack
                  padding={2}
                  gap={2}
                  position={"absolute"}
                  sx={{
                    top: 230,
                    "@media (max-width:960px) or (max-aspect-ratio:1)": {
                      top: 0,
                      right: 0,
                    },
                  }}
                >
                  <TCPInfo />
                </Stack>
                <Stack
                  direction={"column"}
                  padding={1}
                  gap={2}
                  position={"absolute"}
                  left={"50%"}
                  sx={{
                    transform: "translateX(-50%)",
                  }}
                >
                  <TCPControlSetting />
                </Stack>
                <Stack
                  position={"absolute"}
                  left={"50%"}
                  bottom={0}
                  sx={{
                    transform: "translateX(-50%)",
                  }}
                >
                  <Jog />
                </Stack>
              </Stack>
              <CodeEditor />
            </TabPanel>
            <TabPanel
              keepMounted={true}
              value="settings"
              sx={{
                flex: 1,
                display: selectedTab === "settings" ? "flex" : "none",
                padding: 0,
              }}
            >
              <Settings />
            </TabPanel>
          </TabContext>
        </Stack>
      </Stack>
    </>
  );
};

```

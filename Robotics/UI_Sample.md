


``` javascript
import React, { useEffect, useMemo } from "react";
import { useAtom, atom, useSetAtom, useAtomValue } from "jotai";
import Editor from "@monaco-editor/react";

// ---- Minimal state model (mocked robot) ------------------------------------
export enum ROBOT_MODE {
  DISCONNECTED = 0,
  IDLE = 1,
  RUNNING = 2,
}

const robotModeAtom = atom<ROBOT_MODE>(ROBOT_MODE.IDLE);
const isOperatingAtom = atom(false);
const jointsAtom = atom<number[]>([0, 0, 0, 0, 0, 0]);

// In-memory message log
type Log = { ts: string; level: "info" | "warn" | "error"; msg: string };
const logsAtom = atom<Log[]>([]);
const pushLogAtom = atom(null, (get, set, entry: Log) => {
  const prev = get(logsAtom);
  set(logsAtom, [...prev.slice(-199), entry]);
});

// Monaco: default code sample (simple DSL close to URScript style)
const defaultCode = `# Demo program (mock)
movej([0, -1.2, 1.3, 0, 1.1, 0], a=1.2, v=0.8)
movel([0.35, 0.1, 0.25, 0, 3.14, 0], a=1.0, v=0.25)
sleep(0.5)
movej([0.4, -1.3, 1.0, 0.2, 1.2, -0.1], a=1.2, v=0.8)
`;
const codeAtom = atom<string>(defaultCode);

// ---- Mock robot executor ----------------------------------------------------
function useMockExecutor() {
  const setMode = useSetAtom(robotModeAtom);
  const setJoints = useSetAtom(jointsAtom);
  const pushLog = useSetAtom(pushLogAtom);
  const [isOperating, setOperating] = useAtom(isOperatingAtom);
  const code = useAtomValue(codeAtom);

  const run = async () => {
    if (isOperating) return;
    setOperating(true);
    setMode(ROBOT_MODE.RUNNING);
    pushLog({ ts: new Date().toLocaleTimeString(), level: "info", msg: "Run start" });

    // Very small parser for demo commands
    const lines = code
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith("#"));

    try {
      for (const line of lines) {
        if (!isOperating) throw new Error("Operation stopped");
        if (line.startsWith("sleep(")) {
          const sec = Number(line.match(/sleep\(([^\)]+)\)/)?.[1] ?? 0.2);
          pushLog({ ts: new Date().toLocaleTimeString(), level: "info", msg: `sleep ${sec}s` });
          await new Promise((r) => setTimeout(r, sec * 1000));
          continue;
        }
        const m = line.match(/(movej|movel)\(\[([^\]]+)\].*\)/);
        if (m) {
          const kind = m[1];
          const nums = m[2].split(",").map((s) => Number(s.trim()));
          // simulate motion by interpolating joints in 10 steps
          const target = kind === "movej" ? nums : [nums[0], nums[1], nums[2], 0, 0, 0];
          for (let step = 1; step <= 10; step++) {
            setJoints((prev) => prev.map((v, i) => v + (target[i] - v) * 0.2));
            await new Promise((r) => setTimeout(r, 40));
          }
          pushLog({ ts: new Date().toLocaleTimeString(), level: "info", msg: `${kind} OK` });
          continue;
        }
        pushLog({ ts: new Date().toLocaleTimeString(), level: "warn", msg: `Unknown: ${line}` });
      }
      pushLog({ ts: new Date().toLocaleTimeString(), level: "info", msg: "Program finished" });
    } catch (e: any) {
      pushLog({ ts: new Date().toLocaleTimeString(), level: "error", msg: String(e.message || e) });
    } finally {
      setOperating(false);
      setMode(ROBOT_MODE.IDLE);
    }
  };

  const stop = () => {
    if (!isOperating) return;
    setOperating(false);
    pushLog({ ts: new Date().toLocaleTimeString(), level: "warn", msg: "Stop requested" });
  };

  return { run, stop } as const;
}

// ---- Small UI widgets -------------------------------------------------------
function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center py-1 text-sm">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl shadow p-4 bg-white/80">
      <div className="text-sm font-semibold mb-2">{title}</div>
      {children}
    </div>
  );
}

// ---- Main App ---------------------------------------------------------------
export default function App() {
  const [code, setCode] = useAtom(codeAtom);
  const mode = useAtomValue(robotModeAtom);
  const joints = useAtomValue(jointsAtom);
  const logs = useAtomValue(logsAtom);
  const isOperating = useAtomValue(isOperatingAtom);
  const { run, stop } = useMockExecutor();

  const modeLabel = useMemo(
    () => (mode === ROBOT_MODE.IDLE ? "IDLE" : mode === ROBOT_MODE.RUNNING ? "RUNNING" : "DISCONNECTED"),
    [mode]
  );

  useEffect(() => {
    // initial log
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* LEFT: Editor */}
        <div className="rounded-2xl overflow-hidden shadow bg-white">
          <div className="flex items-center justify-between px-3 py-2 border-b bg-slate-50">
            <div className="text-sm font-semibold">Program</div>
            <div className="flex gap-2">
              {!isOperating ? (
                <button onClick={run} className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-sm">Run</button>
              ) : (
                <button onClick={stop} className="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-sm">Stop</button>
              )}
            </div>
          </div>
          <Editor height="420px" defaultLanguage="python" value={code} onChange={(v) => v && setCode(v)} options={{ fontSize: 14, minimap: { enabled: false } }} />
        </div>

        {/* RIGHT: Telemetry & Logs */}
        <div className="grid grid-rows-[auto,1fr] gap-4">
          <Panel title="Robot Status">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Stat label="Mode" value={<span className={mode===ROBOT_MODE.RUNNING?"text-emerald-600":"text-slate-800"}>{modeLabel}</span>} />
                <Stat label="Operating" value={isOperating ? "YES" : "NO"} />
              </div>
              <div>
                <Stat label="J1" value={joints[0].toFixed(2)} />
                <Stat label="J2" value={joints[1].toFixed(2)} />
                <Stat label="J3" value={joints[2].toFixed(2)} />
                <Stat label="J4" value={joints[3].toFixed(2)} />
                <Stat label="J5" value={joints[4].toFixed(2)} />
                <Stat label="J6" value={joints[5].toFixed(2)} />
              </div>
            </div>
          </Panel>

          <div className="rounded-2xl shadow bg-white overflow-hidden flex flex-col">
            <div className="px-4 py-2 border-b bg-slate-50 text-sm font-semibold">Logs</div>
            <div className="flex-1 overflow-auto px-4 py-3 text-sm font-mono">
              {logs.length === 0 && <div className="text-slate-400">No logs yet</div>}
              {logs.map((l, i) => (
                <div key={i} className="flex gap-2 items-baseline">
                  <span className="text-slate-400">{l.ts}</span>
                  <span className={l.level === "error" ? "text-rose-600" : l.level === "warn" ? "text-amber-600" : "text-slate-700"}>
                    {l.level.toUpperCase()}
                  </span>
                  <span className="text-slate-800">{l.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto mt-4 text-center text-xs text-slate-500">
        Mock robotics UI (editor + executor + telemetry). Replace the executor with your TCP/Tauri layer when ready.
      </footer>
    </div>
  );
}

```

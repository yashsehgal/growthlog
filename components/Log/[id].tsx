import { LogType } from "../../types/log-type";

export default function Log(log: LogType) {
    return (
        <div className="log-record-view">
            Working for log {log?.logTitle}
        </div>
    )
}
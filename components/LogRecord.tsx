import { useRef } from 'react';
import GrowthLogRecordJSON from '../dataSource/growth-log-record.json';
import { LogType } from '../types/log-type';


export default function LogRecord() {
    const growthLogRecordRef = useRef(GrowthLogRecordJSON);
    return (
        <div className="log-record">
            <ul className="log-record-list-wrapper relative border-l border-gray-200 dark:border-gray-700">
                {growthLogRecordRef.current?.map((growthLogItem: LogType, growthLogIndex: number) => (
                    <li className="log-record-item mb-10 ml-4" key={growthLogIndex}>
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <a className="w-fit h-auto">
                            <div className="growth-log-item-content-wrapper">
                                {growthLogItem?.logTimestamp?.logYear 
                                    ? <p className="growth-log-item-timestamp-wrapper text-xs font-normal text-gray-500 dark:text-gray-300 cursor-default select-none">
                                        {growthLogItem?.logTimestamp?.logDate 
                                        && <span className="growth-log-item-timestamp-date-wrapper">{growthLogItem?.logTimestamp?.logDate + ", "}</span>}
                                        <span className="growth-log-item-timestamp-month-wrapper">{growthLogItem?.logTimestamp?.logMonth + " "}</span>
                                        <span className="growth-log-item-timestamp-year-wrapper">{growthLogItem?.logTimestamp?.logYear}</span>
                                    </p>
                                    : <p className="growth-log-item-timestamp-not-found-alt-text-wrapper text-xs font-normal text-gray-500 dark:text-gray-300">
                                        {"On a magical day"}
                                    </p>
                                }
                                <h1 className="growth-log-item-title text-base font-semibold text-gray-800 dark:text-gray-200 font-sans">
                                    {growthLogItem?.logTitle}
                                </h1>
                                <div className="growth-log-item-tags-layer-wrapper mt-3 flex flex-row items-center justify-start gap-1.5">
                                    {growthLogItem?.logTags?.map((growthLogTag, growthLogTagIndex) => (
                                        <span className="inner-content date_date-wrapper select-none cursor-default px-2 py-1 rounded-md border border-gray-300 dark:border-gray-700 shadow hover:shadow-sm bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-400"
                                            key={growthLogTagIndex}
                                        >
                                            {growthLogTag}
                                        </span>
                                    ))}
                                </div>
                                <div className="growth-log-item-references-wrapper mt-4">
                                    <h4 className="growth-log-references-title text-xs font-semibold uppercase select-none cursor-default text-gray-400">{"References"}</h4>
                                    <div className="growth-log-item-references-list-content-container">
                                        <ul className="growth-log-item-references-list-wrapper ml-4 mt-2">
                                            {growthLogItem?.logRefs?.logRefList?.map((refListItem, refListIndex) => (
                                                <li className="growth-log-item-reference-list-item list-disc text-sm font-normal text-gray-600" 
                                                    key={refListIndex}
                                                >
                                                    {refListItem}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="growth-log-item-references-links-content-container">
                                        <ul className="growth-log-item-reference-links-wrapper ml-4 mt-2">
                                            {growthLogItem?.logRefs?.logRefLinks?.map((refLinkItem, refLinkIndex) => (
                                                <li key={refLinkIndex} 
                                                    className="text-blue-500 growth-log-item-reference-link-item list-disc text-sm font-normal cursor-pointer hover:underline w-fit h-auto"
                                                    onClick={() => window.open(refLinkItem?.link)}
                                                >
                                                    {refLinkItem?.label + " ↗️"}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>        
    )
}
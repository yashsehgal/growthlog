import GrowthLogRecordJSON from './growth-log-record.json';

export default function getGrowthLogRecord(id) {
    const growthLogRecord = GrowthLogRecordJSON;
    return growthLogRecord.length > 0 && growthLogRecord[id] ? growthLogRecord[id] : false;
}
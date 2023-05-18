
export type LogRefLink = {
    label?: string,
    link?: string
}

export type LogType = {
    logID?: string,
    logTitle?: string,
    isLogGrowthful?: boolean,
    logTimestamp?: {
        logDate?: string,
        logMonth?: string,
        logYear?: string
    },
    logTags?: string[],
    logRefs?: {
        logRefList?: string[],
        logRefLinks?: LogRefLink[]
    }
};
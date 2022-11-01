
export type LogRefLink = {
    label: string,
    link: string
}

export type LogType = {
    logID: string,
    logTitle: string,
    isLogGrowthful: true,
    logTimestamp: {
        logDate: number,
        logMonth: string,
        logYear: number
    },
    logTags: string[],
    logRefs: {
        logRefList: string[],
        logRefLinks: LogRefLink[]
    }
};


export const convertTimeStamp = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return ((date.getDate()) + '/' + (date.getMonth() + 1) + '/' + date.getFullYear())
}

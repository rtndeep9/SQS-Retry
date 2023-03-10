//Add a randomness to exponential backoff and create jitter
export const calculateFullJitter = (min : number, max : number) : number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Convert timestamp to 'YYYY-MM-DD HH:MM:SS' format
export const formatedTimestamp = (timeStamp : string)=> {
    const d = new Date(parseInt(timeStamp))
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    return `${date} ${time}`
}
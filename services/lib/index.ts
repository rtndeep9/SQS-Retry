export const calculateFullJitter = (min : number, max : number) : number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const formatedTimestamp = ()=> {
    const d = new Date()
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    return `${date} ${time}`
}
export function getFormatedDate(date){  
    let newDate = new Date(date)
return newDate.toISOString().slice(0,10)
}

export  function getDateMinusDate(date,days){
    return new Date(date.getFullYear(),date.getMonth(),date.getDate()- days)
}
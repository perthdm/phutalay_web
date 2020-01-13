const PORT_INIT = 2020;
const DATE_INIT = new Date()

const DATE = `${DATE_INIT.getDate()}/${DATE_INIT.getMonth()+1}/${DATE_INIT.getFullYear()} `
const TIME = `${DATE_INIT.toLocaleTimeString('th-TH', {hour12:false})}`

module.exports = {
    PORT : PORT_INIT,
    INIT : function(){
        console.log("╔═══════════════╦═════════════════════════════════╗");
        console.log(`║ PROJECT NAME  ║  Phutalay                       ║`);
        console.log(`║ LOCALHOST     ║  http://localhost:${PORT_INIT}          ║`);
        console.log(`║ START AT      ║  ${DATE}, ${TIME}           ║`);
        console.log("╚═══════════════╩═════════════════════════════════╝");   
    }
}


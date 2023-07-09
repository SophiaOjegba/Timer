
const args = process.argv.slice(2);

const setAlarm = (time) => {
  const alarm = parseInt(time);

  if (time === ""){
    console.log("Please provide a valid number greater or equal to 1");
    return;
  }
  if (alarm <= 0 || isNaN(alarm)){
    console.log("Please provide a valid number greater or equal to 1");
    return;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
    console.log("Alarm")
  }, 1000 * alarm);
};
  for(const number of args){
    setAlarm(number);
  }



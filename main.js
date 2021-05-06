const getSleepHours = day => {
    day.toLowerCase();
//one code for all the days instead of 7 different codes
    switch(day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 9;
            break;
        case 'wednesday':
            return 7;
            break;
        case 'thursday':
            return 10;
            break;
        case 'friday':
            return 6;
            break;
        case 'saturday':
            return 12;
            break;
        case 'sunday':
            return 5;
            break;
    }
};
//calculating actual sleep hours
const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

    //ideal sleep hours
const getIdealSleepHours = idealHours =>  idealHours * 7; //gets the total number of hours you prefer to sleep per week

//calculating the sleep debt for the week
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
 // a conditional statement
 if (actualSleepHours === idealSleepHours) {
     console.log(`You got the perfect amount of ${actualSleepHours} of sleep.`);
 } else if (actualSleepHours > idealSleepHours) {
     console.log(`You got ${actualSleepHours}hours more sleep than you needed.`);
 } else {
     console.log(`You slept  ${actualSleepHours} less.You should get some rest.`);
 }
};
calculateSleepDebt(); //starts the program
// console.log(getIdealHours());
// console.log(getSleepHours('friday'));
 //testing that the function works
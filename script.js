/**
*Task: Even or Odd Checker (Electricity Billing System)
Description: Determine if a given meter reading (in kWh) is even or odd. If the reading is even,
suggest a discount code 'EVENPOWER10'. If it's odd, suggest 'ODDSAVER5'.
Input Example: meter_reading = 452
Expected Output: Even reading, use discount code: EVENPOWER10
*/
let meterReading = 451;
if (meterReading % 2 == 0) {
    console.log('DISCOUNT CODE: EVENPOWER10');
}
else {
    console.log('DISCOUNT CODE: ODDSAVERS');
}

/**
Task: Temperature Conversion (Weather App)
Description: Allow the user to convert a temperature from Celsius to Fahrenheit. Use the formula:
(Celsius * 9/5) + 32.
Input Example: Celsius = 25
Expected Output: Temperature: 77°F 
*/
let celsius = 44;
if (celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32
    console.log(`Temperature: ${fahrenheit}F`);
}
else {
    console.log('Enter correct Value');
}

/**
Task: Divisibility Check (Offer Eligibility)
Description: Check if an order number is divisible by 3, 5, or both: Divisible by 3 gives 'Free
Shipping', divisible by 5 gives 'Cashback', and divisible by both gives 'Free Shipping and Cashback'.
Input Example: order_number = 15
Expected Output: Free Shipping and Cashback
*/
let orderID = 12345;
if (orderID % 3 == 0 && orderID % 5 == 0) {
    console.log(`You are Eligible For FREE SHIPPING and You Got a CASH BACK of 20 Rupees`);
}
else {
    if (orderID % 5 == 0) {
        console.log('You Got a CASHBACK of 20 Rupees');
    } else {
        if ((orderID % 3 == 0)) {
            console.log('You are Eligibile for FREE SHIPPING');
        }
        else {
            console.log('your ORDERID is not divisible by 3 and 5');
        }
    }
}


/**
Task: Personalized Greeting System
Description: Based on the time of day, greet the user appropriately: Morning (6 AM-11:59 AM),
Afternoon (12 PM-5 PM), Evening (5 PM-9 PM), and Night (9 PM-6 AM).
Input Example: current_time = '2 PM'
Expected Output: Good Afternoon!  
*/
let time = 12;
let period = 'PM';
if ((period === 'AM') && (time >= 6 && time < 12)) {
    console.log('GOOD MORNING')
}
else {
    if ((period === 'PM') && (time == 12 || (time >= 0 && time < 5))) {
        console.log('GOOD AFTERNOON');
    } else {
        if ((period === 'PM') && (time > 5 && time < 9)) {
            console.log('GOOD EVENING');
        }
        else {
            if ((period === 'PM') && (time >= 9 && time < 12)) {
                console.log('GOOD NIGHT');
            } else {
                if ((period === 'AM') && (time >= 0 && time < 6)) {
                    console.log('GOOD NIGHT');
                }
                else {
                    console.log('ENTER THE TIME IN 12 Hours FORMAT')
                }
            }
        }
    }
}
/**
Task: FizzBuzz (Event Alert System)
Description: Develop a program to assign teams based on event number: Divisible by 3 ('Handled
by Team A'), divisible by 5 ('Handled by Team B'), divisible by both ('Handled by Special Team'),
otherwise 'No team assigned'.
Input Example: event_number = 30
Expected Output: Handled by Special Team
*/
let eventNumber = 15;
if (eventNumber % 3 == 0 && eventNumber % 5 == 0) {
    console.log('Handeled By special Team');
}
else {
    if (eventNumber % 5 == 0) {
        console.log('Handled By B team');
    } else {
        if (eventNumber % 3 == 0) {
            console.log('Handled by A team');
        } else {
            console.log('The event Number doesnt divisible by 3 and 5');
        }
    }
}

/**
Task: Speed Limit Checker (Traffic Monitoring System)
Description: Check vehicle speed and respond: Speed < 60 ('Normal Speed'), 60-80 ('Warning:
Close to Overspeeding'), > 80 ('Overspeeding! Penalty applied').
Input Example: speed = 75
Expected Output: Warning: Close to Overspeeding
*/
let speed = 100;
if (speed < 60) {
    console.log('Normal Spped');
}
else {
    if (speed > 60 && speed < 80) {
        console.log('Warning: Close to Overspeeding');
    }
    else {
        console.log('OverSpeed!: Penality Applied');
    }
}

/*        
Task: Grade Calculator (Performance Review)
Description: Assign grades based on scores: 90+ ('A+'), 80-89 ('A'), 70-79 ('B'), 60-69 ('C'), < 60
('F').
Input Example: score = 85
Expected Output: Grade: A (Excellent)*

*/
let score = 65;
if (score >= 90 && score <= 100) {
    console.log('Grade: A+');
}
else {
    if (score >= 80 && score <= 89) {
        console.log('Grade: A');
    } else {
        if (score >= 70 && score <= 79) {
            console.log('Grade: B');
        }
        else {
            if (score >= 60 && score <= 69) {
                console.log('Grade: C');
            }
            else {
                if (score < 60) {
                    console.log('Grade: F');
                } else {
                    console.log('Please Enter the Marks Between 0 to 100');
                }
            }
        }
    }
}
//

/**
Task: ATM Withdrawal Validator
Description: Simulate an ATM withdrawal. Prompt for account balance and withdrawal amount. If the
withdrawal amount exceeds balance, show 'Insufficient funds!'; otherwise, deduct and show
'Transaction successful!'.
Input Example: balance = 2000, withdrawal = 2500
Expected Output: Insufficient funds! 
*/
let balance = 1000;
let withdrawlAmount = 600

if (balance > withdrawlAmount || balance == withdrawlAmount) {
    console.log(`TRANSACTION SUCCESSFULL: You have Withdrawn ${withdrawlAmount} rupees and Your Current balance is ${balance - withdrawlAmount}`)
}
else {
    console.log('INSUFFICIENT FUNDS: Your Withdrawl amount is greaterthan your Balance ')
}

/**
Task: Shopping Discount Calculator (Festival Offer)
Description: Calculate the price after applying discounts: Purchase > $1000 (20% discount),
$500-$1000 (10% discount), below $500 (no discount).
Input Example: purchase_amount = 1200
Expected Output: Discounted price: $960
*/
let purchaseAmount = 1355;

if (purchaseAmount > 1000) {
    console.log(`You have Purchased greaterthan 1000$, You have got 20% discount. The Final price is ${purchaseAmount - purchaseAmount * (20 / 100)}`)
}
else {
    if (purchaseAmount >= 500 && purchaseAmount <= 1000) {
        console.log(`You have Purchased between 500$ to 1000$, You have got 10% discount. The Final price is ${purchaseAmount - purchaseAmount * (10 / 100)}`)
    }
    else {
        console.log('You Purchased Lessthan 500$, You got NO DISCOUNT')
    }
}


/**
Task: Movie Ticket Price Calculator (Dynamic Pricing System)
Description: Assign ticket prices based on age: Age < 12 ($5), 12-60 ($10), > 60 ($7).
Input Example: age = 65
Expected Output: Ticket price: $7
*/
let age = 65;
if (age > 60 && age <= 100) {
    console.log('Ticket Price: $7')
}
else {
    if (age >= 12 && age <= 60) {
        console.log('Ticket Price: $10')
    }
    else {
        if (age < 12) {
            console.log('Ticket Price: $5')
        }
        else {
            console.log('Enter the AGE between 0 to 100')
        }
    }
}
// 14.	Then use Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. your list to print a message to each person, inviting them to dinner.

let guestArr: string[] = ["Zoya" , "Sheeza" , "Hiban" , "Husain"]
guestArr.map((item) => (
    console.log(`Dear ${item}, you are cordially invited to dinner at my place. Looking forward to your presence!`)
    
));


// Define an array of people you'd like to invite to dinner
const dinnerGuests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Function to print invitation messages
function printInvitations(guests: string[]): void {
    guests.forEach(guest => {
        console.log(`Dear ${guest}, you are cordially invited to dinner at my place. Looking forward to your presence!`);
    });
}

// Call the function with the array of dinner guests
printInvitations(dinnerGuests);

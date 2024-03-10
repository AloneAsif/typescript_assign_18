// Question no 19
let guest_list1: string[] = ['ali', 'asim', 'atif', 'rizwan'];

let more_guest: string[] = ['shan', 'shahnwaz', 'sameer'];

let full_guest: string[] = guest_list1.concat(more_guest);

console.log(`I am inviting ${full_guest.length} people to dinner.`);

while(full_guest.length > 2){
    let removed_guests = full_guest.pop();      //using while loop for reomoving guests 
    console.log(`I'm sorry, ${removed_guests}, I can't invite you to dinner.`);
}

for(let newGuest of full_guest){
    console.log(`${newGuest}, you are still invited.`);   // for loop using for who are reamaining guests
}

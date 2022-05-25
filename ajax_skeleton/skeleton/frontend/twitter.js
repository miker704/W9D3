const FollowToggle= require ("./follow_toggle.js");

const new_toggle = new FollowToggle();

document.addEventListener("DOMContentLoaded",() => {

    const buttons = $("button.follow-toggle");

    buttons.each(  
        (index,element) => {
            let button = new FollowToggle(element)
        }
    )
        console.log(buttons[0]);

})

// $(() => {

//     $("button.follow-toggle")

// })
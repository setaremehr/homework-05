$(document).ready(function () {
    const $timeBlock = $('.time-block');

    const $container = $('#container');

    const dayTime = ['10AM', '11AM', '12AM', '1PM', '2PM', ' 3PM']

    let $currentDay = $('#currentDay');
    let todayDate = moment();
    // creating data from moment.js
    $currentDay.text(todayDate.format('MMMM Do YYYY, h:mm:ss a'));


    $.each(dayTime, function (key, value) {
        // make HTML elements
        const $rowDiv = $('<div>').addClass('row');
        const $hourDiv = $('<div>').text(value).addClass('hour');
        const $textInfo = $('<textarea>').addClass('.textarea .empty col-8 bg-warning').attr('value', value);

        const $button = $('<button>').addClass('saveBtn col-2');

        const $btnIcon = $('<i>').addClass('fas fa-calendar-check ');

        // const $clearBtn = $('<button>').text('clear').addClass('empty');
        
        // appending elements to parents
        $button.append($btnIcon);
        $timeBlock.append($rowDiv);
        $rowDiv.append($hourDiv, $textInfo, $button);


        function storeTodo() {
            localStorage.setItem(value, $textInfo.val());
        }

        $button.on('click', function () {
            storeTodo()
        })

        function getTodo() {
            const item = localStorage.getItem(value)
            $textInfo.text(item)
        }
        getTodo()

        // $clearBtn.on('click', function () {
        //     $clearBtn.empty();
        // })

    })

})























// const $currentDay = $('#currentDay');
// const $container = $('#container');
// // const $textArea = $('#textBox');
// const $button = $('#btn');
// let todayDate = moment();
// let value;


// const $textarea = $('#textarea');






// $(document).ready(function(){

// $currentDay.text(todayDate.format('MMMM Do YYYY, h:mm:ss a') )



// // localStorage
// function storeInfo(){
//     localStorage.setItem(value, $textarea.val());
// }
// $btn.on('click', function(){
//     storeInfo()
// })
// function stores () {
//     const infoLocal = localStorage.getItem(value)
//     $textarea.text(infoLocal)
// }
// stores()
// })
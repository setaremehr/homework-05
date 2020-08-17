



$(document).ready(function () {
    const $timeBlock = $('.time-block');

    const $container = $('#container');


    // const $dayTime = $("").addClass(bg-success);
    let $currentDay = $('#currentDay');
    let todayDate = moment();
    $currentDay.text(todayDate.format('MMMM Do YYYY, h:mm:ss a'));
    // make HTML elements
    const dayTime = ['10AM', '11AM', '12AM', '1PM', '2PM', ' 3PM']
    $.each(dayTime, function (key, value) {

        const $rowDiv = $('<div>').addClass('row');
        const $hourDiv = $('<div>').text(value).addClass('hour');
        const $textInfo = $('<textarea>').addClass('.textarea col-8 bg-warning').attr('value', value);

        const $button = $('<button>').addClass('saveBtn col-2');

        const $btnIcon = $('<i>').addClass('fas fa-calendar-check ');

        $button.append($btnIcon);
        $timeBlock.append($rowDiv);
        $rowDiv.append($hourDiv, $textInfo, $button);







        function storeTodo() {
            localStorage.setItem(value, $textInfo.val());
        }
        //running the function when the save button is clicked
        $button.on('click', function () {
            storeTodo()
        })
        // retreiving to-do items from local storage and rendering them to their correct time-blocks
        function getTodoText() {
            const item = localStorage.getItem(value)
            $textInfo.text(item)
        }
        getTodoText()

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
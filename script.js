$( document ).ready(function() {

    const keys = Object.keys(questions);
    $(".flashcard").click(function() {
        $(".flashcard").text(keys[0]);
    })
$(".flashcard").text(questions[keys[0]]);

});

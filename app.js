/**
 * Created by palmer on 8/14/17.
 */
$(document).ready(function() {

    var checkBtn = $('#btn-check');

    checkBtn.click(function(){
        // $('body').append('<p>testing</p>')
        console.log("CLICK");

        var word1 = $('#word1').val();
        var word2 = $('#word2').val();

        // check if length is equal
        // if (word1.length != word2.length){
        //     $('body').append("not anagrams");
        //     return;
        // }

        if (word1.length < 1 || word2.length < 1){
            return;
        }

        // TODO: should i check that words are, like... words?

        // split word into array
        var array1 = word1.split("");
        var array2 = word2.split("");

        // sort and rearrange array
        // alpha ascending is default...
        array1.sort();
        array2.sort();

        // compare arrays

        if (arraysEqual(array1, array2)){
            //$('body').append('<p>' + word1 + ' ' + word2 + ' are anagrams. </p>')
            $('#results').prepend('<div class="result result-positive"><p class="result-text">' + '<span class="positive-text">' + word1 + '</span> and <span class="positive-text">' + word2 +  '</span> are anagrams. </p></div>')
        }else{
            //$('body').append("<p> not anagrams </p>");
            //$('#results').prepend('<div class="result result-negative"><p class="result-text">' + word1 + ' and ' + word2 +  ' are not anagrams. </p></div>')
            $('#results').prepend('<div class="result result-negative"><p class="result-text">' + '<span class="negative-text">' + word1 + '</span> and <span class="negative-text">' + word2 +  '</span> are not anagrams. </p></div>')
        }

        $('#word1').val("");
        $('#word2').val("");

        // $('body').append('<p>' + word1 + ' ' + word2 + '</p>')

    });

});

// https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    // arrays are already sorted

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// TODO: are we checking for anagram phrases?

// TODO: add spans so i can style word1 and word2 in their result row.
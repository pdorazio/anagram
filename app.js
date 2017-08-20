/**
 * Created by palmer on 8/14/17.
 */

$(document).ready(function() {

    var checkBtn = $('#btn-check');

    checkBtn.click(function(){

        // get input strings
        var word1 = $('#word1').val();
        var word2 = $('#word2').val();

        // strip whitespace to detect anagram phrases
        word1.replace(/ /g, "");
        word2.replace(/ /g, "");

        // return if empty
        if (word1.length < 1 || word2.length < 1){
            return;
        }

        // split word into array
        var array1 = word1.split("");
        var array2 = word2.split("");

        // sort and rearrange array
        // alpha ascending is default...
        array1.sort();
        array2.sort();

        // compare arrays
        if (arraysEqual(array1, array2)){
            $('#results').prepend('<div class="result result-positive"><p class="result-text">' + '<span class="positive-text">' + word1 + '</span> and <span class="positive-text">' + word2 +  '</span> are anagrams. </p></div>')
        }else{
            $('#results').prepend('<div class="result result-negative"><p class="result-text">' + '<span class="negative-text">' + word1 + '</span> and <span class="negative-text">' + word2 +  '</span> are not anagrams. </p></div>')
        }

        // reset input fields
        $('#word1').val("");
        $('#word2').val("");

    });

});

// https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
/**
 * Created by palmer on 8/14/17.
 */
$(document).ready(function() {

    var checkBtn = $('#check');

    checkBtn.click(function(){
        // $('body').append('<p>testing</p>')

        var word1 = $('#word1').val();
        var word2 = $('#word2').val();

        // check if length is equal
        if (word1.length != word2.length){
            $('body').append("not anagrams");
            return;
        }

        // split word into array
        var array1 = word1.split("");
        var array2 = word2.split("");

        // sort and rearrange array
        array1.sort();
        array2.sort();

        // compare arrays

        if (arraysEqual(array1, array2)){
            $('body').append('<p>' + word1 + ' ' + word2 + ' are anagrams. </p>')
        }else{
            $('body').append("<p> not anagrams </p>");
        }

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

//TODO: are we checking for anagram phrases?
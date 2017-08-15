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
        // sort and rearrange array

        // compare arrays


        $('body').append('<p>' + word1 + ' ' + word2 + '</p>')

    });

});
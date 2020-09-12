import 'bootstrap';
import './scss/app.scss';
import $ from 'jquery';

$('#show_demo_button').click(function (e)  {
    var values = ["you", "are", "great", "person"];

    var toShow = "";

    for(var count=1;count<=5;count++) {
        var index = Math.floor(Math.random() * 4) + 1  
        toShow = toShow + " "+values[index-1]
    }

    $('#my_content').html(toShow);

});
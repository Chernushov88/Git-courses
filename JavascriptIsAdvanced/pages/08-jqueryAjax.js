import $ from 'jquery';
global.jQuery = $;
global.$ = $;

document.title = 'lqueryAjax'
let div = document.createElement('div')
div.className = 'lesson9'
div.innerHTML = `<button type="button" class="btn btn-primary">CLICK</button>`
document.body.append(div);
$(function(){

    $(function($){
        $('.btn').on('click', function(){
            makeRequest();
        });

    })
    function makeRequest(){
        $.ajax({
            type: 'GET',
            url: 'http://ip.jsontest.com/',
            crossDomain: true,
            success: function(data, status, xhr){
                console.log('IP: ', data);
                 console.log('Success ', arguments);
            },
            error: function(){
                console.log('Error ', arguments);
            }
        });
    }
})

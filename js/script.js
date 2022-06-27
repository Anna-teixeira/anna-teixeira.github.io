$(document).ready(function() {
    current = 'about';
    $("#uxSection").on('click', function(){
        $("#"+current).css('display', 'none');

        $("#graphicSection").removeClass('active');
        $("#aboutSection").removeClass('active');
        $("#uxSection").addClass('active');

        current = $("#uxSection").attr('data-target')
        $("#"+current).css('display', 'block');
    })

    $("#graphicSection").on('click', function(){
        $("#"+current).css('display', 'none');

        $("#uxSection").removeClass('active');
        $("#aboutSection").removeClass('active');
        $("#graphicSection").addClass('active');

        current = $("#graphicSection").attr('data-target')
        $("#"+current).css('display', 'block');
    })
    $("#aboutSection").on('click', function(){
        $("#"+current).css('display', 'none');

        $("#uxSection").removeClass('active');
        $("#graphicSection").removeClass('active');
        $("#aboutSection").addClass('active');

        current = $("#aboutSection").attr('data-target')
        $("#"+current).css('display', 'block');
    })

    $("#sdg").on('click', function(){
        $("#"+current).css('display', 'none');
        current = $("#sdg").attr('data-target')
        $("#"+current).css('display', 'block');
    })

    $("#cooperate").on('click', function(){
        $("#"+current).css('display', 'none');
        current = $("#cooperate").attr('data-target')
        $("#"+current).css('display', 'block');
    })

    $("#Police").on('click', function(){
        $("#"+current).css('display', 'none');
        current = $("#Police").attr('data-target')
        $("#"+current).css('display', 'block');
    })

    $("#adotevl").on('click', function(){
        //window.open('https://www.google.com.br', '_blank');
        alert('website under development')
    })
});
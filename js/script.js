$(document).ready(function() {

    var el = document.getElementById("text");

    function showtext(el, text) {
        var char = text.split("").reverse();
    

        var typer = setInterval(function() {
        
            if (!char.length) {
                return clearInterval(typer)
            }
            
            var next = char.pop();
            el.innerHTML += next;
            
        }, 100);
    
    }

    var aux = 0;
    var words = ['design','experiences', 'animals', 'ux/ui', 'travel', 'web design', 'user experience', 'events']
    var typer = setInterval(function() {
        if (!words.length) {
            return clearInterval(typer)
        }
        
        if(aux >= 8)
            aux = 0
        var text = words[aux];
        el.innerHTML = ''; 
        showtext(el, text);
        aux++;
        
    }, 2150);


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

    let config = false
    $(".slide-item").on('click', function(){
        let value = $(this).attr('data-target');
        let exist = value.includes(':');
        if (exist) {
            value = value.split(':')
            $(this).parent().parent().parent().children('.slide').css('margin-left', '-'+value[0]+'%')
            $(this).parent().parent().parent().parent().css('max-width', value[1]+'rem').css('height', value[2]+'rem')
            $(this).parent().parent().parent().children('.slide').css('height', value[2]+'rem')
            config = true;
        }else{
            if (config){
                $(this).parent().parent().parent().parent().css('max-width', '24rem').css('height', '50rem')
                $(this).parent().parent().parent().children('.slide').css('height', '50rem')
                config = false
            }
            $(this).parent().parent().parent().children('.slide').css('margin-left', '-'+value+'%')
        }

        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })
});
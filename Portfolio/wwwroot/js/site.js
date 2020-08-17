
var screenWidth = window.innerWidth;


resizeElements = () => {
    var skillLevels = $('.skillLevel');
    var skills = $('.skillLevel span');
    var skillSet = $('#softwareSkills');
    var atest = skillSet.width();
    
    if (skillSet.width() > 250) {
        skillLevels.css('display', 'block');
        skills.css('float', 'left');
        skillSet.css('text-align', 'left')
        skillSet.css('padding', '6vh 5vw');
    }
    else {
        skillLevels.css('display', 'none');
        skills.css('float', 'none');
        skillSet.css('text-align', 'center');
        skillSet.css('padding', '6vh');
    }
}

$(document).ready(function () {resizeElements();})
window.addEventListener('resize', resizeElements);

var rows = ['softwareSection', 'engineeringSection', 'artistSection'];
$(window).scroll(function () {
    if (rows.length < 1){
        $(this).off('scroll');
        return
    }
    let element = document.getElementById(rows[0]);
    // var offset;
    // switch (rows[0]) {
    //     case "engineeringSection": 
    //         offset = 1000; 
    //         break;
    //     case "artistSection": 
    //         offset = 1600;
    //         break;
    //     default: 
    //         offset = 400;
    // }
    if ($(window).scrollTop() > (element.getBoundingClientRect().top) ) {

        slideCareer(rows[0]);
        $('#' + rows[0]).css('visibility', 'visible').hide().fadeIn(1500);
        rows.splice(0, 1);
    }
});

function scrollToElement(elementId) {
    var speed = calculateScrollSpeed(elementId);
    $('html,body').animate({
            scrollTop:  $('#' + elementId).offset().top}, speed);
}

calculateScrollSpeed = (elementId) => {
    var elmntToScrollTo = document.getElementById(elementId);
    var nameSection = document.getElementById('nameSection');
    var test = (elmntToScrollTo.getBoundingClientRect().top - nameSection.getBoundingClientRect().top);
    if (test < 500){
        return 1000
    }
    else if (test < 1000){
        return 2000
    }
    return 3000
}

slideCareer = (elementId) => {
    
    switch (elementId) {
        case 'softwareSection':
            $({x: -200}).animate({x: 0}, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $('#' + elementId).css({transform: 'translateX(' + this.x + 'px)'});
                }
            });
            
            setTimeout(function() {
            $('#softwareSkills').css('visibility', 'visible').hide().fadeIn(2500);
            $({x: -400}).animate({x: 0}, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                    $('#softwareSkills').css({transform: 'translateX(' + this.x + 'px)'});
                }
            });
            }, 1000);
            
            break;
        case 'engineeringSection':
            $({x: 200}).animate({x: 0}, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $('#' + elementId).css({transform: 'translateX(' + this.x + 'px)'});
                }
            });

            setTimeout(function() {
                $('#engProjects').css('visibility', 'visible').hide().fadeIn(2500);
                $({x: 400}).animate({x: 0}, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        $('#engProjects').css({transform: 'translateX(' + this.x + 'px)'});
                    }
                });
            }, 1000);
            break;
        case 'artistSection':
            $({y: 200}).animate({y: 0}, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $('#' + elementId).css({transform: 'translateY(' + this.y + 'px)'});
                }
            });
            break;
        // case 'lookAtMe':
        //     $({x: 200}).animate({x: 0}, {
        //         duration: 2000,
        //         easing: 'swing',
        //         step: function () {
        //             $('#' + elementId).css({transform: 'translateX(' + this.x + 'px)'});
        //         }
        //     });
        //     break;
    }
    
}



var shouldScroll = true;

scrollArtLeft = () => {
    var firstChild = $('#slide-track div:first-child').clone();
    firstChild.appendTo($('#slide-track'));
    $('#slide-track div:first-child').remove();
}

scrollModalLeft = () => {
    var firstChild = $('#modal-slide-track div:first-child').clone();
    firstChild.appendTo($('#modal-slide-track'));
    $('#modal-slide-track div:first-child').remove();
}

autoScrollArt = () => {
    if (shouldScroll){
        var firstChild = $('#slide-track div:first-child').clone();
        $({x: 0}).animate({x: -200}, {
            duration: 2000,
            easing: 'linear',
            step: function () {
                $('#slide-track').css({transform: 'translateX(' + this.x + 'px)'});
            }
        });
        firstChild.appendTo($('#slide-track'));
        $('#slide-track div:first-child').remove();
    }

};

scrollArtRight = () => {
    var lastChild = $('#slide-track div:last-child').clone();
    lastChild.prependTo($('#slide-track'));
    $('#slide-track div:last-child').remove();
}

scrollModalRight = () => {
    var lastChild = $('#modal-slide-track div:last-child').clone();
    lastChild.prependTo($('#modal-slide-track'));
    $('#modal-slide-track div:last-child').remove();
}

window.addEventListener('keydown', function(event){
    const direction = event.key;
    if (artModal.style.display === "block"){
        switch (direction) {
            case "ArrowLeft":
                scrollModalLeft();
                break;
            case "ArrowRight":
                scrollModalRight();
                break;
        }
    }
    else{
        switch (direction) {
            case "ArrowLeft":
                scrollArtLeft();
                break;
            case "ArrowRight":
                scrollArtRight();
                break;
        }
    }
})

$('#slider').mouseenter(() => shouldScroll = false);
$('#slider').mouseleave(() => shouldScroll = true);

$('#scrollArtLeft').click(function(){shouldScroll = true; scrollArtLeft(); shouldScroll = false; wasLeft = true;});
$('#scrollArtRight').click(scrollArtRight);

$('#scrollModalLeft').click(scrollModalLeft);
$('#scrollModalRight').click(scrollModalRight);

var artModal = document.getElementById("artModal");
document.getElementById('closeArt').addEventListener('click', () => artModal.style.display = "none");

var modalImgWidth = -600;
getFirstPieceToShow =(initialPieceName)=> {
    var artPieceIds = $('#modal-slide-track').children().map(function () {return this.id;});
    // the below code shouldn't be necessary but for some reason the indexOf function is not working on this string array
    var initialIndex = 0;
    for (var i = 0; i < artPieceIds.length; i++){
        if (artPieceIds[i] === initialPieceName) {
            initialIndex = i; }
    }
    var x = initialIndex * modalImgWidth;
    $('#modal-slide-track').css({transform: 'translateX(' + x + 'px)'});
}

function showArtModal(initialPieceName) {
    getFirstPieceToShow(initialPieceName);
    artModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target === artModal) {
        artModal.style.display = "none";
    }
}

// @Html.ActionLink("help documentation", "Help", new { id = @Model.Id }, new { target = "_blank" })
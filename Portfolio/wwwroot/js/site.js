
var screenWidth = window.innerWidth;
var rows = ['softwareSection', 'engineeringSection', 'leaderSection', 'artistSection'];
var shouldScroll = true;
var leaderRoles = document.getElementsByClassName('leaderRole');

var biaxProj = document.getElementById('biaxialRender');
var solarProj = document.getElementById('solarRender');
var scisProj = document.getElementById('scissorRender');
var marbProj = document.getElementById('marbleRender');

var biaxHeader = document.getElementById('biaxialHeader');
var solarHeader = document.getElementById('solarHeader');
var scisHeader = document.getElementById('scissorHeader');
var marbHeader = document.getElementById('marbleHeader');


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


$(window).scroll(function () {
    if (rows.length < 1){
        $(this).off('scroll');
        return
    }
    let element = document.getElementById(rows[0]);
    var offset;
    switch (rows[0]) {
        case "engineeringSection": 
            offset = 1000; 
            break;
        case 'leaderSection':
            offset = 1700;
            break;
        case "artistSection": 
            offset = 2800;
            break;
        default: 
            offset = 200;
    }
    // var window = $(window).scrollTop();
    // var top = element.getBoundingClientRect().top + offset;
    
    
    if ($(window).scrollTop() > (element.getBoundingClientRect().top + offset) ) {

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
    debugger;
    if (test < 1200){
        return 2000
    }
    else if (test < 2200){
        return 3000
    }
    else if (test < 3200){
        return 3000
    }
    
    return 4000
    
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
        case 'leaderSection':
            
            var wait = 0;
            for (var i = 0; i < leaderRoles.length; i++){
                setTimeout((function(e) {
                    return function() {
                        var id = '#' + leaderRoles[e].id;
                        $(id).css('visibility', 'visible').hide().fadeIn(2500);
                        $({x: -300}).animate({x: 0}, {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $(id).css({transform: 'translateX(' + this.x + 'px)'});
                            }
                        });
                    }
                })(i), wait);
                
                wait += 1000;
            }
            
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
    }
    
}


openProjectModal = () => {
    document.getElementById('pageWrapper').className = 'blur-filter';
    document.getElementById('projectModal').style.display = 'block';
    
};
closeProjectModal = () => {
    document.getElementById('projectModal').style.display = 'none';
    document.getElementById('pageWrapper').className = '';
};

showProject = (project) => {
    biaxProj.style.display = 'none';
    solarProj.style.display = 'none';
    scisProj.style.display = 'none';
    marbProj.style.display = 'none';
    biaxHeader.style.color = 'black';
    solarHeader.style.color = 'black';
    scisHeader.style.color = 'black';
    marbHeader.style.color = 'black';
    
    var highlight = "rgb(236, 178, 154)";
    
    switch (project) {
        case 'biaxial':
            biaxProj.style.display = 'flex';
            biaxHeader.style.color = highlight;
            break;
        case 'solar':
            solarProj.style.display = 'flex';
            solarHeader.style.color = highlight;
            break;
        case 'scissor':
            scisProj.style.display = 'flex';
            scisHeader.style.color = highlight;
            break;
        case 'marble':
            marbProj.style.display = 'flex';
            marbHeader.style.color = highlight;
            break
        default:
            biaxProj.style.display = 'flex';
            biaxHeader.style.color = highlight;
    }
}

$('#biaxialLink').click(function () {
    openProjectModal();
    showProject('biaxial');
})

$('#solarLink').click(function () {
    openProjectModal();
    showProject('solar');
})

$('#scissorLink').click(function () {
    openProjectModal();
    showProject('scissor');
})

$('#marbleLink').click(function () {
    openProjectModal();
    showProject('marble');
})



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
    if (artModal?.style.display === "block"){
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
    document.getElementById('closeArt').addEventListener('click', () => artModal.style.display = "none");
}

window.onclick = function(event) {
    if (event.target === artModal) {
        artModal.style.display = "none";
    }
}


///////////  Google Email Stuff ///////////

var dataFilled;

    // get all data in form and return object
    function getFormData(form) {
        var elements = form.elements;
        var honeypot;

        var fields = Object.keys(elements).filter(function(k) {
            if (elements[k].name === "honeypot") {
                honeypot = elements[k].value;
                return false;
            }
            return true;
        }).map(function(k) {
            if(elements[k].name !== undefined) {
                return elements[k].name;
                // special case for Edge's html collection
            }else if(elements[k].length > 0){
                return elements[k].item(0).name;
            }
        }).filter(function(item, pos, self) {
            return self.indexOf(item) == pos && item;
        });

        var formData = {};
        fields.forEach(function(name){
            var element = elements[name];
            // singular form elements just have one value
            formData[name] = element.value;

            // when our element has multiple items, get their values
            if (element.length) {
                var data = [];
                for (var i = 0; i < element.length; i++) {
                    var item = element.item(i);
                    if (item.checked || item.selected) {
                        data.push(item.value);
                    }
                }
                formData[name] = data.join(', ');
            }
            
            if (formData[name] === "" ){
                element.style.boxShadow = "0 0 6px #ff0000ad, inset 0 0 4px #719ECE " ;
                dataFilled = false;
            }
            else {
                element.style.boxShadow = "inset 0 0 4px #719ECE" ;
            }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail
            = form.dataset.email || ""; // no email by default

        return {data: formData, honeypot: honeypot};
    }

    function handleFormSubmit(event) {  // handles form submit without any jquery
        
        event.preventDefault();           // we are submitting via xhr below
        var form = event.target;
        var formData = getFormData(form);
        if (!dataFilled) {return alert("You missed a spot") }
        
        var data = formData.data;

        // If a honeypot field is filled, assume it was done so by a spam bot.
        if (formData.honeypot) {
            return false;
        }

        disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                form.reset();
                var formElements = document.getElementById('emailInfo');
                if (formElements) {
                    formElements.style.display = "none"; // hide form
                }
                var thankYouMessage = document.getElementById('thankyou_message')
                if (thankYouMessage) {
                    thankYouMessage.style.display = "block";
                }
            }
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
    }

    function loaded() {
        // bind to the submit event of our form
        var forms = document.querySelectorAll("form.gform");
        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", handleFormSubmit, false);
        }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);

    function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }

    $('#clientName').keydown(function(){
        document.getElementById('clientName').style.boxShadow = "inset 0 0 4px #719ECE";
    });
$('#clientAddress').keydown(function(){
    document.getElementById('clientAddress').style.boxShadow = "inset 0 0 4px #719ECE";
});
$('#clientMessage').keydown(function(){
    document.getElementById('clientMessage').style.boxShadow = "inset 0 0 4px #719ECE";
});


var TO_ADDRESS = "youngisa12@gmail.com";

// spit out all the keys/values from the form in HTML for email
// uses an array of keys if provided or the object to determine field order
function formatMailBody(obj, order) {
    var result = "";
    if (!order) {
        order = Object.keys(obj);
    }

    // loop over all keys in the ordered form data
    for (var idx in order) {
        var key = order[idx];
        result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + sanitizeInput(obj[key]) + "</div>";
        // for every key, concatenate an `<h4 />`/`<div />` pairing of the key name and its value, 
        // and append it to the `result` string created at the start.
    }
    return result; // once the looping is done, `result` will be one long string to put in the email body
}

// sanitize content from the user - trust no one 
// ref: https://developers.google.com/apps-script/reference/html/html-output#appendUntrusted(String)
function sanitizeInput(rawInput) {
    var placeholder = HtmlService.createHtmlOutput(" ");
    placeholder.appendUntrusted(rawInput);

    return placeholder.getContent();
}

function doPost(e) {

    try {
        Logger.log(e); // the Google Script version of console.log see: Class Logger
        record_data(e);

        // shorter name for form data
        var mailData = e.parameters;

        // names and order of form elements (if set)
        var orderParameter = e.parameters.formDataNameOrder;
        var dataOrder;
        if (orderParameter) {
            dataOrder = JSON.parse(orderParameter);
        }

        // determine recepient of the email
        // if you have your email uncommented above, it uses that `TO_ADDRESS`
        // otherwise, it defaults to the email provided by the form's data attribute
        var sendEmailTo = (typeof TO_ADDRESS !== "undefined") ? TO_ADDRESS : mailData.formGoogleSendEmail;

        // send email if to address is set
        if (sendEmailTo) {
            MailApp.sendEmail({
                to: String(sendEmailTo),
                subject: "Email From Portfolio",
                replyTo: String(mailData.email),
                htmlBody: formatMailBody(mailData, dataOrder)
            });
        }

        return ContentService    // return json success results
            .createTextOutput(
                JSON.stringify({"result":"success",
                    "data": JSON.stringify(e.parameters) }))
            .setMimeType(ContentService.MimeType.JSON);
    } catch(error) { // if error return this
        Logger.log(error);
        return ContentService
            .createTextOutput(JSON.stringify({"result":"error", "error": error}))
            .setMimeType(ContentService.MimeType.JSON);
    }
}


/**
 * record_data inserts the data received from the html form submission
 * e is the data received from the POST
 */
function record_data(e) {
    var lock = LockService.getDocumentLock();
    lock.waitLock(30000); // hold off up to 30 sec to avoid concurrent writing

    try {
        Logger.log(JSON.stringify(e)); // log the POST data in case we need to debug it

        // select the 'responses' sheet by default
        var doc = SpreadsheetApp.getActiveSpreadsheet();
        var sheetName = e.parameters.formGoogleSheetName || "responses";
        var sheet = doc.getSheetByName(sheetName);

        var oldHeader = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        var newHeader = oldHeader.slice();
        var fieldsFromForm = getDataColumns(e.parameters);
        var row = [new Date()]; // first element in the row should always be a timestamp

        // loop through the header columns
        for (var i = 1; i < oldHeader.length; i++) { // start at 1 to avoid Timestamp column
            var field = oldHeader[i];
            var output = getFieldFromData(field, e.parameters);
            row.push(output);

            // mark as stored by removing from form fields
            var formIndex = fieldsFromForm.indexOf(field);
            if (formIndex > -1) {
                fieldsFromForm.splice(formIndex, 1);
            }
        }

        // set any new fields in our form
        for (var i = 0; i < fieldsFromForm.length; i++) {
            var field = fieldsFromForm[i];
            var output = getFieldFromData(field, e.parameters);
            row.push(output);
            newHeader.push(field);
        }

        // more efficient to set values as [][] array than individually
        var nextRow = sheet.getLastRow() + 1; // get next row
        sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);

        // update header row with any new data
        if (newHeader.length > oldHeader.length) {
            sheet.getRange(1, 1, 1, newHeader.length).setValues([newHeader]);
        }
    }
    catch(error) {
        Logger.log(error);
    }
    finally {
        lock.releaseLock();
        return;
    }

}

function getDataColumns(data) {
    return Object.keys(data).filter(function(column) {
        return !(column === 'formDataNameOrder' || column === 'formGoogleSheetName' || column === 'formGoogleSendEmail' || column === 'honeypot');
    });
}

function getFieldFromData(field, data) {
    var values = data[field] || '';
    var output = values.join ? values.join(', ') : values;
    return output;
}


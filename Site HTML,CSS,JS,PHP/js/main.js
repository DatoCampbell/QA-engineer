var en = {
    'HOW': 'HOW IT WORKS',
    'pri': 'PRISE',
    'we': 'We will destroy your competitors website!',
    'DDOS': 'DDOS attack, removal of the site from Google search,complete cessation of the site.',
    'ord': 'ORDER',
    'ddat': 'DDos Attack',
    'google': 'Google blacklist',
    'complete': 'Complete removal of the site',
    'temp': 'Temporary solution for the short term downtime of your business competitors website. Suitable if a competitor has planned some kind of promotion or event.',
    'the site': 'The site will completely disappear from Google search. The competitor will not be able to launch contextual advertising. An effective way to refer new customers to you.',
    'the metod': 'The method is not suitable for large companies, but small and mid-size enterprises may no longer be able to recover.',
    'HOW2': 'HOW IT WORKS',
    'analysis': 'Analysis and search for weaknesses',
    'at the': 'At the first stage, we conduct a complete analysis of your competitors entire business, search for weaknesses on the side of the competitors website, FTP users, website database, control panel administrators and hosting. We also choose an attack strategy.',
    'carrying': 'Carrying out an attack',
    'using': 'Using the information received, we carry out an attack on the website of your business competitor. This can be either a DDOS attack or an intrusion into the sites administrative system with the complete destruction of all data along with backups.',
    'result': 'Result Tracking',
    'an important': 'An important step is to monitor the target after the attack. This allows us to make sure that your competitor will not be able to restore work in the near future.',
    'leave': 'Leave your contacts, we will contact you.',
    // 'prices': 'Prices',
    'choose the tarrif': ' Choose the tariff that suits you, contact us and order an attack on a business competitor',
    'ddos attack': 'DDos Attack',
    'from': 'from $300/72h',
    'servers': 'Servers will receive an unbearable load, which will cause the site to shut down for the duration of the attack.No one will be able to use the site until the ddos ​​attack stops.',
    'order2': 'ORDER',
    'google blacklist': 'Google blacklist',
    'from2': 'from $550',
    'removal from': 'Complete removal from Google search',
    'inability': 'Inability to launch contextual advertising',
    'users will': 'Users will be able to find the site only knowing its address',
    'the only': 'The only option to restore the site in the search is a complete change of the domain name.',
    'order3': 'ORDER',
    'us': 'Contact us:'


};
var de = {
    'HOW': 'WIE ES FUNKTIONIERT',
    'pri': 'PREISE',
    'we': 'Wir zerstören die Website Ihres Konkurrenten!',
    'DDOS': 'DDOS-Attacke, Entfernung der Seite aus der Google-Suche, vollständige Schließung der Seite.',
    'ord': 'BEFEHIL',
    'ddat': 'DDos-Angriff',
    'google': 'Schwarze Liste von Google',
    'complete': 'Vollständige Entfernung der Website',
    'temp': 'Temporäre Lösung für den kurzfristigen Ausfall der Website Ihres Konkurrenten. Geeignet, wenn ein Wettbewerber eine Art Promotion oder Veranstaltung geplant hat.',
    'the site': 'Die Website wird vollständig aus der Google-Suche verschwinden. Der Konkurrent wird keine kontextbezogene Werbung starten können. Ein effektiver Weg, um neue Kunden an Sie zu verweisen.',
    'the metod': 'Für große Unternehmen ist die Methode nicht geeignet, kleine und mittelständische Unternehmen können sich jedoch möglicherweise nicht mehr erholen.',
    'HOW2': 'WIE ES FUNKTIONIERT',
    'analysis': 'Analyse und Suche nach Schwachstellen',
    'at the': 'In der ersten Phase führen wir eine vollständige Analyse des gesamten Geschäfts Ihres Konkurrenten durch, suchen nach Schwachstellen auf der Website des Konkurrenten, nach FTP-Benutzern, Website-Datenbank, Administratoren des Control Panels und Hosting. Wir wählen auch eine Angriffsstrategie.',
    'carrying': 'Ausführen eines Angriffs',
    'using': 'Anhand der erhaltenen Informationen führen wir einen Angriff auf die Website Ihres geschäftlichen Konkurrenten durch. Dies kann entweder ein DDOS-Angriff oder ein Eindringen in das Verwaltungssystem der Site mit der vollständigen Zerstörung aller Daten zusammen mit Backups sein.',
    'result': 'Ergebnisverfolgung',
    'an important': 'Ein wichtiger Schritt ist die Überwachung des Ziels nach dem Angriff. Dadurch können wir sicherstellen, dass Ihr Konkurrent nicht in der Lage sein wird, die Arbeit in naher Zukunft wiederherzustellen.',
    'leave': 'Hinterlassen Sie Ihre Kontakte, wir werden uns mit Ihnen in Verbindung setzen.',
    // 'prices': 'Preise',
    'choose the tarrif': ' Choose the tariff that suits you, contact us and order an attack on a business competitor',
    'ddos attack': 'DDos-Angriff',
    'from': 'ab $300/72h',
    'servers': 'Die Server werden einer unerträglichen Last ausgesetzt, was dazu führt, dass die Site für die Dauer des Angriffs heruntergefahren wird. Niemand kann die Site nutzen, bis der DDoS-Angriff beendet ist.',
    'order2': 'BEFEHIL',
    'google blacklist': 'Schwarze Liste von Google',
    'from2': 'ab 550 $',
    'removal from': 'Vollständige Entfernung aus der Google-Suche',
    'inability': 'Unfähigkeit, kontextbezogene Werbung zu starten',
    'users will': 'Benutzer können die Site nur finden, wenn sie ihre Adresse kennen',
    'the only': 'Die einzige Möglichkeit, die Seite in der Suche wiederherzustellen, ist eine vollständige Änderung des Domainnamens.',
    'order3': 'BEFEHIL',
    'us': 'Kontaktiere uns:'

};

function changeLang(lan) {
    lengthObj = Object.getOwnPropertyNames(lan).length;
    for (var i = 0; i <= lengthObj - 1; i++) {
        objKey = Object.getOwnPropertyNames(lan)[i];
        document.getElementById(objKey).innerText = func(objKey);
    }

    function func(a) {
        for (key in lan) {
            if (key == a) {
                return (lan[key]);
            }
        }
    }
}



// const select = document.querySelector('select');
// const allLang = ['en', 'de'];

// select.addEventListener('change', changeURLLanguage);

// function changeURLLanguage() {
//     let lang = select.value;
//     location.href = window.location.pathname + '#' + lang;
//     location.reload();
// }

// function changeLang() {
//     let hash = window.location.hash;
//     hash = hash.substr(1);
//     console.log(hash);
//     if (!allLang.includes(hash)) {
//         location.href = window.location.pathname + '#' + '#en';
//     }
// }

// changeURLLanguage();






// -------------------------------------------------------------------------

window.addEventListener('scroll', e => {
    let header__top = document.getElementById('header__top').classList
    let active_class = "header__top_scrolled"

    if (pageYOffset > 1) header__top.add(active_class)
    else header__top.remove(active_class)
})







// -------------------------------------------------------------------------
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

if (iconMenu) {
    menuBody.addEventListener("click", function(e) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    });
}




// -------------------------------------------------------------------------
const openPopUp = document.getElementById('open_pop_up');
const openPopUp2 = document.getElementById('open_pop_up_2');
const openPopUp3 = document.getElementById('open_pop_up_3');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');

})

openPopUp2.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

openPopUp3.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})



// -------------------------------------------------------------------------




$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

// -------------------------------------------------------------------------


$('.telegram-form').on('submit', function(event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled', '');

    data.append('email', $('[name="email"]', form).val());
    data.append('name', $('[name="name"]', form).val());
    data.append('login', $('[name="login"]', form).val());
    data.append('select', $('[name="select"]', form).val());



    files.each(function(key, file) {
        let cont = file.files;
        if (cont) {
            $.each(cont, function(key, value) {
                data.append(key, value);
            });
        }
    });

    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if (myXhr.upload) {
                myXhr.upload.addEventListener('progress', function(e) {
                    if (e.lengthComputable) {
                        let percentage = (e.loaded / e.total) * 100;
                        percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html(percentage + '%');
                    }
                }, false);
            }

            return myXhr;
        },
        error: function(jqXHR, textStatus) {

        },
        complete: function() {

            console.log('Complete')
            form.reset()
        }
    });

    return false;
});
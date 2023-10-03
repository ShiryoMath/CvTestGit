//Anim de la fiche d'id
$(document).ready( function() {
    var nom = $("#nom");
    var etud = $("#etud");

    nom.addClass("anim-nom");
    nom.css("opacity", 1);
    setTimeout( function() {
        etud.addClass("anim-etud");
        etud.css("opacity", 1);
    }, 3000);

});

//Anim des barres
$(document).ready(function() {
    const progressBarFr = $('.barreFr');
  
    function updateProgressBarFr() {
      const progress = 100;
      progressBarFr.css('width', progress + '%');
    }
  
    updateProgressBarFr();
    progressBarFr.addClass('animated');
  

    const progressBarEn = $('.barreEn');
  
    function updateProgressBarEn() {
      const progress = 75;
      progressBarEn.css('width', progress + '%');
    }
  
    updateProgressBarEn();
    progressBarEn.addClass('animated');


    const progressBarWin = $('.barreWin');
  
    function updateProgressBarWin() {
      const progress = 90;
      progressBarWin.css('width', progress + '%');
    }
  
    updateProgressBarWin();
    progressBarWin.addClass('animated');


    const progressBarSec = $('.barreSec');
  
    function updateProgressBarSec() {
      const progress = 80;
      progressBarSec.css('width', progress + '%');
    }
  
    updateProgressBarSec();
    progressBarSec.addClass('animated');


    const progressBarCis = $('.barreCis');
  
    function updateProgressBarCis() {
      const progress = 70;
      progressBarCis.css('width', progress + '%');
    }
  
    updateProgressBarCis();
    progressBarCis.addClass('animated');


    const progressBarRes = $('.barreRes');
  
    function updateProgressBarRes() {
      const progress = 65;
      progressBarRes.css('width', progress + '%');
    }

    updateProgressBarRes();
    progressBarRes.addClass('animated');


    const progressBarPro = $('.barrePro');
  
    function updateProgressBarPro() {
      const progress = 30;
      progressBarPro.css('width', progress + '%');
    }
  
    updateProgressBarPro();
    progressBarPro.addClass('animated');
});





    var typed = new Typed(".auto-type", {
        strings:["WEB DEVELOPER","FRONTEND-DEVELOPER","BACKEND-DEVELOPER","WEB DESINGER"],
        typeSpeed:150,
        backSpeed:150,
        loop:true
    })



    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname) {
      for (tablink of tablinks) {
        tablink.classList.remove("active-link");
      }
      for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab")

    }
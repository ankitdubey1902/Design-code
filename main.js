var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {    
        if(window.pageYOffset > 20){
            document.getElementById("container").classList.add("box-shad");
        }
        else{
            document.getElementById("container").classList.remove("box-shad");
        }
      };
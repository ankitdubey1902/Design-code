var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {    
        if(window.pageYOffset > 20){
            document.getElementById("container").classList.add("box-shad");
            document.getElementById("logo").innerHTML = "DC";            
        }
        else{
            document.getElementById("container").classList.remove("box-shad");
            document.getElementById("logo").innerHTML = "Design Code";            
        }
      };

      var scene = document.getElementById('img');
      var parallax = new Parallax(scene);      
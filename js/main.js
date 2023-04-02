const toggle = document.getElementById('toggle');
  const sidebar = document.getElementById('sidebar');


  document.onclick = function (e) {
    if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
      toggle.classList.remove('active')
      sidebar.classList.remove('active')
    }
  }


  toggle.onclick = function () {
    toggle.classList.toggle('active')
    sidebar.classList.toggle('active')
  }


  e=true
   function changer() {
       if(e){
           document.getElementById("password").setAttribute("type","text");
           document.getElementById("eye").src="image/eyeslashfill.svg";
           e=false
       }
       else{
             document.getElementById("password").setAttribute("type", "password");
           document.getElementById("eye").src = "image/eyefill.svg";
           e = true
       }
   }  
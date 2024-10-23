console.log(Date());
function dateAndTime(){
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var dd=date.getDate();
    var mo=date.getMonth();
    var allMo=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    mo=allMo[mo];
    var yy=date.getFullYear();
    var dy=date.getDay();
    var images=["background-3390802_640-5.jpg","background-image-3778266_640-6","fantasy-3598765_640-3.jpg","stamens-6472927_640-1","sunset-1373171_640-4.jpg","lake-7301021_640-7.jpg"];
    document.body.style.backgroundImage=`url(../../assets/images/${images[dy]})`;
    var allDay=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    dy=allDay[dy];
    var am_pm="Am";
    if(hh>=12){
        am_pm="Pm"
        if(hh>12){
            hh-=12;
        }
    }
    if(hh==0){
        hh=12;
    }
    if(hh<10){
        hh="0"+hh
    }
    if(ss<10){
        ss="0"+ss
    }
    if(mm<10){
        mm="0"+mm;
    }
    document.getElementById("time").innerHTML=`${hh}:${mm} ${am_pm}`;
    document.getElementById("dd").innerHTML=`${dd}-${mo}-${yy}`;
    document.getElementById("day").innerHTML=dy;
    document.getElementById("sec").innerHTML=ss

}
setInterval(dateAndTime,1000);
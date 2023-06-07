function checkAttendance(x) {
    if(x === "Nagmahal" || x == "Nasaktan" || x === "Minahal"){
   
       return "Present"
   
    }else{
   
       return "Absent"
    }
   }
   
   console.log(checkAttendance("Nagmahal"))
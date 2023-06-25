const inputData = document.querySelector("input");
const formData = document.querySelector("form");

// For Celsius

const cel_fr = (cel) =>{
   const fr = (cel * 9/5) + 32;
   return fr ;
}

const cel_Kr = (cel) =>{
    const Kr = (cel * 1) + 273.15;
    return Kr ;
}

// For Kelvin


const ke_cel = (kel)=>{
    const Ce = kel - 273;
    return Ce;
}
const ke_far = (kel)=>{
   const far =  ((kel-273) * 9/5 + 32);
   return far;
}

//for Fahrenheit

const Far_cel = (far)=>{
 const cel = (far - 32) * 5/9;
 return cel;
}

const Far_ke = (far)=>{
   const ke = (far - 32) * 5/9 + 273;
   return ke;
}
formData.addEventListener(
    "submit",
    function(e){
        e.preventDefault();
        a(inputData.value);

        if(inputData.value ==  ""){
           alert("Value is Null")
        }
    }
    
)

const a = (e) => {


    const degree = document.querySelector("#deg");

    const equal = degree.options[degree.selectedIndex].value;
 
    if (equal == 'cel') {
     const  answer = cel_fr(e);
    //  console.log(answer + " Far") ;

     const answer2 = cel_Kr(e);
      console.log(answer2 + " Ke");

     document.querySelector("#result").innerHTML = 
     `<div id="result">
     ${answer} Fahrenheit
     </div>
    <div id="result2"> ${answer2} Kelvin </div>`


    }
   else if (equal == 'Ke') {
        
    const  answer = ke_cel(e);
    const answer2 = ke_far(e);
    //  console.log(answer + " Far") ;

  
    //   console.log(answer2 + " Ke");

    document.querySelector("#result").innerHTML = 
     `<div id="result">
     ${answer} Celsius
     </div>
   <div id="result2"> ${answer2} Fahrenheit </div>`   
    }
    else  {
        const  answer = Far_cel(e);
        const answer2 = Far_ke(e);
        document.querySelector("#result").innerHTML = 
        `<div id="result">
        ${answer} Celsius
        </div>
      <div id="result2"> ${answer2} Kelvin </div>`

    }
}

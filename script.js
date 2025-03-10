

async function fetchData(){
   
    try{

        const srcCountry = document.getElementById("instruct").value;
        
        const response = await fetch(`https://restcountries.com/v3.1/name/${srcCountry}`);

        if (!response.ok){
            throw new Error("We are unable to can");
        }

        const data = await response.json();
        const flagPic = data[0].flags.png;
        const imgElement = document.getElementById("srcFlag");

        imgElement.src = flagPic;
        imgElement.style.display = "block"

        const capital = data[0].capital;
        document.getElementById('capital').textContent = "Capital: " + capital;
        
        const population = data[0].population;
        document.getElementById('pop').textContent = "Population: " + population;

        const region = data[0].region;
        document.getElementById('reg').textContent = "Region: " + region;

        for (i = 0; i < data[0].borders.length; i++){

            const Bresponse = await fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[i]}`);
            
            const dataCountry = await Bresponse.json();
            const flag = dataCountry[0].flags.png;

            let container = document.getElementById('borders');

            let borderImgElement = document.createElement('img')
            borderImgElement.src = flag;
            borderImgElement.style.display = "block";

            container.appendChild(borderImgElement);
        }
    }
    catch(error){
        console.error(error);
        alert("Error " + error.message);
    }
}


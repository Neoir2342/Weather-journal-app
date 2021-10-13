/* Global Variables */
const apiKey = '82647eb50ee5337b2a068fa3c00bdd32'
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 + '.'+ d.getDate()+'.'+ d.getFullYear();

const button = document.getElementById('generate').addEventListener('click', async ()=> {
    try { 
    const zipCode = document.getElementById('zip').value
    const content = document.getElementById('feelings').value
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`
    if(!zipCode) {
        alert('Enter zip code')
        return
    }

    if(!content) {
        alert('Enter your feelings')
        return
    }

        const res = await fetch(apiUrl)
        const weatherTemp = await res.json()
        const temp = weatherTemp.main.temp


        await fetch('/postWeatherData', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: newDate,
                temp: temp,
                content: content
            
            })
         });
     
  const newRes = await fetch('getWeatherData')
  const finalRes = await newRes.json()
  console.log(finalRes);
    }catch(error) {
    console.log('error', error);

    } 
})

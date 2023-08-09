console.log('script')

var latitude, longitude;
// check if geolocation is available
if ("geolocation" in navigator) {
    // get current position
    navigator.geolocation.getCurrentPosition(function(position) {
    // access latitude and longitude
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    
    });
} else {
    alert("Geolocation is not available.");
}

const ageInput = document.getElementById("age");
console.log(ageInput)
const ageValue = ageInput.value || "45";

// Get the value of a select element with the specified ID
const sexSelect = document.getElementById("sex");
const sexValue = sexSelect.value;

const cpSelect = document.getElementById("cp");
const cpValue = cpSelect.value;

// Get the value of an input element with a default value
const trestbpsInput = document.getElementById("trestbps");
const trestbpsValue = trestbpsInput.value || "110";

// Get the value of an input element with a default value
const cholInput = document.getElementById("chol");
const cholValue = cholInput.value || "335";

// Get the value of a radio button element
const fbsRadio = document.querySelector('input[name="fbs"]:checked');
const fbsValue = fbsRadio.value;

// Get the value of a select element with the specified ID
const restecgSelect = document.getElementById("restecg");
const restecgValue = restecgSelect.value;

// Get the value of an input element with a default value
const thalachInput = document.getElementById("thalach");
const thalachValue = thalachInput.value || "143";

// Get the value of a radio button element
const exangRadio = document.querySelector('input[name="exang"]:checked');
const exangValue = exangRadio.value;

// Get the value of an input element with a default value
const oldpeakInput = document.getElementById("oldpeak");
const oldpeakValue = oldpeakInput.value || "3";

// Get the value of a select element with the specified ID
const slopeSelect = document.getElementById("slope");
const slopeValue = slopeSelect.value;

// Get the value of an input element with a default value
const caInput = document.getElementById("ca");
const caValue = caInput.value || "1";

// Get the value of a select element with the specified ID
const thalSelect = document.getElementById("thal");
const thalValue = thalSelect.value;
const btn = document.getElementById("btn");

console.log(btn)

btn.onclick = () => {
    console.log('clicked');
    fetch('http://127.0.0.1:5000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            age: ageValue,
            sex: sexValue,
            cp:cpValue,
            trestbps: trestbpsValue,
            chol: cholValue,
            fbs: fbsValue,
            restecg: restecgValue,
            thalach: thalachValue,
            exang: exangValue,
            oldpeak: oldpeakValue,
            slope: slopeValue,
            ca: caValue,
            thal: thalValue
        })
    })
        .then(response => response.json())
        .then(data => {
            const val = parseInt(data)

            if(val < 2){
                alert("You have low chance of heart disease. But Please visit to nearest clinics")
            }
            else{
                alert("You have high chance of heart disease. Please visit to nearest clinics")
            }
            window.location.href = "http://127.0.0.1:5500/result.html?lat="+latitude+"&long="+longitude+"&result="+data;
        })
        .catch(error => console.error(error));
}




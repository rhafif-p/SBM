const client = mqtt.connect("wss://public:public@public.cloud.shiftr.io", {
    clientId: "javascript"
});
client.on("connect", function() {
    console.log("connected!");
    connectTemperature();
    connectHumid();
    connectSpeed();
    connectDistance();
    connectTurn();

});

let mqttTemperatureValue = 0;
let mqttHumidValue = 0;
let mqttSpeedValue = 0;
let mqttDistanceValue = 0;
let mqttTurnValue = 0;

function connectTemperature(){
    topic = "sensor/temperature";
    client.subscribe(topic);
    client.on("message", function(topic, message) {
        if (topic === "sensor/temperature") {
            // Update the global variable with the MQTT value
            mqttTemperatureValue = parseInt(message.toString());
            console.log(topic + ": " + message.toString());
            temperature()
        }
    });
}

function connectHumid(){
    topic = "sensor/humidity";
    client.subscribe(topic);
    client.on("message", function(topic, message) {
        if (topic === "sensor/humidity") {
            // Update the global variable with the MQTT value
            mqttHumidValue = parseInt(message.toString());
            console.log(topic + ": " + message.toString());
            humidity();
        }
    });
}


function connectDistance(){
    topic = "sensor/distance";
    client.subscribe(topic);
    client.on("message", function(topic, message) {
        if (topic === "sensor/distance") {
            // Update the global variable with the MQTT value
            mqttDistanceValue = parseFloat(message.toString());
            console.log(topic + ": " + mqttDistanceValue);
            distance();
        }
    });
}

function connectSpeed(){
    topic = "sensor/speed";
    client.subscribe(topic);
    client.on("message", function(topic, message) {
        if (topic === "sensor/speed") {
            // Update the global variable with the MQTT value
            mqttSpeedValue = parseFloat(message.toString());
            console.log(topic + ": " + message.toString());
            speedGauge()
        }
    });
}
function connectTurn(){
    topic = "sensor/turn";
    client.subscribe(topic);
    client.on("message", function(topic, message){
        if(topic==="sensor/turn"){
            mqttTurnValue = parseInt(message.toString());
            incline();
        }
    });
}

// function updateProgress(s){
//     distance = s*100/12;
//     r.style.setProperty("--length", distance.toString()+"%");
// }  
// function updateTurn(theta){
//     degree = -theta;
//     r.style.setProperty("--degree", degree.toString() + "deg");
// }
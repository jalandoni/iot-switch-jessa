// basic functionalities


$(document).ready(function() {

    var client;
    var address = $("#address").val();
    client = mqtt.connect(address);




    $("#on").click(function() {
        connected = true;
        client.on("connect", function() {
            console.log("successfully connected!")
        })
        client.on("message", function(topic, payload) {
            console.log([topic, payload].join(": "));

        })
        var topic = "jessa/device/status";
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        var payload = "The device is currently on: " + time;

        client.publish(topic, payload)
        console.log(topic);
        console.log(payload);
        $("#status").val("The device is currently on");



    })

    $("#off").click(function() {
        connected = true;
        client.on("connect", function() {
            console.log("successfully connected!")
        })
        client.on("message", function(topic, payload) {
            console.log([topic, payload].join(": "));


        })
        var topic = "jessa/device/status";
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        var payload = "The device is currently off: " + time;

        client.publish(topic, payload)
        console.log(topic);
        console.log(payload);
        $("#status").val("The device is currently off ");


    })
})
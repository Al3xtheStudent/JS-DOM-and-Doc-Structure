//a class for setting up the data from dataloader
class InputData{
    //This is the creation of our data
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_preassure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eC02,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
        
    ) {
        //Thses statements define our data 
        this,time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude; 
        this.gps_altitude  = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_preassure = bmpSensor_preassure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eC02 = cssSensor_eC02;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ= accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;



    }
}

//the getData fubtion extracts the data from the dataLoader.js file
function getData(){
    var loadedData = loadData();
    return loadedData;
}

//function to setup data in the table
function dataRow(legend, value, units){
    msg = "<td>"; 
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += ":</td>";
    return msg;
}

function updateDisplay(){
    console.log("updateDisplay() started");
    //record and display time data
    theTime = new Date();
    
    //new if then statement style cond? //ifTrue : ifFalse
    console.log(theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0." + theTime.getMinutes() : theTime.getMinutes()) 
    + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
    //Update the on screen time
    document.getElementById("ClockTime").innerHTML = theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0." + theTime.getMinutes() : theTime.getMinutes()) 
    + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());
    //update table
    var timeRead = data[index].time_seconds;

    if (timeRead >= 10){
        document.getElementById("dataTable").rows["seconds"].innerHTML = 
        dataRow("Time Elapsed", data[index].time_seconds, " seconds");

        document.getElementById("dataTable").rows["latitdue"].innerHTML = 
        dataRow("latitdue", data[index].latitdue, " ");

        document.getElementById("dataTable").rows["longitude"].innerHTML = 
        dataRow("longitude", data[index].longitude, " ");

        document.getElementById("dataTable").rows["gps_altitude"].innerHTML = 
        dataRow("gps_altitude", data[index].gps_altitude, " ");

        document.getElementById("dataTable").rows["bmp_altitude"].innerHTML = 
        dataRow("bmp_altitude", data[index].bmp_altitude, " ");

        document.getElementById("dataTable").rows["bmp_preassure"].innerHTML = 
        dataRow("bmp_preassure", data[index].bmp_preassure, " ");

        document.getElementById("dataTable").rows["dig_temperature"].innerHTML = 
        dataRow("dig_temperature", data[index].dig_temperature, " ");

        document.getElementById("dataTable").rows["css_temperature"].innerHTML = 
        dataRow("css_temperature", data[index].css_temperature, " ");

        document.getElementById("dataTable").rows["css_eC02"].innerHTML = 
        dataRow("css_eC02", data[index].css_eC02, " ");

        document.getElementById("dataTable").rows["css_TVOC"].innerHTML = 
        dataRow("css_TVOC", data[index].css_TVOC, " ");

        document.getElementById("dataTable").rows["UV"].innerHTML = 
        dataRow("UV", data[index].UV, " ");

        document.getElementById("dataTable").rows["accelX"].innerHTML = 
        dataRow("accelX", data[index].accelX, " ");

        document.getElementById("dataTable").rows["accelY"].innerHTML = 
        dataRow("accelY", data[index].accelY, " ");

        document.getElementById("dataTable").rows["accelZ"].innerHTML = 
        dataRow("accelZ", data[index].accelZ, " ");

        document.getElementById("dataTable").rows["magneticX"].innerHTML = 
        dataRow("magneticX", data[index].magneticX, " ");

        document.getElementById("dataTable").rows["magneticY"].innerHTML = 
        dataRow("magneticY", data[index].magneticY, " ");

        document.getElementById("dataTable").rows["magneticZ"].innerHTML = 
        dataRow("magneticZ", data[index].magneticZ, " ");

        document.getElementById("dataTable").rows["GyroX"].innerHTML = 
        dataRow("GyroX", data[index].GyroX, " ");

        document.getElementById("dataTable").rows["GyroY"].innerHTML = 
        dataRow("GyroY", data[index].GyroY, " ");

        document.getElementById("dataTable").rows["GyroZ"].innerHTML = 
        dataRow("GyroZ", data[index].GyroZ, " ");
        

    }
    if(index < 500){
        index++;
    } else{
        index = 0;
    }
}
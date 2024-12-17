
//first add an event listener for page load
document.addEventListener("DOMContentLoaded", get_json_data, false); // get_json_data is the function name that will fire on page load

//this function is in the event listener and will execute on page load
function get_json_data() {
    hitTabs(1);
}


function hitTabs(tabnum) {
    var json_url;
    if (tabnum == 1) {
        json_url = '../resources/outdoorporce.json';
    }
    else if (tabnum == 2)//wall tiles
    {
        json_url = '../resources/walltiles.json';
    }
    else if (tabnum == 3)//nano tiles
    {
        json_url = '../resources/nano.json';
    }
    else if (tabnum == 4)//porcelain tiles
    {
        json_url = '../resources/porcelain.json';
    }
    else if (tabnum == 5)//doublecharge tiles
    {
        json_url = '../resources/dblcharge.json';
    }
    else if (tabnum == 6)//floor tiles
    {
        json_url = '../resources/floortiles.json';
    }
    // Relative URL of external json file
    //Build the XMLHttpRequest (AJAX Request)
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {//when a good response is given do this
            var data = JSON.parse(this.responseText); // convert the response to a json object
            append_json(data, tabnum);// pass the json object to the append_json function
        }
    }
    //set the request destination and type
    xmlhttp.open("GET", json_url, true);
    //set required headers for the request
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // send the request
    xmlhttp.send(); // when the request completes it will execute the code in onreadystatechange section    
}


function append_json(object, tabnum) {
    var table;
    if (tabnum == 1) {//pocelain
        //packing
        table = document.getElementById('tblpackingporcdetail');
        $(".rowPClass").remove();
        for (var i = 0; i < object.packing.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'rowPClass');
            tr.innerHTML = '<td>' + object.packing[i].SIZE + '</td>' +
                '<td>' + object.packing[i].BOXWEIGHT + '</td>' +
                '<td>' + object.packing[i].PCSBOX + '</td>' +
                '<td>' + object.packing[i].SQMBOX + '</td>' +
                '<td>' + object.packing[i].SQFTBOX + '</td>' +
                '<td>' + object.packing[i].BOXPALLET + '</td>' +
                '<td>' + object.packing[i].PALLETCTN + '</td>' +
                '<td>' + object.packing[i].BOXESCTN + '</td>' +
                '<td>' + object.packing[i].TOTALSQMCTN + '</td>' +
                '<td>' + object.packing[i].CTNWEIGHT + '</td>';
            table.appendChild(tr);
        }

        //for technical
        table = document.getElementById('tbltechporcdetail');
        $(".rowTClass").remove();
        for (var i = 0; i < object.tech.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'rowTClass');
            tr.innerHTML = '<td>' + object.tech[i].DESCRIPTION + '</td>' +
                '<td>' + object.tech[i].ISO + '</td>' +
                '<td>' + object.tech[i].MEAN + '</td>' +
                '<td>' + object.tech[i].TESTMETHOD + '</td>';
            table.appendChild(tr);
        }
    }
    else if (tabnum == 2) {//walltiles
        table = document.getElementById('tblpackingwalltiles');
        $(".rowPClass").remove();
        for (var i = 0; i < object.packing.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'rowPClass');
            tr.innerHTML = '<td>' + object.packing[i].SIZE + '</td>' +
                '<td>' + object.packing[i].WeightBox + '</td>' +
                '<td>' + object.packing[i].TilesBox + '</td>' +
                '<td>' + object.packing[i].SqMeterBox + '</td>' +
                '<td>' + object.packing[i].PalletsContainer + '</td>' +
                '<td>' + object.packing[i].BoxContainer + '</td>' +
                '<td>' + object.packing[i].SqMeterContainer + '</td>';
            table.appendChild(tr);
        }

        //for technical
        table = document.getElementById('tbltechwalltiles');
        $(".rowTClass").remove();
        for (var i = 0; i < object.tech.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'rowTClass');
            tr.innerHTML = '<td>' + object.tech[i].Properties + '</td>' +
                '<td>' + object.tech[i].EuroStand + '</td>' +
                '<td>' + object.tech[i].OurValue + '</td>';
            table.appendChild(tr);
        }
    }
    else if (tabnum == 3) {//nano
        table = document.getElementById('tblpackingnano');
        $(".rowPClass").remove();
        for (var i = 0; i < object.packing.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'rowPClass');
            tr.innerHTML = '<td>' + object.packing[i].SIZE + '</td>' +
                '<td>' + object.packing[i].WeightBox + '</td>' +
                '<td>' + object.packing[i].TilesBox + '</td>' +
                '<td>' + object.packing[i].SqMeterBox + '</td>' +
                '<td>' + object.packing[i].PalletsContainer + '</td>' +
                '<td>' + object.packing[i].BoxContainer + '</td>' +
                '<td>' + object.packing[i].SqMeterContainer + '</td>';
            table.appendChild(tr);
        }

        //for technical
        table = document.getElementById('tbltechnano');
        $(".rowTClass").remove();
        for (var i = 0; i < object.tech.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'rowTClass');
            tr.innerHTML = '<td>' + object.tech[i].PROPERTIES + '</td>' +
                '<td>' + object.tech[i].TESTMETHOD + '</td>' +
                '<td>' + object.tech[i].ISO + '</td>' +
                '<td>' + object.tech[i].OurValue + '</td>';
            table.appendChild(tr);
        }
    }
    else if (tabnum == 4) {//porcelain
        table = document.getElementById('tblpackingporc');
        $(".rowPClass").remove();
        for (var i = 0; i < object.packing.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'rowPClass');
            tr.innerHTML = '<td>' + object.packing[i].SIZE + '</td>' +
                '<td>' + object.packing[i].WeightBox + '</td>' +
                '<td>' + object.packing[i].TilesBox + '</td>' +
                '<td>' + object.packing[i].SqMeterBox + '</td>' +
                '<td>' + object.packing[i].PalletsContainer + '</td>' +
                '<td>' + object.packing[i].BoxContainer + '</td>' +
                '<td>' + object.packing[i].SqMeterContainer + '</td>';
            table.appendChild(tr);
        }

        //for technical
        table = document.getElementById('tbltechporc');
        $(".rowTClass").remove();
        for (var i = 0; i < object.tech.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'rowTClass');
            tr.innerHTML = '<td>' + object.tech[i].PROPERTIES + '</td>' +
                '<td>' + object.tech[i].TESTMETHOD + '</td>' +
                '<td>' + object.tech[i].ISO + '</td>' +
                '<td>' + object.tech[i].OurValue + '</td>';
            table.appendChild(tr);
        }
    }
    else if (tabnum == 5) {//dblcharge
        table = document.getElementById('tblpackingdblchrg');
        $(".rowPClass").remove();
        for (var i = 0; i < object.packing.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'rowPClass');
            tr.innerHTML = '<td>' + object.packing[i].SIZE + '</td>' +
                '<td>' + object.packing[i].WeightBox + '</td>' +
                '<td>' + object.packing[i].TilesBox + '</td>' +
                '<td>' + object.packing[i].SqMeterBox + '</td>' +
                '<td>' + object.packing[i].PalletsContainer + '</td>' +
                '<td>' + object.packing[i].BoxContainer + '</td>' +
                '<td>' + object.packing[i].SqMeterContainer + '</td>';
            table.appendChild(tr);
        }

        //for technical
        table = document.getElementById('tbltechdblchrg');
        $(".rowTClass").remove();
        for (var i = 0; i < object.tech.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'rowTClass');
            tr.innerHTML = '<td>' + object.tech[i].PROPERTIES + '</td>' +
                '<td>' + object.tech[i].TESTMETHOD + '</td>' +
                '<td>' + object.tech[i].ISO + '</td>' +
                '<td>' + object.tech[i].OurValue + '</td>';
            table.appendChild(tr);
        }
    }
    else if (tabnum == 6) {//floor tiles
        table = document.getElementById('tblpackingflrtiles');
        $(".rowPClass").remove();
        for (var i = 0; i < object.packing.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'rowPClass');
            tr.innerHTML = '<td>' + object.packing[i].SIZE + '</td>' +
                '<td>' + object.packing[i].WeightBox + '</td>' +
                '<td>' + object.packing[i].TilesBox + '</td>' +
                '<td>' + object.packing[i].SqMeterBox + '</td>' +
                '<td>' + object.packing[i].PalletsContainer + '</td>' +
                '<td>' + object.packing[i].BoxContainer + '</td>' +
                '<td>' + object.packing[i].SqMeterContainer + '</td>';
            table.appendChild(tr);
        }

        //for technical
        table = document.getElementById('tbltechflrtiles');
        $(".rowTClass").remove();
        for (var i = 0; i < object.tech.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'rowTClass');
            tr.innerHTML = '<td>' + object.tech[i].PROPERTIES + '</td>' +
                '<td>' + object.tech[i].ISO + '</td>' +
                '<td>' + object.tech[i].OurValue + '</td>';
            table.appendChild(tr);
        }
    }
}
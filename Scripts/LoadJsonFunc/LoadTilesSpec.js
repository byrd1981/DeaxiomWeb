
//first add an event listener for page load
document.addEventListener("DOMContentLoaded", get_json_data, false); // get_json_data is the function name that will fire on page load


function LoadSelectedCat(selectedcategory) {
    var json_url = '../resources/outdoorprodspec.json';
    // Relative URL of external json file
    //Build the XMLHttpRequest (AJAX Request)
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {//when a good response is given do this
            var data = JSON.parse(this.responseText); // convert the response to a json object            
            loadallprods_json(data, selectedcategory);// pass the json object to the append_json function
        }
    }
    //set the request destination and type
    xmlhttp.open("GET", json_url, true);
    //set required headers for the request
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // send the request
    xmlhttp.send(); // when the request completes it will execute the code in onreadystatechange section    
}

function loadallprods_json(obj, selcat) {
    var divHtml = document.getElementById('divlist');
    var startdivs = "<div class='container'>";
    startdivs += "<div class='text-center mx-auto mb-5 wow fadeInUp' data-wow-delay='0.1s' style='max-width: 600px;'>";
    startdivs += "<h1 class='display-5 mb-4'>OUTDOOR STONES</h1></div>";
    startdivs += "<div class='row g-0 team-items'>";
    
    for (var i = 0; i < obj.prods.length; i++) {
        startdivs += "<div class='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.1s'>";
        startdivs += "<div class='team-item position relative'>";
        startdivs += "<div class='position-relative'>";
        startdivs += "<a class='elem' href='" + obj.prods[i].spec.IMG1BYSIZE + "' title='" + obj.prods[i].name + "' data-lcl-txt='20MM Outdoor Porcelain Tiles'  data-lcl-thumb='" + obj.prods[i].spec.IMG2BYSIZE +"'>";
        startdivs += "<img class='img-fluid-products' src='" + obj.prods[i].spec.IMG2BYSIZE + "' alt=''></a></div>";
        startdivs += "<div class='bg-light text-center p-4'><h3 class='mt-2'><a href='#' onclick='setspecdetail_json(" + JSON.stringify(obj.prods[i]) + ");'>" + obj.prods[i].name + "</a></h3></div></div>";
        startdivs += "</div>";
    }
    startdivs += "</div></div></div>";    
    divHtml.innerHTML = startdivs;
    
}

function setspecdetail_json(obj) {    
    var divstring;
    divstring = "<div class='container'><div class='row g-5'>";
    divstring += "<div class='col-lg-6 wow fadeIn' data-wow-delay='0.1s'>";
    divstring += "<img class='img-fluid' src='" + obj.spec.IMG5BYSIZE +"' alt=''>";
    divstring += "</div>";
    divstring += "<div class='col-lg-6 wow fadeIn' data-wow-delay='0.5s'>";
    divstring += "<div class='product-specification'><h2>Specification</h2>";
    divstring += "<table id='tblspec' class='table table-bordered'><tbody>";
    
    divstring += "<tr><td>Size (mm): </td><td>" + obj.spec.SIZE + "</td></tr>";
    divstring += "<tr><td>Color: </td><td>" + obj.spec.COLOR + "</td></tr>";
    divstring += "<tr><td>Material: </td><td>" + obj.spec.MATERIAL + "</td></tr>";
    divstring += "<tr><td>Suitability: </td><td>" + obj.spec.SUITABILITY + "</td></tr>";
    divstring += "<tr><td>Thickness: </td><td>" + obj.spec.THICKNESS + "</td></tr>";
    divstring += "<tr><td>Tiles Type: </td><td>" + obj.spec.TILESTYPE + "</td></tr>";
    

    divstring += "</tbody></table>";
    divstring += "</div></div></div><br />";
    /*alert(obj.spec.DIFFSIZES[0].SIZE1.IMAGEPATH);*/
    divstring += "<div class='row g-0 team-items'>";
    for (var i = 0; i < obj.spec.DIFFSIZES.length; i++) {
        divstring += "<div class='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.3s'><div class='team-item position-relative'>";
        divstring += "<div class='position-relative'>";
        divstring += "<a class='elem' href='~/content/img/team-2-large.jpg' title='" + obj.name + "' data-lcl-txt='" + obj.spec.SIZE + "' data-lcl-thumb='~/Content/img/categories/O/1.jpg'>";
        divstring += "<img class='img-fluid-products' src='" + obj.spec.DIFFSIZES[i].IMAGEPATH + "' alt=''>";
        divstring += "</a>";
        divstring += "</div>";
        divstring += "<div class='bg-light text-center p-4'>";
        divstring += "<h3 class='mt-2'>" + obj.spec.DIFFSIZES[i].SIZETEXT + "</h3>";
        divstring += "</div>";
        divstring += "</div>";
        divstring += "</div>";
    }
    divstring += "</div>";


    divstring += "</div>"
    
    div = document.getElementById('specdiv');
    div.innerHTML = divstring;

    $("#maindiv").toggle();
    $("#lnkSelected").text(obj.name);
    $("#hdnclicked").val(1);
}
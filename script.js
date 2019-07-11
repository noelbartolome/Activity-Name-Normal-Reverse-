function _normal(){
    var lGet = document.getElementById("lName").value;
    var fGet = document.getElementById("fName").value;
    var mGet = document.getElementById("mName").value;
    var mUpper = mGet.charAt(0).toUpperCase();
    var fUpper = fGet.charAt(0).toUpperCase();
    var lUpper = lGet.charAt(0).toUpperCase();
    var fNum = fGet.length;
    var lNum = lGet.length;
    var fLower = fGet.substr(1,fNum).toLowerCase();
    var lLower = lGet.substr(1,lNum).toLowerCase();
    var shw = fUpper.concat(fLower," ",mUpper,"."," ",lUpper,lLower);
    
    document.getElementById("fullName").value = shw;
}

function _reverse(){
    var lGet = document.getElementById("lName").value;
    var fGet = document.getElementById("fName").value;
    var mGet = document.getElementById("mName").value;
    var mUpper = mGet.charAt(0).toLowerCase();
    var fUpper = fGet.charAt(0).toLowerCase();
    var lUpper = lGet.charAt(0).toLowerCase();
    var fNum = fGet.length;
    var lNum = lGet.length;
    var fLower = fGet.substr(1,fNum).toUpperCase();
    var lLower = lGet.substr(1,lNum).toUpperCase();
    var shw = fUpper.concat(fLower," ",mUpper,"."," ",lUpper,lLower);
    
    document.getElementById("fullName").value = shw;
}
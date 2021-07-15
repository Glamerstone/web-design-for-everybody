function billingFunction(){

    var sameData = document.getElementById("same");
    var shippingName = document.getElementById("shippingName");
    var shippingZip = document.getElementById("shippingZip");
    var billingName = document.getElementById("billingName");
    var billingZip= document.getElementById("billingZip");

    if( sameData.checked){
        billingName.value = shippingName.value;
        billingZip.value = shippingZip.value;
        billingName.setAttribute("required", true);
    }else{
        billingName.value = "";
        billingZip.value = "";

        billingName.removeAttribute("requiered");
        billingZip.removeAttribute("required");
    }
}
var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumberButton = document.querySelector("#check-button");
var output_display = document.querySelector("#output");


function checkDOBIsLucky() {
    var dob = dateOfBirth.value;
    var lucky_num = luckyNumber.value;
    if (dob && lucky_num) {
        var result = calculateSum(dob);
        if (result % lucky_num == 0) {
            output_display.style.color = "blue";
            output_display.innerText = "🎂  Your birthday is lucky  🎂 ";

        } else {
            output_display.style.color = "gray";
            output_display.innerText = "🙂  Your birthday is not lucky 🙂";
        }

    } else {
        output_display.style.color = "red";
        output_display.innerText = "👊   Note: Please do enter the fields  👊 ";
    }

}


function calculateSum(dob) {
    var dob_value = dob.replaceAll('-', '');
    var sum = 0;
    for (var i = 0; i < dob_value.length; i++)
        sum = sum + Number(dob_value.charAt(i));
    return sum
}

checkNumberButton.addEventListener("click", checkDOBIsLucky);
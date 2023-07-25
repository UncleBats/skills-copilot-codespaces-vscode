function skillsMember() {
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var skillLevel = document.getElementById("skillLevel").value;
    var skillDesc = document.getElementById("skillDesc").value;
    var skillDate = document.getElementById("skillDate").value;

    var dataString = 'member=' + member + '&skill=' + skill + '&skillLevel=' + skillLevel + '&skillDesc=' + skillDesc + '&skillDate=' + skillDate;

    // AJAX code to submit form.
    $.ajax({
        type: "POST",
        url: "skillsMember.php",
        data: dataString,
        cache: false,
        success: function(html) {
            alert(html);
        }
    });
    return false;
}
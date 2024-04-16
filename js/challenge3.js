var standing = null

    var grad_date = null

 

    var grad_date = document.querySelector('input[name="gradDate"]:checked')

    var standing = document.querySelector('input[name="standing"]:checked')

 

    if (grad_date == null || standing == null){

        alert("You must select a choice from each set of radio buttons")

        return false

    }
}

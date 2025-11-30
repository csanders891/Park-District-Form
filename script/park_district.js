function validate()
{
    //first name must be filled
    if(document.parkDistrictForm.fname.value=="")
        {
            alert("Please enter your first name");
            return false;
        }

    //last name must be filled
    if(document.parkDistrictForm.lname.value=="")
        {
            alert("Please enter your last name");
            return false;
        }

    //age group must be selected
    if(document.parkDistrictForm.ageGroup.value=="0")
        {
            alert("Please select the age group you are in");
            return false;
        }

    //gender must be selected
    var gender = document.getElementsByName("gender");
    var selected = false;

    for(var i = 0; i < gender.length; i++)
        {
            if(gender[i].checked)
                {
                    selected = true;
                    break;
                }
        }

     if(!selected)
         {
             alert("Please select your gender");
             return false;
         }
    
    //park must be selected
    var park = document.getElementsByName("park");
    var selection_made = false;

    for(var j = 0; j < park.length; j++)
        {
            if(park[j].checked)
                {
                 selection_made = true;
                 break;
                }  
        }

    if(!selection_made)
        { 
            alert("Please select a park district");
            return false;
        }
    
    //at least one sport must be selected
    var sport = document.getElementsByName("sport");
    var selectionMade = false;

    for(var k = 0; k < sport.length; k++)
        {
            if(sport[k].checked)
                {
                selectionMade = true;
                break;
                }
        }

     if(!selectionMade)
        { 
            alert("Please select at least one sport");
            return false;
        }

    //feedback must me filled out
    if(document.parkDistrictForm.feedback.value=="")
        {
            alert("Please describe your Specal Olympics experience within the Chicago Park District");
            return false;
        }
}
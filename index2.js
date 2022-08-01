function validate()
{
     if( document.StudentRegistration.fname.value == "" )
 {
 alert( "Please provide  Name!" );
document.StudentRegistration.fname.focus() ;
return false;
 }
  
 if( document.StudentRegistration.party.value == "" )
 {
 alert( "Please provide your  dob!" );
document.StudentRegistration.party.focus() ;
return false;
 }

 
var email = document.StudentRegistration.emailid.value;
atpos = email.indexOf("@");
dotpos = email.lastIndexOf(".");
if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
{
alert("Please enter correct email ID");
document.StudentRegistration.emailid.focus() ;
return false;
}


 if ( ( StudentRegistration.sex[0].checked == false ) && ( StudentRegistration.sex[1].checked == false ) )
 {
 alert ( "Please choose your Gender: Male or Female" );
 return false;
 } 
 var pincode =document.StudentRegistration.pincode.value;
  
 if (pincode == "") 
{
 alert("Pin code should be 6 digits ");
 document.StudentRegistration.pincode.focus() ;
 return false;
} 
 var mobileno =document.StudentRegistration.mobileno.value;
  
 if (mobileno == "") 
{
 alert("mobileno should be   10 digits ");
 document.StudentRegistration.mobileno.focus() ;
 return false;
} 
 var adharno =document.StudentRegistration.adharno.value;
 if (adharno== "") 
{
 alert("adhar no  should be 16 digits ");
 document.StudentRegistration.adharno.focus() ;
 return false;
}
 

 
 return( true );
 
}
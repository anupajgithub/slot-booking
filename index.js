function validate()
{
    if( document.StudentRegistration.HSCInstitutionName.value == "" )
 {
 alert( "Please provide your Name!" );
document.StudentRegistration.HSCInstitutionName.focus() ;
return false;
 }
 if( document.StudentRegistration.Course.value == "SelectState" )
 {
  alert( "Please provide your state!" );
  document.StudentRegistration.Course.focus() ;
  return false;
  } 




 return( true );
 
}



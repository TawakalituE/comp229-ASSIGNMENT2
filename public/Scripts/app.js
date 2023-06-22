/*
File: users.js
Student's Name: Adinlewa Tawakalitu Eunice
Student ID: 301281523
Date: June 4, 2023
*/


//.IIFE

(function(){
    function Start()
    {
       console.log("App.Started....")

       let deleteButtons = document.querySelectorAll('.btn-danger')

       for ( button of deleteButtons)
       {
         button.addEventListener('click', (event) => {
            if (!confirm("Are you sure?"))
            {
               event.preventDefault();
               window.location.assign('/business-list');
            }
         });
       }
    }


    window.addEventListener("load", Start);
 
 })();

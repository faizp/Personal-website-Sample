$(document).ready(function(){
    $("#submit-form").validate({
        errorClass: 'errors',
        rules:{
            name:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            country:{
                required:true
            },
            message:{
                required:true
            }
        },
        message:{
            name:{
                required:"Enter your name.",
                minlength:"Please enter atleast 4 characters"
            },
            email:{
                required:"Enter your mail id",
                email:"Please enter a valid mail id"
            },
            country:{
                required:"Please select your country"
            },
            message:{
                required:"Please type your message"
            }
        }
    })



})

$("#submit-form").submit((e)=>{
    var isvalid = $("#submit-form").valid();
    if(isvalid){
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbymkPXE61SYyfpQGKWGFAOk3zxTA9pKRlq9T-j_7aOCggyDFITkRYGh5A/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
      
    })
}   
})



















// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbymkPXE61SYyfpQGKWGFAOk3zxTA9pKRlq9T-j_7aOCggyDFITkRYGh5A/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })

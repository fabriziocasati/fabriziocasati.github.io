var xFoo = document.createElement('x-foo');
xFoo.addEventListener('click', function(e) {
  alert('Thanks!');
});

function show() {
    var myemail = "fabrizio" + "casati" + ".github@gmail.com";
    alert("My email is:\n\n\t" + myemail + "\n\n[Note: you can select the email above with your mouse, so that it can be copied by pressing Ctrl+C and then pasted with Ctrl+V.]");
}

function show2() {
    return "hello";
}

function showEmail() {
    //return generateEmail3('fabriziocasati.github','gmail.com');
    //return generateEmail2('fabriziocasati.github','gmail.com','');
    return generateEmail('fabrizio','casati','github','gmail','com');
}

function gen_mail_to_link(lhs,rhs,subject) {
        document.write("<a href=\"mailto");
        document.write(":" + lhs + "@");
        document.write(rhs + "?subject=" + subject + "\">" + lhs + "@" + rhs + "<\/a>");
}

function generateEmail(a1,a2,a3,a4,a5) {
    var email = a1 + a2 + "." + a3 + "@" + a4 + "." + a5;
    return "<a href=\"" + "mail" + "to" + ":" + email + "\">" + email + "<\/a>";
}

function generateEmail2(lhs,rhs,subject) {
    return "<a href=\"mailto" + ":" + lhs + "@" + rhs + "?subject=" + subject + "\">" + lhs + "@" + rhs + "<\/a>";
}

function generateEmail3(lhs,rhs) {
    return "<a href=\"mailto" + ":" + lhs + "@" + rhs + "\">" + lhs + "@" + rhs + "<\/a>";
}

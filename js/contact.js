function show() {
    var myemail = "fabrizio" + "casati" + ".github@gmail.com";
    alert("My email is:\n\n\t" + myemail + "\n\n[Note: you can select the email above with your mouse, so that it can be copied by pressing Ctrl+C and then pasted with Ctrl+V.]");
}

function show2() {
    return "hello";
}

function showEmail() {
    //return generateEmail('fabrizio','casati','github','gmail','com');
    return generateEmail('fabriziocasati.github','gmail.com','');
}

function gen_mail_to_link(lhs,rhs,subject) {
        document.write("<a href=\"mailto");
        document.write(":" + lhs + "@");
        document.write(rhs + "?subject=" + subject + "\">" + lhs + "@" + rhs + "<\/a>");
}

function generateEmail(lhs,rhs,subject) {
    return "<a href=\"mailto" + ":" + lhs + "@" + rhs + "?subject=" + subject + "\">" + lhs + "@" + rhs + "<\/a>";
}

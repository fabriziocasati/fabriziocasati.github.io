function showEmail() {
    var myemail = "fabrizio" + "casati" + ".github@gmail.com";
    alert("My email is:\n\n\t" + myemail + "\n\n[Note: you can select the email above with your mouse, so that it can be copied by pressing Ctrl+C and then pasted with Ctrl+V.]");
}

function show2() {
    return "hello";
}

function show() {
    return generateEmail('fabriziocasati','github','gmail.com');
}

function gen_mail_to_link(lhs,rhs,subject) {
        document.write("<a href=\"mailto");
        document.write(":" + lhs + "@");
        document.write(rhs + "?subject=" + subject + "\">" + lhs + "@" + rhs + "<\/a>");
}

function generateEmail(lhs,chs,rhs) {
    return "<a href=\"mailto" + ":" + lhs + "." + chs + "@" + rhs + "<\/a>";
}

function showEmail() {
    var myemail = "fabrizio" + "casati" + ".github@gmail.com";
    alert("My email is:\n\n\t" + myemail + "\n\n[Note: you can select the email above with your mouse, so that it can be copied by pressing Ctrl+C and then pasted with Ctrl+V.]");
}

function show2() {
    return "hello";
}

function show() {
    return gen_mail_to_link('john.doe','example.com','Feedback about your site...');
}

function gen_mail_to_link(lhs,rhs,subject) {
        document.write("<a href=\"mailto");
        document.write(":" + lhs + "@");
        document.write(rhs + "?subject=" + subject + "\">" + lhs + "@" + rhs + "<\/a>");
    }

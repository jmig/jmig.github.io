var s= $("#emailme").attr("href");
s= s.replace("/", "mailto:");
s= s.replace("emailme", "jerome");
s= s.replace("at", "@");
$("#emailme").attr("href",s);
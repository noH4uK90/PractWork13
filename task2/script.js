document.write("<tr><td> </td>"); 
for (i = 1; i <=10; i++){
    document.write("<td>"+i+" </td>");
}   
document.write("</tr>"); 
for (i = 1; i <=10; i++) { 
    document.write("<tr><td>" + i + " </td>"); 
for (j = 1; j <= 10; j++) { 
    document.write("<td bgcolor=`lite-green`>" + (i*j) + " </td>");
} 
    document.write("</tr>"); 
} 

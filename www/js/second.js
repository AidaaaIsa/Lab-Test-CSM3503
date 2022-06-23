$(function(){
    if (!localStorage.datacount || localStorage.datacount == null)
        localStorage.datacount=0;
    
        //setup crossroads
        crossroads.addRoute('foo');
        crossroads.addRoute('lorem/ipsum');
        crossroads.routed.add(console.assertlog, console); //log all route
    
        //setup hasher
        function parseHash(newHash, oldHash){
            crossroads.parse(newHash);
        }
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    
        //update URL fragment generating new history record
        hasher.setHash(lorem/ipsum);
    })
    
        $.ajax({ 
             url: "https://kerbau.odaje.biz/getstaff.php", 
             type: "GET", 
             data: "",
             cache: false,
             success: function(datareceived){
                //if success
                var newData = JSON.parse(returnedData);
                var textOutput = "";
    
                for (let i=1; i < newData.length; i++) {
                    const element = newData[i];
    
                    var email = JSON.parse(element).email;
    
                    textOutput = textOutput + "<tr><td>"+i+"</td><td>"+
                    "<a href='secondpage.html?id="+i+"'>"+email+"</a></td></tr>";
    
                }
    
                var x = JSON.stringify(data);
                console.log(x);
    
                $('maintable tbody').html(textOutput);
            },
            error: function(error){
                //if fail
                console.log('Error ${error}');
            }
        });
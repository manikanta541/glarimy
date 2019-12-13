var c=0;
var btnid;
var valarr=[];
var a=[]
$(document).ready(function()
    {
        $.ajax({
                type:'GET',
                dataType:"json",
                url: 'https://4r5qkqzk35.execute-api.us-east-1.amazonaws.com/v1/activecities/',
                success:function(data){
                        $("#tpg1").append(data[0].citydisplay);
                            $("#tpg1").click(function(){
                                $("#subtpg").fadeIn(500);

                            });
                            for(var i=1;i<data.length;i++)
                            {
                                console.log(data[i].categorydisplay);

                               
                                $("#subtpg").append("<button  class='btn btn-primary btn-lg ml-3 mb-2' style='background-color:#1abc9c'value='"+data[i].categorydisplay+"'>"+data[i].categorydisplay+"</button>");
                                //valarr[i]=data[i].categorydisplay;
                               
                           
                            } 
                            
                        $("button").click(function()
                        {
                          var btnid=$(this).val();
                           console.log(btnid)
                            for(var i=1;i<data.length;i++)
                            {
                                
                                    if(btnid==data[i].categorydisplay)
                                    {
                                        $("#subcat").html("");
                                        for(var j=0;j<data.length-1;j++)
                                        {
                                        console.log(data[i].sections[j].display);
                                        $("#subcat").append("<button  class='btn btn-lg  ml-3 mb-3' style='background-color:#1abc9c;color:white' value='"+data[i].sections[j].name+"' >"+data[i].sections[j].display+"</button>");
                                        $("#subcat").fadeIn();
                                        }
                                    }
                            }     
                        });
                        $("#subcat").click(function()
                        {
                           $("button").click(function()
                           {
                            var btnid1=$(this).val();
                            console.log(btnid1);
                        if(btnid1=="Hospitals" || "Labs" || "Pharmacies" )
                        {
                            if(btnid1=="Hospitals")
                            {
                            details(btnid1);
                            }
                            else{
                                $("#viva").html("oops! something went wrong please try again");
                            }
                            if(btnid1=="Labs")
                            {
                                details1(btnid1);
                            }
                            else{
                                $("#viva").html("oops! something went wrong please try again");
                            }
                            if(btnid1=="Pharmacies")
                            {
                                details2(btnid1);
                            }
                            else{
                                $("#viva").html("oops! something went wrong please try again");
                            }
                        }
                        else{
                            $("#viva").html("<p style='color:red'>oops! something went wrong please try again</p>");
                        }
                        });
                      });
                        }
                    });
                });
            
                function details(btnid1){
                    $(document).ready(function()
                    {
                            $.ajax({
                                type:'GET',
                                dataType:"json",
                                url:'https://4r5qkqzk35.execute-api.us-east-1.amazonaws.com/v1/activecities/Tadepalligudem/Health/Hospitals/entry/', 
 
                                success:function(data){
                                    $("#viva").text("");
                                        for(var i=0;i<data.length;i++)
                                        {
                                        if(btnid1==data[i].section){
                                          //for(var j=0;j<data[0].address.length;j++)
                                            //{
                                                $("#viva").append("<button  data-toggle='modal' data-target='#exampleModal' class='btn  btn-lg  btn-block' style='background-color:#C0C0C0'  value='"+data[i].url+"' >"+'<h5 style="color:#1abc9c;font-size:1vw"  >'+data[i].name+'</h5>'+'<h6  style="font-size:1vw;color:	white">'+data[i].address+'</h6>'+"</button>");
                                           //}//+'<h6 style="color:red">'+data[i].address[j]+'</h6>'
                                           console.log(data[i].url);
                                        
                                        }
                                        //for(var j=0;j<data[0].address.length;j++)
                                       // {
                                          //  $("#viva").append("<button  data-toggle='modal' data-target='#exampleModal' class='btn  btn-lg  btn-block' style='background-color:#c0c0c0'>"+'<h6 style="color:red">'+a[i]+data[i].address[j]+'</h6>'+"</button>");

                                        //}

                                        }
                                        $("button").click(function()
                                        {  
                                               var btnid2=$(this).val();
                                               console.log(btnid2);                                                
                                                $.ajax({
                                                        type:'GET',
                                                        dataType:"json",
                                                        url:'https://4r5qkqzk35.execute-api.us-east-1.amazonaws.com/v1/activecities'+btnid2, 
                         
                                                        success:function(info){
                                                            $("#final").html("");
                                                            for(var j=0;j<data.length-2;j++)
                                                                {
                                                                    console.log(info.data[j].name);
                                                                    //<a href="" target="_blank"></a>;
                                                                    $("#final").append("<h4  data-toggle='modal' data-target='#exampleModal1'  style='background-color:#aaa9ad'>"+'<h5 style="color:#1abc9c;">'+info.data[j].name+' : '+'</h4>'+'<h6 style="color:	#808080;">'+info.data[j].value+'</h6>'+"</p>");

                                                                }    
                                                        }
                                                    });

                                                //});
                                    });
                                //});
                                       
                            }
                           
                            });
                        });
                }
                    function details1(btnid1)
                    { 
                        $(document).ready(function()
                        {
                        $.ajax({
                            type:'GET',
                            dataType:"json",
                            url:' https://4r5qkqzk35.execute-api.us-east-1.amazonaws.com/v1/activecities/Tadepalligudem/Health/Labs/entry/',   

                            success:function(data){
                               $("#viva").text("");
                                    for(var i=0;i<data.length;i++)
                                    {
                                    if(btnid1==data[i].section){
                                      //for(var j=0;j<data[0].address.length-3;j++)
                                     //{
                                            $("#viva").append("<button  data-toggle='modal' data-target='#exampleModal' class='btn  btn-lg  btn-block' style='background-color:#C0C0C0' value='"+data[i].url+"' >"+'<h5 style="color:#1abc9c;font-size:1vw">'+data[i].name+'</h5>'+'<h6  style="color:white;font-size:1vw">'+data[i].address+'</h6>'+"</button><br>");
                                     //}
                                    }
                                    }
                                    $("button").click(function()
                                    {  
                                           var btnid2=$(this).val();
                                           console.log(btnid2);                                                
                                            $.ajax({
                                                    type:'GET',
                                                    dataType:"json",
                                                    url:'https://4r5qkqzk35.execute-api.us-east-1.amazonaws.com/v1/activecities'+btnid2, 
                     
                                                    success:function(info){
                                                        $("#final").html("");
                                                        for(var j=0;j<data.length-2;j++)
                                                            {
                                                                console.log(info.data[j].name);
                                                                //<a href="" target="_blank"></a>;
                                                                $("#final").append("<h4  data-toggle='modal' data-target='#exampleModal1'  style='background-color:#aaa9ad'>"+'<h5 style="color:#1abc9c;">'+info.data[j].name+' : '+'</h4>'+'<h6 style="color:#808080;">'+info.data[j].value+'</h6>'+"</p>");

                                                            }    
                                                    }
                                                });

                                            //});
                                });
                        }
                        });
                    });
                }
                    function details2(btnid1)
                    {
                    $(document).ready(function()
                    {
                            $.ajax({
                                type:'GET',
                                dataType:"json",
                                url:'https://4r5qkqzk35.execute-api.us-east-1.amazonaws.com/v1/activecities/Tadepalligudem/Health/Pharmacies/entry/',             

                                success:function(data){
                                   $("#viva").text("");
                                        for(var i=0;i<data.length;i++)
                                        {
                                        if(btnid1==data[i].section){
                                          //for(var j=0;j<data[0].address.length;j++)
                                            //{
                                                $("#viva").append("<button  data-toggle='modal' data-target='#exampleModal' class='btn  btn-lg  btn-block' style='background-color:#C0C0C0' value='"+data[i].url+"'>"+'<h5 style="color:#1abc9c;font-size:1vw">'+data[i].name+'</h5>'+'<h6  style="color:white;font-size:1vw">'+data[i].address+'</h6>'+"</button><br>");
                                           //}
                                        }
                                        }
                                        $("button").click(function()
                                        {  
                                               var btnid2=$(this).val();
                                               console.log(btnid2);                                                
                                                $.ajax({
                                                        type:'GET',
                                                        dataType:"json",
                                                        url:'https://4r5qkqzk35.execute-api.us-east-1.amazonaws.com/v1/activecities'+btnid2, 
                         
                                                        success:function(info){
                                                            $("#final").html("");
                                                            for(var j=0;j<data.length-2;j++)
                                                                {
                                                                    console.log(info.data[j].name);
                                                                    //<a href="" target="_blank"></a>;
                                                                    $("#final").append("<h4  data-toggle='modal' data-target='#exampleModal1'  style='background-color:#aaa9ad'>"+'<h5 style="color:#1abc9c;">'+info.data[j].name+' : '+'</h4>'+'<h6 style="color:	#808080;">'+info.data[j].value+'</h6>'+"</p>");

                                                                }    
                                                        }
                                                    });

                                                //});
                                    });
                            }
                            });

                        });
                
                }

  
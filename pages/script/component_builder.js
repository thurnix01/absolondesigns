
    function addTemplate() {
        var heroImage = document.getElementById("hero-image").value;
        var introLine = document.getElementById("intro-line").value;
        var bodyCopy = document.getElementById("body-copy").value;
        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_header-section";
        template.width = "600";
         template.border = "0";
         template.cellPadding = "0"; 
         template.cellSpacing = "0"; 
         template.role = "presentation";
         template.align = "center";
        template.borderCollapse = "collapse";
        template.style.maxWidth = "600px";        
        template.style.width = "100%";
        template.style.margin = "0 auto";
        template.style.padding = "0";
        template.style.tableLayout = "fixed";

    
        template.innerHTML = `

        <tr>
            <td align="center"  style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; margin: 0;padding:0;">
                <!--[if (mso)|(IE)]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td align="center" style="background-color: #FFFFFF;margin: 0;padding:0;">
                <![endif]-->

                   
                        <img align="center" border="0" src="${heroImage}" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;width: 100%;max-width: 600px" width="600" id="imageAlt1">
           
                <!--[if (mso)|(IE)]>
                        </td>
                    </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
                
                
                   <tr style="display: flex;" class="_introline">
            <td align="center" valign="middle" width="100%" style="padding: 16px 32px 0 16px;">
                <!--[if (gte mso 9) | (IE)]>
                <table width="600" cellpadding="0" cellspacing="0" border="0" align="center">
                    <tr>
                        <td style="padding: 0 26px 0;">
                <![endif]-->
                               
                               
                          			<h1 class="_header-centering" style="margin:16px 16px 0;font-size: 3.5rem; mso-ansi-font-size:40px;font-weight: 400 !important; letter-spacing: 0.1rem; font-family: 'tungsten','Roboto', sans-serif; text-align: left; text-transform: uppercase;line-height: 2.85rem; color: inherit !important;">${introLine}</h1>
                                <p class="_header-centering" style="margin:0 16px ; padding: 16px 0; color: inherit !important; font:300 17px/1.5  'UniversLTStd-Cn','Roboto', sans-serif; text-align: left;">${bodyCopy}</p>
                                          <!--[if (gte mso 9) | (IE)]>
                        </td>
                    </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
            `;
        container.appendChild(template);
    }


    function removeTemplate() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_header-section");
        if (templates.length > 0) {
            container.removeChild(templates[templates.length - 1]);
        }
    }


    //-------------------------------------------


    function addTemplate1() {
        var buttonLabel = document.getElementById("buttonLabel").value;
        var buttonHref = document.getElementById("buttonHref").value;

    var resultDiv = document.getElementById("container");
        var button = document.createElement("div");
        button.style.maxWidth = "600px";
        button.width = "600";
        button.style.width = "100%";
        button.style.margin = "0 auto";
   

        button.role = "presentation";
   
        button.style.margin = "0 auto 32px";
     

        button.className = "_header-cta";
      
           button.innerHTML = `
<!--[if (gte mso 9) | (IE)]>
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
    <tr>
      <td align="left" valign="middle" width="100%" style="width:600px; padding: 16px 32px 32px; ">
  <![endif]-->

        <div class="button-container" style="padding:0 16px; margin: 0 16px;">
          <!--[if mso]>
          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref}" target="_blank" style="height:56px; v-text-anchor:middle;width:220px;height: 52px;" arcsize="11.11111111111111%" strokecolor="#464647" fillcolor="#464647"><w:anchorlock/><center style="color:#ffffff;font-family:'UniversLTStd-Cn','Roboto Condensed', sans-serif; font-size:16px;font-weight:bold;text-transform:uppercase;" id="_cta_btn" class="btn-style1">${buttonLabel}</center></v:roundrect>
          <![endif]-->
          <!--[if !mso]><!-->
          <a href="${buttonHref}" target="_blank" style="background-color:#464647;border:1px solid #464647;border-radius:5px;color:#ffffff;display:block;font-family:'UniversLTStd-Cn','Roboto', sans-serif;font-size: 1rem;font-weight:normal;line-height:56px;text-align:center;text-decoration:none;text-transform: uppercase !important;width:220px;height: 52px;margin:0 ;-webkit-text-size-adjust:none;mso-hide:all;" id="_cta_btn" class="btn-style1 _cta_btn _header-cta-centering"><span class="button-text"><nobr>${buttonLabel}</nobr></span></a>
          <!--<![endif]-->
        </div>

<!--[if (gte mso 9) | (IE)]>
      </td>
    </tr>
  </table>
  <![endif]-->
    

      `;
        resultDiv.appendChild(button);
        }
    
    function removeTemplate1() {
        var resultDiv = document.getElementById("container");
        var buttons = resultDiv.getElementsByClassName("_header-cta");
        if (buttons.length > 0) {
            resultDiv.removeChild(buttons[buttons.length - 1]);
        }
    }



    //-------------------------------------------


    function addTemplate2() {
        var introBodyTitle = document.getElementById("intro-body-title").value;
        var container = document.getElementById("container");
        var template = document.createElement("div");
        template.className = "_section-title";
        template.style.maxWidth = "600px";
        template.style.display = "block";
        template.width = "600";
        template.style.width = "100%";
        template.style.margin = "0 auto";
        template.role = "presentation";
        template.style.width = "100%";
        template.innerHTML = `<!--[if (gte mso 9) | (IE)]>
   

                 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
                    <tr>
                      <td align="center" valign="middle" width="100%">
                  <![endif]-->

                      <h3 style="font-size: 3rem; mso-ansi-font-size:32px;font-weight: 400 !important; letter-spacing: 0.1rem; font-family: 'tungsten','Roboto', sans-serif; text-align: center; text-transform: uppercase; margin: 64px 32px 32px; color: #000;">${introBodyTitle}</h3>

                 <!--[if (gte mso 9) | (IE)]>
                      </td>
                    </tr>
                  </table>
                  <![endif]--></div>
  
`;
        container.appendChild(template);
    }

    function removeTemplate2() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_section-title");
        if (templates.length > 0) {
            container.removeChild(templates[templates.length - 1]);
        }
    }

    //-------------------------------------------

 

      var container = document.getElementById("container");
      var product = "product"; // Specify the className to remove
      var subContainer = document.getElementById("sub-container");
        var commentBeforeSub; // Variable to store the comment before Sub
        var commentAfterSub; // Variable to store the comment after Sub
        var commentBeforeDivs;
        var commentAfterDivs;
        var divCount = 0; // A variable to keep track of the number of Sub added
      var innerContainer = document.getElementById('inner-container');
      
      
      function addTemplate3() {
           var container = document.getElementById("container");
           var innerContainer = document.getElementById('inner-container');
          
          if (!innerContainer){
          var innerContainer = document.createElement('table');
          innerContainer.style.width = "100%";
          innerContainer.style.maxWidth = "600px";
          innerContainer.style.marginBottom = "40px";
          innerContainer.width = "600";
          innerContainer.align = "center";
        
              
          innerContainer.setAttribute('id', 'inner-container');
          container.appendChild(innerContainer);
          }
        if (!commentBeforeSub && !commentAfterSub)
        
        {
              
        // Create comments for before and after Sub
        commentBeforeSub = document.createComment(`[if (gte mso 9) | (IE)]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"  width="600">
        <tr>
            <td>
    <![endif]`);
        commentAfterSub = document.createComment(`[if (gte mso 9) | (IE)]>
            </td>
        </tr>
    </table>
    <![endif]`);        
                    innerContainer.appendChild(commentBeforeSub);
      }
           
  
                    
         if (!subContainer || subContainer.childElementCount >= 2) {
              
          subContainer = document.createElement("tr");
          subContainer.className = "product";
          subContainer.setAttribute('id', 'sub-container');
          subContainer.style.display = "flex";
          subContainer.style.flexWrap = "wrap";
          subContainer.style.flexBasis = "100%"; 
          subContainer.width = "600";  
          subContainer.align = "center";         
  
          innerContainer.appendChild(subContainer);
                }
    
      
        innerContainer.appendChild(commentAfterSub);
          
    
        commentBeforeDivs = document.createComment(`[if true]>
        <td colspan="2" style="width: 290px; text-align: center; margin: 0 auto;" valign="top" width="290">
        <![endif]`);
        commentAfterDivs = document.createComment(`[if true]>
        </td>
        <![endif]`);          
            
        // Get the container div
         var container = document.getElementById('container');

        // Append the comments before and after the Divs
        subContainer.appendChild(commentBeforeDivs);
              

          
        var image1 = document.getElementById("image-1").value;
        var imageCopy1 = document.getElementById("image-copy-1").value;
        var buttonLabel1 = document.getElementById("buttonLabel1").value;
        var buttonHref1 = document.getElementById("buttonHref1").value;      
        var template = document.createElement("td");
        template.className = "product"; 
        template.align = "center";
        template.style.display = "grid";  
        template.style.width = "290px"; 
        template.style.textAlign = "center";   
        template.style.flexGrow = "1";
        template.style.flexShrink = "0"; 
        template.style.margin = "0 auto 32px"; 
         
        template.innerHTML = `
        <a href="${buttonHref1}" target="_blank"><img src="${image1}" alt="Product Image" style="width:272px; margin: 0 auto; display: flex; height: auto; object-fit: contain;" border="0" width="300"></a>
        <p style="margin: 12px auto 12px; width: 290px; font-family: 'UniversLTStd-Cn','Roboto Condensed', sans-serif; text-align: center; font-size:17px;font-weight: normal; color:#000; height:auto; background-color: #fff;">${imageCopy1}</p>

            <!--[if mso]>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#" target="_blank" style="v-text-anchor:middle;width:220px;height: 52px;text-transform: uppercase;" arcsize="11.11111111111111%" strokecolor="#464647" fillcolor="#464647">
                <w:anchorlock />
                <center style="color:#ffffff;font-family:'UniversLTStd-Cn','Roboto', sans-serif; font-size:16px;font-weight:bold;text-transform: uppercase !important;" class="_cta_btn"><span class="button-text">Shop Now</span></center>
            </v:roundrect>
            <![endif]-->
                
                <a href="${buttonHref1}" target="_blank" style="background-color:#464647;border:1px solid #464647;border-radius:5px;color:#ffffff;display:block;font-family:'UniversLTStd-Cn','Roboto', sans-serif; font-size: 1rem;font-weight:normal;line-height:56px;text-align:center;text-decoration:none;text-transform: uppercase !important;width:220px;height: 52px;margin:0 auto;-webkit-text-size-adjust:none;mso-hide:all;" class="_cta_btn remove-btn" ><span class="button-text">${buttonLabel1}</span></a>
        `;  
     
        subContainer.appendChild(template);
          

          
        subContainer.appendChild(commentAfterDivs); 
          
          
      }


      function removeTemplate3() {
   
      var container = document.getElementById("container");
      var innerContainer = document.getElementById('inner-container');
      var subContainer = document.getElementById("sub-container");
      var templates = document.getElementsByClassName(product);
  

      if (templates.length > 0) {
      var divToRemove = templates[templates.length - 1];
      var template = divToRemove.parentNode;
      template.removeChild(divToRemove);

      if (template.childElementCount === 1) {
          
      template = null;
          

          }
         }
   

      // Get all child nodes of the container
      var childNodes = subContainer.childNodes;

      // Create a variable to count the number of comments removed
      var commentsRemoved = 0;

      // Iterate through the child nodes in reverse
      for (var i = childNodes.length - 1; i >= 0; i--) {
        var node = childNodes[i];

        // Check if the node is a comment (nodeType 8)
        if (node.nodeType === 8) {
          // Remove the comment node
          subContainer.removeChild(node);
          commentsRemoved++;

          // Check if two comments are removed
          if (commentsRemoved === 2) {
            break;
          }
        }
      }

    }

       function toggleDisplay(className) {
            const elements = document.getElementsByClassName(className);
            const displayValue = document.querySelector('input[name="displayToggle"]:checked').value;

            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = (displayValue === 'show') ? 'block' : 'none';
            }
        }
      
      
    //-------------------------------------------


    function addTemplate4() {


        var image2 = document.getElementById("image-2").value;
        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_body-image";
        template.style.maxWidth = "568px";
        template.style.margin = "0 auto";
        template.style.padding = "0 16px";
        template.style.width = "100%";
        template.verticalAlign = "top";
        template.border = "0";
        template.cellPadding = "0";
        template.cellSpacing = "0";
        template.role = "presentation";
        template.align = "center";
        template.innerHTML = `

<tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; margin: 0;padding:0 16px;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td align="center" style="background-color: #FFFFFF;margin: 0;padding:0;"><![endif]-->

            <div align="center" style="margin: 0;padding:0; border-radius: 8px; overflow: hidden;">
                    <!--[if mso]><table width="536" cellpadding="0" cellspacing="0" border="0" align="center"><tr style="line-height:0px;line-height:0px;"><td style="padding-right: 0px; padding-left: 0px; width:536px; margin: 0 auto;" align="center"><![endif]-->
                   
                        <img align="center" border="0" src="${image2}"  style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none; float: none;width: 100%;max-width: 502px; height: 280px; object-fit: contain; object-position: center; border-radius: 8px; overflow: hidden;" width="536" >
               
                    <!--[if mso]></td></tr></table><![endif]-->
                </div>
             <!--[if (mso)|(IE)]></td></tr>  </table><![endif]-->
                </td></tr>
            `;
        container.appendChild(template);
    }

    function removeTemplate4() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_body-image");
        if (templates.length > 0) {
            container.removeChild(templates[templates.length - 1]);
        }
    }


    //-------------------------------------------


           function addTemplate5() {
            var container = document.getElementById('container');
            var imageCopy2 = document.getElementById("body-copy-2").value;
            var template = document.getElementById("template");
            var template = document.createElement('div');
            template.classList.add('_body_copy')
            template.setAttribute('id', 'template');
            template.style.maxWidth = "600px";
            template.width = "600";
            template.style.width = "100%";
            template.style.margin = "0 auto";
            template.role = "presentation";

            
            template.innerHTML = `

                 <tr style="padding:0 16px 0; display: block;"  class="_introline">
                        <td align="center" valign="middle" width="100%" style="width:600px;">
                                 <!--[if mso]><table width="600" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td style="padding: 16px 32px 16px; text-align: center;"><![endif]-->

                                  <p style="margin: 0 32px;padding:0 0 16px;color:#000;font:300 17px/1.5  'UniversLTStd-Cn','Roboto', sans-serif; position: relative; top: 4px; ">${imageCopy2} </p>
                              
                          <!--[if mso]></td></tr></table><![endif]-->
                        </td>
                </tr>                                        
                    `;
            
            
            

            // Remove the "edit-item1" class from the previous edit item
            const editItem1 = container.querySelector('.edit-item1');
            if (editItem1) {
                editItem1.classList.remove('edit-item1');
            }

            container.appendChild(template);
            
            // Apply the "edit-item1" class to the newly added item
            template.classList.add('edit-item1');
        }
        function removeTemplate5(){
            var container = document.getElementById('container');
            var template = document.getElementById("template");

            const btnToRemove = container.querySelector('.edit-item1');
            if (btnToRemove) {
            btnToRemove.remove();
            }
            

        }
        function textAlign1() {
           const textAlign1 = container.querySelector('.edit-item1');
              textAlign1.style.margin = "0 auto"; 
             textAlign1.style.textAlign = "center"; 
      }

    //-------------------------------------------


  
        var outterBlock = document.getElementById("outterBlock");

        function addTemplate6() {
        var outterBlock = document.getElementById("outterBlock");
        var outterBlock = document.createElement('div');
        outterBlock.setAttribute('id', 'outterBlock');
        outterBlock.style.maxWidth = "536px";
        outterBlock.width = "600";
        outterBlock.style.width = "100%";
        outterBlock.style.margin = "0 32px 32px";
        outterBlock.role = "presentation";



        if (outterBlock){
        var buttonLabel2 = document.getElementById("buttonLabel2").value;
        var buttonHref2 = document.getElementById("buttonHref2").value;

        const button = document.createElement('a');
        button.classList.add('_cta_btn');
        button.style.backgroundColor = "#464647";
        button.style.border = "1px solid #464647";
        button.style.borderRadius = "5px";
        button.style.color = "#ffffff";
        button.style.display = "block";
        button.style.fontFamily = "'UniversLTStd-Cn','Roboto', sans-serif";
        button.style.fontSize = " 1rem";
        button.style.fontWeight = "normal";
        button.style.lineHeight = "56px";
        button.style.textAlign = "center";
        button.style.textDecoration = "none";
        button.style.textTransform = "uppercase";
        button.style.width = "220px";
        button.style.height = " 52px";
        button.style.margin = "0 16px";
        button.setAttribute('id','_cta_btn');
        button.target = "_blank";
        button.href = `${buttonHref2}`;

        button.innerHTML = `
        <!--[if mso]>
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
                <tr>
                  <td align="center" valign="middle" width="100%">
              <![endif]-->


        <!--[if mso]>
                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref2}" target="_blank" style="height:56px; v-text-anchor:middle;width:220px;height: 52px;" arcsize="11.11111111111111%" strokecolor="#464647" fillcolor="#464647"><w:anchorlock/><center style="color:#ffffff;font-family:'UniversLTStd-Cn','Roboto', sans-serif; font-size:16px;font-weight:bold;text-transform:uppercase;" class="_cta_btn button-text">${buttonLabel2}</center></v:roundrect>
                      <![endif]-->
        <!--[if !mso]><!-->

        <span class="button-text">${buttonLabel2}</span>

        <!--<![endif]-->


        <!--[if mso]>
                  </td>
                </tr>
                    <tr height="36"></tr>
              </table>
              <![endif]-->

        `;




        // Remove the "edit-item" class from the previous edit item
        const editItem = container.querySelector('.edit-item');
        if (editItem) {
        editItem.classList.remove('edit-item');
        }

        outterBlock.appendChild(button);

        // Apply the "edit-item" class to the newly added item
        button.classList.add('edit-item');
        }
        container.appendChild(outterBlock);

        }

        function removeTemplate6(){
        var container = document.getElementById('container');
        var outterBlock = document.getElementById("outterBlock");

        const btnToRemove = container.querySelector('.edit-item');
        if (btnToRemove) {
        btnToRemove.remove();
        }
        }

        function buttonStyle2(){
        var container = document.getElementById('container');
        var outterBlock = document.getElementById("outterBlock");

        const buttonStyle2 = container.querySelector('.edit-item');
        buttonStyle2.style.backgroundColor = "#fff";
        buttonStyle2.style.border = "3px solid #464647";
        buttonStyle2.style.borderRadius = "5px";
        buttonStyle2.style.color = "#333";

        }

        function buttonColor2() {

        const buttonColor2 = container.querySelector('.edit-item');
        buttonColor2.style.backgroundColor = "#E04F26";
        buttonColor2.style.border = "1px solid #E04F26";
        buttonColor2.style.color = "#fff";
        buttonColor2.style.outline = "none";
        buttonColor2.style.outlineOffset = "none";
        }

        function btnAlign2() {
        const btnAlign2 = container.querySelector('.edit-item');
        btnAlign2.style.margin = "0 auto";
        }


   //-------------------------------------------

    function addTemplate7() {
        var image3 = document.getElementById("image-3").value;
        var introBodyTitle2 = document.getElementById("intro-body-title-2").value;
        var imageCopy3 = document.getElementById("body-copy-3").value;

        var buttonLabel3 = document.getElementById("buttonLabel3").value;
        var buttonHref3 = document.getElementById("buttonHref3").value;

        var container = document.getElementById("container");
        var template = document.createElement("table");
   
        template.width = "600";
        template.border = "0";
        template.cellPadding = "0";
        template.cellSpacing = "0";
        template.align = "center";
        template.style.width = "100%";
        template.style.maxWidth = "600px";
        template.style.margin = "0 auto";
        template.style.height = "auto";
        template.className = "_body-footer";
        template.innerHTML = `

             <!--[if (mso)|(IE)]><table border="0" cellpadding="0" cellspacing="0" align="center" width="600" style="width:600px;"><tr> <![endif]-->
    <tr bgcolor="#f9f9f9" style="background-color:#f9f9f9;">
        <td align="center" style="display: table-cell;max-width: 280px;width: 50%;text-align: center;margin: 0 auto;justify-content: center;" class="floating">
            <span style="margin: 0 auto; width: 100%;">
            <a href="${buttonHref3}" target="_blank" >
                <img src="${image3}" alt="Product Image" style="width:100%; margin: 0 auto; display: flex; height: 272px; object-fit: cover;" border="0" width="272"></a></span>



        </td>

        <td align="center" style="display: grid;width: 90%;text-align: left;padding: 16px 0 16px 16px;float: left;height: 240px;align-content: center;"  class="floating">

            <h3 style="color: #000000 !important;font-size: 1.75rem;font-weight: 300;text-transform: uppercase;margin: 0;mso-ansi-font-size: 20px;font-family: 'tungsten','Roboto', sans-serif; text-align: left; line-height: 1.85rem; letter-spacing: 0rem;padding-right: 16px;">${introBodyTitle2}</h3>

            <div style="color:#2C2C2C; font-family:'UniversLTStd-Cn','Roboto Condensed', sans-serif; font-size:16px; padding-top:18px;padding-right: 16px;">${imageCopy3}</div>

             <div style="color:#333;font-size:18px; line-height:26px; padding-bottom:0px;padding-top:16px; margin: 0;"><a href="${buttonHref3}" target="_blank" style="color:#333; font-weight:bold; text-decoration:underline;font-family:'UniversLTStd-Cn','Roboto', sans-serif; text-transform: uppercase;" class="footer_cta">${buttonLabel3}<span style="position: relative; bottom: 0.05rem;"> ></span></a></div>
                   <!--[if (mso)|(IE)]> <td style="padding-right:32px" valign="top" width="260"> <![endif]-->
          <!--[if (mso)|(IE)]></td><![endif]-->

        </td>
    </tr>
   <tr height="24"></tr>

    <!--[if (mso)|(IE)]></tr></table><![endif]-->
  
        `;
        container.appendChild(template);
    }

    function removeTemplate7() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_body-footer");
        if (templates.length > 0) {
            container.removeChild(templates[templates.length - 1]);
        }
    }


                function addTemplate8() {
           var container = document.getElementById("container");
           var product = "product"; // Specify the className to remove
          
          
        var image4 = document.getElementById("image-4").value;
        var imageCopy4 = document.getElementById("image-copy-4").value;
        var buttonLabel4 = document.getElementById("buttonLabel4").value;
        var buttonHref4 = document.getElementById("buttonHref4").value;      

       var template = document.createElement("table");
        template.className = "_body-image";
        template.style.maxWidth = "536px";
        template.style.margin = "0 auto";
        template.style.padding = "0";
        template.style.width = "auto";
        template.verticalAlign = "top";
        template.border = "0";
        template.cellPadding = "0";
        template.cellSpacing = "0";
        template.role = "presentation";
        template.align = "center";
 
         
        template.innerHTML = `

        <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; margin: 0;padding:0;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td align="center" style="background-color: #FFFFFF;margin: 0;padding:0;"><![endif]-->

            <div align="center" style="margin: 0;padding:0; border-radius: 8px;  overflow: hidden;">
                    <!--[if mso]><table width="536" cellpadding="0" cellspacing="0" border="0" align="center"><tr style="line-height:0px;line-height:0px;"><td style="padding-right: 0px; padding-left: 0px; width:536px; margin: 0 auto;" align="center"><![endif]-->

        <a href="${buttonHref4}" target="_blank"><img align="center" border="0" src="${image4}" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none; float: none;width: 100%;max-width: 536px;  object-fit: contain; object-position: center; border-radius: 8px; overflow: hidden;" width="536" id="imageAlt2"></a>


        <p style="margin: 12px auto 12px; width: 100%; font-family: 'UniversLTStd-Cn', Helvetica, Arial, Tahoma, sans-serif; text-align: center; font-size:17px;font-weight: normal; color:#000; height:auto;  line-height: 1.5rem;" >${imageCopy4}</p>

            <!--[if mso]>
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref4}" target="_blank" style="v-text-anchor:middle;width:260px;height: 52px;text-transform: uppercase;" arcsize="11.11111111111111%" strokecolor="#464647" fillcolor="#464647">
                    <w:anchorlock />
                    <center style="color:#ffffff;font-family:'UniversLTStd-Cn','Roboto', sans-serif; font-size:16px;font-weight:bold;text-transform: uppercase !important;" class="_cta_btn"><span class="button-text">${buttonLabel4}</span></center>
                </v:roundrect>
                <![endif]-->
                
                <a href="${buttonHref4}" target="_blank" style="background-color:#464647;border:1px solid #464647;border-radius:5px;color:#ffffff;display:block;font-family:'UniversLTStd-Cn','Roboto', sans-serif;font-size: 1rem;font-weight:normal;line-height:56px;text-align:center;text-decoration:none;text-transform: uppercase !important;width:220px;height: 52px;margin:0 ;-webkit-text-size-adjust:none;mso-hide:all;" class="_cta_btn remove-btn" ><span class="button-text">${buttonLabel4}</span></a><br>
                           <!--[if mso]></td></tr></table><![endif]-->
                </div>
             <!--[if (mso)|(IE)]></td></tr>  </table><![endif]-->
                </td></tr>


    `;  
     
        container.appendChild(template);

      }


        function removeTemplate8() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_body-image");
        if (templates.length > 0) {
            container.removeChild(templates[templates.length - 1]);
        }
    }


          //-------------------------------------------
       
        function addTemplate9() {
        var fullHeroImage = document.getElementById("full-body-img").value;
        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_full-img-section";
        template.style.maxWidth = "600px";
        template.width = "600";
        template.style.width = "100%";
        template.style.backgroundColor = "#fffff";
        template.style.margin = "0 auto";
        template.style.padding = "0";
         template.border = "0";
         template.cellPadding = "0"; 
         template.cellSpacing = "0"; 
         template.role = "presentation";
         template.align = "center";

        template.borderCollapse = "collapse";
        template.style.tableLayout = "fixed";
        template.style.verticalAlign = "top";
    
        template.innerHTML = `

<tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; margin: 0;padding:0;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #FFFFFF;margin: 0;padding:0;"><![endif]-->

            <div align="center" style="margin: 0;padding:0;">
                    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px;line-height:0px;"><td style="padding-right: 0px; padding-left: 0px;" align="center"><![endif]-->
                   
                        <img align="center" border="0" src="${fullHeroImage}" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;width: 100%;max-width: 600px" width="600" id="imageAlt3">
           
                    <!--[if mso]></td></tr></table><![endif]-->
                </div>
             <!--[if (mso)|(IE)]></td></tr>  </table>
              <![endif]-->
                </td></tr>
                
 
            `;
        container.appendChild(template);
    }

        function removeTemplate9() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_full-img-section");
        if (templates.length > 0) {
            container.removeChild(templates[templates.length - 1]);
        }
    }

       //-------------------------------------------

   function createFullWidthColumn() {
            const container = document.getElementById('container');
            var buttonLabel5 = document.getElementById("buttonLabel5").value;
            var buttonHref5 = document.getElementById("buttonHref5").value;
            
            let table = document.getElementById('dynamicTable');
            if (!table) {
                table = document.createElement('table');
                table.id = 'dynamicTable';
                table.border="0" ;
                table.cellpadding="0" ;
                table.cellspacing="0";
                table.width = "600";
                table.style.maxWidth = "574px";
                table.role = "presentation";
                table.style.width = "100%";
                table.style.borderSpacing = "10px";
                table.style.borderCollapse = "separate";
                table.style.padding = "0";
                table.style.margin = "0 auto";
                 container.appendChild(table);
            }
            
            let newRow = table.insertRow();
            newRow.align = 'center';
            newRow.style.display = 'flex';
            newRow.style.flexWrap = 'wrap';
            newRow.style.justifyContent = 'space-between';
            
            const newCell = newRow.insertCell();
            newCell.className = 'full-width';

            newCell.style.boxSizing = 'border-box';
            newCell.style.marginBottom = '10px';
            newCell.style.display = 'grid'; 
            newCell.style.textAlign = 'center'; 
            newCell.style.flexGrow = '1'; 
            newCell.style.flexShrink = '0'; 
            newCell.style.minWidth = '215px';
            newCell.style.width = '100%';
            newCell.style.marginBottom = '16px';
            
            
              newCell.innerHTML = `
        <!--[if mso]>
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
                <tr valign="top">
                  <td align="center" valign="middle" width="100%">
              <![endif]-->


        <!--[if mso]>
                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref5}" target="_blank" style="height:56px; v-text-anchor:middle;width:220px;height: 52px;" arcsize="11.11111111111111%" strokecolor="#364647" fillcolor="#464647"><w:anchorlock/><center style="color:#ffffff;font-family:'UniversLTStd-Cn','Roboto', sans-serif; font-size:16px;font-weight:bold;text-transform:uppercase;" class="_cta_btn button-text">${buttonLabel5}</center></v:roundrect>
                      <![endif]-->
        <!--[if !mso]><!-->

        <a href="${buttonHref5}" style="background-color: #f2f2f2; color: #333;font-family: 'UniversLTStd-Cn', Helvetica, Arial, Tahoma, sans-serif;text-align: center;font-size: 1rem;font-weight: normal;height: auto;text-transform: uppercase;text-decoration: none; padding: 24px 42px 20px;" target="_blank">${buttonLabel5}</a>
   

        <!--<![endif]-->


        <!--[if mso]>
                  </td>
                </tr>
                    <tr height="46"></tr>
              </table>
              <![endif]-->

        `;
            
        }
        

        function createHalfWidthColumn() {
            const container = document.getElementById('container');
            var buttonLabel5 = document.getElementById("buttonLabel5").value;
            var buttonHref5 = document.getElementById("buttonHref5").value;
            
            let table = document.getElementById('dynamicTable');
            if (!table) {
                table = document.createElement('table');
                table.id = 'dynamicTable';
                table.border="0" ;
                table.cellpadding="0" ;
                table.cellspacing="0";
                table.width = "600";
                table.style.maxWidth = "574px";
                table.role = "presentation";
                table.style.width = "100%";
                table.style.borderSpacing = "10px";
                table.style.borderCollapse = "separate";
                table.style.padding = "0";
                table.style.margin = "0 auto";
                container.appendChild(table);
            }
            
            let lastRow = table.rows[table.rows.length - 1];
            if (!lastRow || lastRow.cells.length === 2 || lastRow.cells[0].className === 'full-width') {
                lastRow = table.insertRow();
                  
            lastRow.align = 'center';
            lastRow.style.display = 'flex';
            lastRow.style.flexWrap = 'wrap';
            lastRow.style.justifyContent = 'space-between';
                
            lastRow.style.width = '100%'; 
            lastRow.style.textAlign = 'center';  
            lastRow.style.flexBasis = '100%';
            }
            

            
            const newCell = lastRow.insertCell();
            newCell.className = '_remove_margin';
            newCell.style.boxSizing = 'border-box';
            newCell.style.display = 'grid'; 
            newCell.style.textAlign = 'center'; 
            newCell.style.flexGrow = '1'; 
            newCell.style.flexShrink = '0'; 
            newCell.style.minWidth = '215px';
            newCell.style.maxWidth = '268px';
            newCell.style.width = '100%';
            newCell.style.marginBottom = '16px';




            
            newCell.innerHTML = `
        <!--[if mso]>
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600">
                <tr>
                  <td align="center" valign="middle" width="100%">
              <![endif]-->


        <!--[if mso]>
                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref5}" target="_blank" style="height:56px; v-text-anchor:middle;width:220px;height: 52px;" arcsize="11.11111111111111%" strokecolor="#464647" fillcolor="#464647"><w:anchorlock/><center style="color:#ffffff;font-family:'UniversLTStd-Cn','Roboto', sans-serif; font-size:16px;font-weight:bold;text-transform:uppercase;" class="_cta_btn button-text">${buttonLabel5}</center></v:roundrect>
                      <![endif]-->
        <!--[if !mso]><!-->

        <a href="${buttonHref5}" style="height: auto; width: 100%; max-width: 268px; text-align: center; justify-content: center; margin: 0 auto 0 0; background-color: #f2f2f2;border: none; text-decoration: none; text-transform: uppercase; color: #333; font-family: 'UniversLTStd-Cn','Roboto', sans-serif; font-size: 1rem; font-weight: normal; padding: 24px 0 20px; "target="_blank">${buttonLabel5}</a>

        <!--<![endif]-->


        <!--[if mso]>
                  </td>
                </tr>
                    <tr height="46"></tr>
              </table>
              <![endif]-->

        `;

                 if (lastRow.cells.length === 1) {
                newCell.style.marginRight = '16px';
            }

            if (lastRow.cells.length === 3) {
                createFullWidthColumn();
            }
        }

        function removeColumn() {
            const table = document.getElementById('dynamicTable');
            if (!table) return;

            const rows = table.rows;
            if (rows.length === 0) return;

            let lastRow = rows[rows.length - 1];
            if (lastRow.cells.length > 0) {
                lastRow.deleteCell(-1);
                if (lastRow.cells.length === 0) {
                    table.deleteRow(-1);
                }
            } else if (rows.length > 1) {
                table.deleteRow(-1);
                lastRow = rows[rows.length - 1];
                lastRow.deleteCell(-1);
            }

            if (table.rows.length === 0) {
                table.remove();
            }
        }

        document.getElementById('addFullWidthBtn').addEventListener('click', createFullWidthColumn);
        document.getElementById('addHalfWidthBtn').addEventListener('click', createHalfWidthColumn);
        document.getElementById('removeColumnBtn').addEventListener('click', removeColumn);

       //-------------------------------------------

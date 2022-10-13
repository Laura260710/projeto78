var images = 
[ "familia.jpg", "eu.jpg", "irma.jpg", "Mae.jpg", "pai.jpg", "tia.jpg" ];

var names = ["Álbum de Família","Laura Paim", "Isadora Paim", "Cristine Paim", "Luiz Eduardo Silveira", "Cristiane Paim"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}
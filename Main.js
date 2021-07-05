var family=["My Loving Family.jfif","Aai.jpeg","Baba.jpeg","Grandfather.jfif","Grandmother.jfif","Ayush.jfif","Kaku.jfif","Kaka.jfif","Pranay.jfif"];
var names =["My Famiy Book","Chaitrali Bhat (Aai)","Rupesh Bhat (Baba)","Dattaatray Bhat(Dada)","Shalini Bhat(Aaji)","Ayush Bhat(Brother)","Nishigandha Bhat(Kaku)","Mangesh Bhat(Kaka)","Pranay Bhat(My self)"];
var i =0;
function update(){i++; 
     
     if (i>8) {
         i=0; }
         var updated_images= family[i];
         var updated_names= names[i];
document.getElementById("Loving_Family").src=updated_images;
document.getElementById("Family_Name").innerHTML=updated_names;
}
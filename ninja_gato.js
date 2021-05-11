

mi_imagen1=new Image
mi_imagen1.src="/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/ninja-gato/carpeta sin título/ninja1.jpeg"
mi_imagen2=new Image
mi_imagen2.src="/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/ninja-gato/carpeta sin título/gato1.jpeg"
var i=1;
function cambia_imagen() {                      
   if (i == 1)
      {
      document.images['prueba'].src=mi_imagen2.src
      i=2;
      }
   else
      {
      document.images['prueba'].src=mi_imagen1.src;
      i=1;
      }
   }



   mi_imagen3=new Image
   mi_imagen3.src="/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/ninja-gato/carpeta sin título/ninja2.jpeg"
   mi_imagen4=new Image
   mi_imagen4.src="/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/ninja-gato/carpeta sin título/gato2.jpeg"
   var i=1;
   function cambia_imagen1() {                      
      if (i == 1)
         {
         document.images['prueba1'].src=mi_imagen4.src
         i=2;
         }
      else
         {
         document.images['prueba1'].src=mi_imagen3.src;
         i=1;
         }
      }

      mi_imagen5=new Image
      mi_imagen5.src="/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/ninja-gato/carpeta sin título/ninja3.jpeg"
      mi_imagen6=new Image
      mi_imagen6.src="/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/ninja-gato/carpeta sin título/gato3.jpeg"
      var i=1;
      function cambia_imagen2() {                      
         if (i == 1)
            {
            document.images['prueba2'].src=mi_imagen6.src
            i=2;
            }
         else
            {
            document.images['prueba2'].src=mi_imagen5.src;
            i=1;
            }
         }

         mi_imagen7=new Image
         mi_imagen7.src="/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/ninja-gato/carpeta sin título/ninja4.jpeg"
         mi_imagen8=new Image
         mi_imagen8.src="/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/ninja-gato/carpeta sin título/gato4.jpeg"
         var i=1;
         function cambia_imagen3() {                      
            if (i == 1)
               {
               document.images['prueba3'].src=mi_imagen8.src
               i=2;
               }
            else
               {
               document.images['prueba3'].src=mi_imagen7.src;
               i=1;
               }
            }

            mi_imagen10=new Image
            mi_imagen10.src="/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/ninja-gato/carpeta sin título/ninja5.jpeg"
            mi_imagen9=new Image
            mi_imagen9.src="/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/ninja-gato/carpeta sin título/gato5.jpeg"
            var i=1;
            function cambia_imagen4() {                      
               if (i == 1)
                  {
                  document.images['prueba4'].src=mi_imagen10.src
                  i=2;
                  }
               else
                  {
                  document.images['prueba4'].src=mi_imagen9.src;
                  i=1;
                  }
               }
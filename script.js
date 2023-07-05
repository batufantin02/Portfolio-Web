let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// FUNCION DESCARGA DE PDF

// function descargarCV() {
//     // URL del archivo PDF
//     var url = "http://127.0.0.1:5500/FantinBaltazarCv.pdf";
  
//     // Crear un elemento <a> invisible
//     var link = document.createElement("a");
//     link.style.display = "none";
//     document.body.appendChild(link);
  
//     // Establecer la URL del archivo PDF
//     link.href = url;
  
//     // Establecer el nombre del archivo
//     link.download = "Fantin Garcia, Baltazar - CV.pdf";
  
//     // Simular un clic en el enlace para iniciar la descarga
//     link.click();
  
//     // Eliminar el elemento <a> del DOM
//     document.body.removeChild(link);
//   }
  
// function descargarcv() {
//     // Nombre del archivo PDF que deseas descargar
//     var nombreArchivo = "FantinBaltazarCv.pdf";

//     // Ruta del archivo PDF
//     var rutaArchivo = "C:\Portfolio Web\FantinBaltazarCv.pdf.pdf";

//     // Crear un enlace temporal
//     var link = document.createElement("a");
//     link.href = rutaArchivo;
//     link.download = nombreArchivo;

//     // // Simular el clic en el enlace para iniciar la descarga
//     // document.body.appendChild(link);
//     // link.click();
//     // document.body.removeChild(link);
//   }
// function downloadFile(path: string, fileName: string){
//     const downloadInstance = document.createElement('a');
//     downloadInstance.href = 'http://127.0.0.1:5500/FantinBaltazarCv.pdf';
//     downloadInstance.target = '_blank';
//     downloadInstance.download = 'FantinBaltazarCv';
//     document.body.appendChild(downloadInstance);
//     downloadInstance.click();
//     document.body.removeChild(downloadInstance);
// }
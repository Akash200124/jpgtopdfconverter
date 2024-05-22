// document.getElementById('upload').addEventListener('change', function(e) {
//     var reader = new FileReader();
//     reader.onload = function(event) {
//         var img = new Image();
//         img.src = event.target.result;
//         img.onload = function() {
//             var canvas = document.createElement('canvas');
//             canvas.width = img.width;
//             canvas.height = img.height;

//             var ctx = canvas.getContext('2d');
//             ctx.drawImage(img, 0, 0, img.width, img.height);

//             var pngDataUrl = canvas.toDataURL("image/png"); // Save as pdf
//             var link = document.createElement('a');
//             link.href = pngDataUrl;
//             link.download = 'output.png'; // Specify the filename for the downloaded file
//             link.style.display = 'none'; // Hide the link
//             document.body.appendChild(link); // Add the link to the body temporarily
//             link.click(); // Trigger the download
//             document.body.removeChild(link); // Clean up after the download
//         };
//     };
//     reader.readAsDataURL(e.target.files[0]);
// });

document.getElementById('upload').addEventListener('change', function(e) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.src = event.target.result;
        img.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);

            var imgDataUrl = canvas.toDataURL("image/png"); // Save as PNG
            // var link = document.createElement('a');
            // link.href = pngDataUrl;
            // link.download = 'output.png';

            // Generate PDF using jsPDF
            const { jsPDF } = window.jspdf;
            var pdf = new jsPDF();

            // Add image to PDF
            pdf.addImage(imgDataUrl, 'PNG', 0, 0, img.width / 4, img.height / 4); // Adjust size as needed

            // Save the PDF
            pdf.save('output.pdf');
        };
    };
    reader.readAsDataURL(e.target.files[0]);
});


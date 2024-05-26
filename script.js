document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateButton").addEventListener("click", function(event) {
        event.preventDefault();
        var name = document.getElementById("name_in_card").value;
        var profession = document.getElementById("profession_in_card").value;
        var phone = document.getElementById("phone_in_card").value;
        var email = document.getElementById("email_in_card").value;
        var location = document.getElementById("location_in_card").value;

        var businessCardHTML = `
            <div class="card-content">
                <h3>${name}</h3>
                <p>${profession}</p>
                <p>Phone: ${phone}</p>
                <p>Email: ${email}</p>
                <p>Location: ${location}</p>
            </div>
        `;
        var previewCard = document.getElementById("preview");
        previewCard.innerHTML = businessCardHTML;
    });

    document.getElementById("downloadButton").addEventListener("click", function() {
        var card = document.getElementById("preview");
        html2canvas(card).then(function(canvas) {
            var link = document.createElement('a');
            link.download = 'business_card.jpg';
            link.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            link.click();
        });
    });
});
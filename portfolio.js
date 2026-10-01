const portfolioContainer = document.getElementById("portfolio");

if (portfolioContainer) {

    fetch("data/portfolio.json")
        .then(response => response.json())
        .then(data => {

            data.forEach(property => {

                const card = document.createElement("article");

                card.className = "portfolio-card";

                card.innerHTML = `
                    <img
                        src="${property.image}"
                        alt="${property.title}"
                    >

                    <div class="portfolio-info">

                        <div class="portfolio-status">
                            ПРОДАНО
                        </div>

                        <h2>${property.title}</h2>

                        <p class="portfolio-location">
                            ${property.location}
                        </p>

                        <div class="portfolio-details">
                            <span>${property.area}</span>
                            <span>${property.rooms} комнаты</span>
                        </div>

                    </div>
                ` ;

                portfolioContainer.appendChild(card);

            });

        })
        .catch(error => {
            console.error(
                "Ошибка загрузки портфолио:",
                error
            );
        });

}
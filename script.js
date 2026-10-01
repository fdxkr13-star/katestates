const propertiesContainer = document.getElementById("properties");

if (propertiesContainer) {

    fetch("data/project.json")
        .then(response => response.json())
        .then(data => {

            data.forEach(property => {

                const card = document.createElement("article");

                card.className = "property-card";

                card.innerHTML = `
                    <img
                        src="${property.image}"
                        alt="${property.title}"
                    >

                        <div class="property-info">

                            <h2>${property.title}</h2>

                            <p class="property-location">
                                ${property.location}
                            </p>

                            <div class="property-details">
                                <span>${property.area}</span>
                                <span>${property.rooms} комнаты</span>
                            </div>

                            <div class="property-bottom">
                                <span class="property-price">
                                    ${property.price}
                                </span>

                                <span class="property-more">
                                    Подробнее →
                                </span>
                            </div>

                        </div>
                        ` ;

                propertiesContainer.appendChild(card);

            });

        })
        .catch(error => {
            console.error("Ошибка загрузки недвижимости:", error);
        });

}
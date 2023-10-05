var locations = [
    { name: 'Tauranga, New Zealand', coordinates: [-37.6878, 176.1651], events: ['Canvas 2022', 'Canvas 2023', 'Te Puke Career Day', 'TGC Pathway Evening', 'ShadowTech'] },
    { name: 'Hamilton, New Zealand', coordinates: [-37.7870, 175.2793], events: ['IndigiData Conference'] },
    { name: 'Sydney, Australia', coordinates: [-33.8688, 151.2093], events: ['KCD Sydney'] },
    { name: 'Amsterdam, Netherlands', coordinates: [52.3676, 4.9041], events: ['Kubecon 2023'] },
    { name: 'Chicago, United States', coordinates: [41.8781, -87.6298], events: ['Kubecon 2023'] },
    { name: 'Berlin, Germany', coordinates: [52.5200, 13.4050], events: ['NixCon'] },
    { name: 'Israel', coordinates: [31.0461, 34.8516], events: ['Kubeday Israel'] },
    { name: 'Rotorua, New Zealand', coordinates: [-38.1368, 176.2497], events: ['Rotorua Career Expo'] },
];

var cityEvents = {
    'Tauranga, New Zealand': [
        { event: 'Canvas 2022', images: ['images/Canvas 22-4.jpg', 'images/Canvas 22.3.jpg', 'image3.jpg'] },
        { event: 'Canvas 2023', images: ['images/canvas-2023.jpg', 'image5.jpg', 'image6.jpg'] },
        { event: 'Te Puke Career Day', images: ['images/126.jpg', 'image8.jpg', 'image9.jpg'] },
        { event: 'TGC Pathway Evening', images: ['images/jay-tgc.png'] },
        { event: 'ShadowTech', images: ['images/shadowTech1.jpg', 'images/shadowTech2.jpg', 'images/shadowTech2.jpg'] }
    ],
    'Rotorua, New Zealand': [
        { event: 'Rotorua Career Expo', images: ['images/Expo23-3.jpg', 'expo23-6.jpg', 'Expo-23-4.jpg'] }
    ],
    'Hamilton, New Zealand': [
        { event: 'Indigidata Conference', images: ['images/indigidata.png', 'image35.jpg', 'image36.jpg'] }
    ],
    'Sydney, Australia': [
        { event: 'KCD Sydney', images: ['images/jay-kcd.jpeg'] }
    ],
    'Amsterdam, Netherlands': [
        { event: 'Kubecon 2023', images: ['images/kubecon-amsterdam.png'] }
    ],
    'Chicago, United States': [
        { event: 'Kubecon 2023', images: ['images/kubecon-chicago.png']}
    ],
    'Berlin, Germany': [
        { event: 'NixCon', images: ['images/nixcon-germany.png'] }
    ],
    'Israel': [
        { event: 'KubeDay Israel', images: ['images/hippieisrael.png'] },
    ]
};

var map = L.map('map2').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

var markers = L.markerClusterGroup();

locations.forEach(location => {
    var marker = L.marker(location.coordinates)
        .bindPopup(`<p>${location.name}</p>`)
        .on('click', function() {
            $('#cityName').text(location.name);
            $('#eventModal').modal('show');

            var eventTabs = document.getElementById('eventTabs');
            var eventTabContent = document.getElementById('eventTabContent');
            eventTabs.innerHTML = '';
            eventTabContent.innerHTML = '';

            if (cityEvents.hasOwnProperty(location.name)) {
                cityEvents[location.name].forEach((eventData, index) => {
                    var tabId = `tab-${index}`;
                    var contentId = `content-${index}`;
                    var tabLink = document.createElement('a');
                    tabLink.classList.add('nav-link');
                    tabLink.href = `#${contentId}`;
                    tabLink.role = 'tab';
                    tabLink.setAttribute('data-bs-toggle', 'tab');
                    tabLink.textContent = eventData.event;
                    eventTabs.appendChild(tabLink);

                    var tabPane = document.createElement('div');
                    tabPane.classList.add('tab-pane', 'fade');
                    if (index === 0) {
                        tabPane.classList.add('show', 'active');
                    }
                    tabPane.id = contentId;
                    tabPane.role = 'tabpanel';
                    tabPane.innerHTML = `
                        <div class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                ${eventData.images.map((image, imageIndex) => `
                                    <div class="carousel-item ${imageIndex === 0 ? 'active' : ''}">
                                        <img src="${image}" class="d-block w-100" alt="Event Image">
                                    </div>
                                `).join('')}
                            </div>
                            <a class="carousel-control-prev" href="#${contentId}" role="button" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#${contentId}" role="button" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    `;
                    eventTabContent.appendChild(tabPane);
                });
            }
        });

    marker.on('mouseover', function(e) {
        this.openPopup();
    });

    marker.on('mouseout', function(e) {
        this.closePopup();
    });

    markers.addLayer(marker);
});

map.addLayer(markers);

// Fit the map to all markers
var group = new L.featureGroup(markers.getLayers());
map.fitBounds(group.getBounds());
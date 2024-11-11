document.addEventListener('DOMContentLoaded', () => {
    countFollowers();
});

function countFollowers() {
    const fbFollowers = document.getElementById('fb-followers');
    const ytFollowers = document.getElementById('yt-followers');
    const xFollowers = document.getElementById('x-followers');
    const liFollowers = document.getElementById('li-followers');
    const igFollowers = document.getElementById('ig-followers');

    animateCount(fbFollowers, 2000);
    animateCount(ytFollowers, 10000);
    animateCount(xFollowers, 1000);
    animateCount(liFollowers, 500);
    animateCount(igFollowers, 6000);
}

function animateCount(element, maxCount) {
    let count = 0;
    const interval = setInterval(() => {
        count += Math.ceil(maxCount / 100);
        if (count >= maxCount) {
            count = maxCount;
            clearInterval(interval);
        }
        element.textContent = `${count.toLocaleString()}+`;
    }, 50);
}

function showParagraph(type) {
    const container = type === 'achievements' 
        ? document.getElementById('paragraph-container-achievements') 
        : document.getElementById('paragraph-container-aspirations');
    container.classList.toggle('hidden');
    if (!container.classList.contains('hidden')) {
        const paragraph = document.createElement('p');

        if (type === 'achievements') {
            paragraph.classList.add('achievements');
            paragraph.innerHTML = `
                <strong>Achievements:</strong><br>
                <ul>
                    <li><strong>Content Creator | YouTube (November 2023 – Present):</strong> Created and published tutorials on GIS software (AutoCAD, ArcGIS, ArcMap, QGIS, ERDAS Imagine, GEE, PostgreSQL). Grew the channel to 4000+ learners with high engagement. Managed production schedules and collaborated with followers to address learning needs.</li>
                    <li><strong>Project Leader | GeoAlgorithm Aces (August – October 2024):</strong> Developed a GEEMAP-based tool for assessing changes in tea land use and cover. Utilized Google Earth Engine and Google Colab for comprehensive land cover analysis. Secured first place in a competition, demonstrating effective team management and technical prowess.</li>
                    <li><strong>Mapathon Participant (October 2024):</strong> Actively participated in two mapathons, contributing precise and accurate maps to HOT Tasking Manager projects. Ensured high-quality mapping outputs for humanitarian tasks.</li>
                </ul>`;
        } else if (type === 'aspirations') {
            paragraph.classList.add('aspirations');
            paragraph.innerHTML = `
                <strong>Aspirations:</strong><br>
                To leverage skills in GIS software, digital content creation, and project management to contribute to the growth and success of geospatial initiatives as a leader and class expert.<br>
                To continuously innovate in the field of GIS and Remote Sensing by staying updated with the latest technologies and methodologies.<br>
                To expand your YouTube channel's reach, engaging with a broader audience and providing valuable educational content to aspiring GIS professionals worldwide.<br>
                To lead and participate in more community-driven mapping projects that have a positive impact on society and the environment.`;
        }
        container.appendChild(paragraph);
    } else {
        container.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const courseButtons = document.querySelectorAll('.parallelogram');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContent = document.getElementById('popup-content');
    const courseTitle = document.getElementById('course-title');
    const questionsContainer = document.getElementById('questions-container');
    const answersContainer = document.getElementById('answers-container');
    const showAnswersButton = document.getElementById('show-answers');
    const closePopupButton = document.getElementById('close-popup');
    const enrollButton = document.getElementById('enroll-button');

    const courses = {
        GIS: {
            title: "Geographical Information Systems",
            questions: [
                "QA: What does GIS stand for?",
                "QB: Name one key component of GIS.",
                "QC: What is a layer in GIS?",
                "QD: What is the primary use of GIS?",
                "QE: Name a popular GIS software.",
                "QF: What is a shapefile in GIS?",
                "QG: What is remote sensing?"
            ],
            answers: [
                "AnsA: GIS stands for Geographical Information System.",
                "AnsB: One key component of GIS is data.",
                "AnsC: A layer in GIS is a visual representation of a dataset.",
                "AnsD: The primary use of GIS is to analyze spatial data.",
                "AnsE: A popular GIS software is ArcGIS.",
                "AnsF: A shapefile is a common GIS file format for storing vector data.",
                "AnsG: Remote sensing is the acquisition of information about the Earth's surface via satellite or aerial sensors."
            ]
        },
        Cartography: {
            title: "Cartography",
            questions: [
                "QE: What does cartography study?",
                "QF: What is a map projection?",
                "QG: Name one type of map projection.",
                "QH: What is the purpose of a map legend?",
                "QI: What is the scale of a map?",
                "QJ: What is a topographic map?",
                "QK: Name a tool used in cartography."
            ],
            answers: [
                "AnsE: Cartography studies the art and science of map making.",
                "AnsF: A map projection is a method to represent the curved surface of the Earth on a flat map.",
                "AnsG: One type of map projection is the Mercator projection.",
                "AnsH: The purpose of a map legend is to explain the symbols and colors used on the map.",
                "AnsI: The scale of a map shows the relationship between distances on the map and actual distances on the ground.",
                "AnsJ: A topographic map shows the elevation and terrain of an area.",
                "AnsK: A tool used in cartography is a compass."
            ]
        },
        RS: {
            title: "Remote Sensing",
            questions: [
                "QL: What is remote sensing?",
                "QM: Name one type of remote sensing.",
                "QN: What is a satellite sensor?",
                "QO: What is the primary use of remote sensing?",
                "QP: Name one advantage of remote sensing.",
                "QQ: What is spectral resolution?",
                "QR: What is a digital elevation model (DEM)?"
            ],
            answers: [
                "AnsL: Remote sensing is the acquisition of information about the Earth's surface via satellite or aerial sensors.",
                "AnsM: One type of remote sensing is optical remote sensing.",
                "AnsN: A satellite sensor is a device on a satellite that collects data by detecting reflected or emitted electromagnetic radiation from the Earth's surface.",
                "AnsO: The primary use of remote sensing is to monitor and analyze the Earth's surface and atmosphere.",
                "AnsP: One advantage of remote sensing is the ability to collect data over large and inaccessible areas.",
                "AnsQ: Spectral resolution refers to the ability of a sensor to distinguish fine wavelength intervals.",
                "AnsR: A digital elevation model (DEM) is a 3D representation of a terrain's surface created from elevation data."
            ]
        },
        GISProgramming: {
            title: "GIS Programming",
            questions: [
                "QS: What programming language is commonly used in GIS applications?",
                "QT: What is a spatial database?",
                "QU: Name one library used for GIS programming in Python.",
                "QV: What is geocoding?",
                "QW: What is a geographic coordinate system?",
                "QX: Name one open-source GIS software.",
                "QY: What is the purpose of a GIS API?"
            ],
            answers: [
                "AnsS: Python is commonly used in GIS applications.",
                "AnsT: A spatial database is a database optimized to store and query data related to objects in space.",
                "AnsU: One library used for GIS programming in Python is `geopandas`.",
                "AnsV: Geocoding is the process of converting addresses into geographic coordinates.",
                "AnsW: A geographic coordinate system is a coordinate system that enables every location on Earth to be specified by a set of numbers or letters.",
                "AnsX: One open-source GIS software is QGIS.",
                "AnsY: The purpose of a GIS API is to provide developers with tools and methods to interact with GIS data and perform spatial analyses programmatically."
            ]
        },
        CommunicationSkills: {
            title: "Communication Skills",
            questions: [
                "QZ: What is active listening?"
            ],
            answers: [
                "AnsZ: Active listening is the practice of fully concentrating, understanding, responding, and remembering what is being said during a conversation."
            ]
        }
    };

    // Show popup with course content
    courseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const course = this.getAttribute('data-course');
            const courseData = courses[course];

            courseTitle.textContent = courseData.title;
            questionsContainer.innerHTML = courseData.questions.map(q => `<p>${q}</p>`).join('');
            answersContainer.innerHTML = courseData.answers.map(a => `<p>${a}</p>`).join('');

            popupOverlay.style.display = 'block';
        });
    });

    // Show/hide answers
    showAnswersButton.addEventListener('click', function () {
        if (answersContainer.style.display === 'none' || answersContainer.style.display === '') {
            answersContainer.style.display = 'block';
            this.textContent = 'Hide Answers';
        } else {
            answersContainer.style.display = 'none';
            this.textContent = 'Show Answers';
        }
    });

    // Close popup
    closePopupButton.addEventListener('click', function () {
        popupOverlay.style.display = 'none';
    });

    // Enroll button functionality
    enrollButton.addEventListener('click', function () {
        window.location.href = 'web.html';
    });
   

});

document.addEventListener('DOMContentLoaded', function () {
    let codeCount = 0;
    const codeData = [];

    const courseButtons = document.querySelectorAll('.parallelogram');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContent = document.getElementById('popup-content');
    const courseTitle = document.getElementById('course-title');
    const questionsContainer = document.getElementById('questions-container');
    const answersContainer = document.getElementById('answers-container');
    const showAnswersButton = document.getElementById('show-answers');
    const closePopupButton = document.getElementById('close-popup');
    const enrollButton = document.getElementById('enroll-button');
    const addQuestionButton = document.createElement('button');

    addQuestionButton.textContent = 'Add Question';
    addQuestionButton.id = 'add-question';
    addQuestionButton.style.margin = '10px 0';
    addQuestionButton.style.padding = '5px 10px';
    addQuestionButton.style.background = '#FFC107';
    addQuestionButton.style.color = 'white';
    addQuestionButton.style.border = 'none';
    addQuestionButton.style.cursor = 'pointer';
    popupContent.appendChild(addQuestionButton);

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
                "QG: Name one type of map projection?",
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
        window.location.href = 'skills.html';
    });

    // Add new question
    addQuestionButton.addEventListener('click', function () {
        const newQuestion = prompt('Enter your new question:');
        const newAnswer = prompt('Enter the answer to your new question:');
        
        if (newQuestion && newAnswer) {
            const currentCourse = Object.values(courses).find(course => course.title === courseTitle.textContent);
            if (currentCourse) {
                currentCourse.questions.push(newQuestion);
                currentCourse.answers.push(newAnswer);

                questionsContainer.innerHTML = currentCourse.questions.map(q => `<p>${q}</p>`).join('');
                answersContainer.innerHTML = currentCourse.answers.map(a => `<p>${a}</p>`).join('');
            }
        }
    });

    // Load Profile Image
    window.loadProfilePic = function(event) {
        const output = document.getElementById('profile-pic');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
            URL.revokeObjectURL(output.src); // Free memory
        }
    }

   // Store Code
window.storeCode = function() {
    const codeArea = document.getElementById('code-area');
    const notebook = document.getElementById('notebook');
    codeCount += 1;
    const code = codeArea.value;
    codeData.push({ code, date: new Date() });

    const codeBlock = document.createElement('div');
    codeBlock.classList.add('code-block');
    const title = document.createElement('div');
    title.classList.add('code-block-title');
    title.textContent = `Code_${codeCount}`;
    codeBlock.appendChild(title);

    const pre = document.createElement('pre');
    pre.textContent = code;
    codeBlock.appendChild(pre);

    notebook.appendChild(codeBlock);
    codeArea.value = '';

    updateChart();
}

// Search in Code
window.searchInCode = function() {
    const searchInput = document.getElementById('search-input').value;
    const notebook = document.getElementById('notebook');
    const regex = new RegExp(searchInput, 'gi');
    notebook.innerHTML = notebook.innerHTML.replace(/<\/?span[^>]*>/gi, ''); // Remove old highlights

    notebook.innerHTML = notebook.innerHTML.replace(regex, (match) => `<span class="highlight">${match}</span>`);
}

// Chart.js Setup
const ctx = document.getElementById('coding-progress-chart').getContext('2d');
const codingProgressChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Coding Progress',
            data: new Array(12).fill(0),
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Lines of Code (in hundreds)'
                }
            }
        }
    }
});

function updateChart() {
    const progressData = new Array(12).fill(0);
    codeData.forEach(({ date }) => {
        const month = date.getMonth();
        progressData[month] += 1;
    });

    codingProgressChart.data.datasets[0].data = progressData.map(count => count * 0.5);
    codingProgressChart.update();
}

// Set up date and time display
const updateDateTime = () => {
    const now = new Date();
    document.getElementById('datetime').innerHTML = now.toLocaleString('en-GB', { timeZone: 'Africa/Nairobi' });
};
setInterval(updateDateTime, 1000);

// Save chart as image at the end of the year
const saveChartAsImage = () => {
    const link = document.createElement('a');
    link.download = 'coding-progress.png';
    link.href = codingProgressChart.toBase64Image();
    link.click();
};

// Reset chart data and save image at the end of the year
const checkEndOfYear = () => {
    const now = new Date();
    if (now.getMonth() === 0 && now.getDate() === 1 && now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        saveChartAsImage();
        codeData.length = 0; // Clear code data
        codingProgressChart.data.datasets[0].data = new Array(12).fill(0);
        codingProgressChart.update();
    }
};
setInterval(checkEndOfYear, 1000);

// Contact information movement
window.addEventListener('scroll', () => {
    const contactInfo = document.getElementById('contact-info');
    if (window.scrollY > 100) {
        contactInfo.classList.add('show');
        contactInfo.classList.remove('hide');
    } else {
        contactInfo.classList.add('hide');
        contactInfo.classList.remove('show');
    }
});

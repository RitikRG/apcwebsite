// This js file is for displaying the content when needed;

var eventsSectionTextPlaceholder = document.getElementById("events-section-read-more-holder");

var text = "With the dynamic landscape of technology shaping our future, the event served as a platform to delve into the transformative power of AI and its implications across various fields. The speaker edified the students with profound insights, sparking discussions and igniting curiosity about the limitless possibilities AI holds. Following the enlightening presentations, attendees engaged in vibrant discussions with the speaker, delving into the nuances of AI's impact on diverse domains such as healthcare, finance, education, and beyond. The interactive session provided a platform for exchanging ideas, challenging perspectives, and fostering collaboration among students, faculty, and professionals alike. Students were encouraged to embrace a mindset of lifelong learning, recognizing AI as a dynamic field that demands continuous exploration, adaptation, and innovation to stay abreast of evolving trends and emerging opportunities. The seminar, aimed at familiarizing students with the rapidly growing artificial intelligence sector in businesses, received over a 100 registrations and witnessed 50+ enthusiastic participants who were felicitated with an e-certificate. The session was not only informational but also instilled a passion for AI/ML amongst the students."

function expandText(){
    eventsSectionTextPlaceholder.innerText=text;
    document.getElementById("events-section-btn").classList.add("hide-element")
}

document.getElementById("events-section-btn").addEventListener('click', expandText)
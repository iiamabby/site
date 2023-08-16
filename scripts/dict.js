function createTooltips() {
    const tips = document.querySelectorAll('.tip');
    
    tips.forEach((tip) => {
        const term = tip.getAttribute('data-term');
        const explanation = getExplanationForTerm(term);

        if (explanation) {
            const tiptext = document.createElement('span');
            tiptext.classList.add('tiptext');
            tiptext.textContent = explanation;
            tip.appendChild(tiptext);
        }
    });
}

function getExplanationForTerm(term) {
    const dictionary = {
        'services': 'A service is a special tool or function that can do certain things and can be used by other computer programs.',
        'resources': 'Resources are the ingredients that come together to make a tasty cake. In this case, they are the building blocks for an application.',
        'data-centers': 'Data centers are big warehouses where computers and important data are stored and kept safe.',
        'microservices': 'Microservices are tiny helpers that work together to do a big job. Each microservice has its own specific task, and they cooperate to make an application work efficiently.',
        'cloud-native-application': 'A cloud native application is a smart and flexible app that lives on the internet. It can do all sorts of cool things without needing a lot of space on your own device.',
        'compiled': 'Compiling is the process of translating a story from one language to another. The computer turns the human-readable code into a special language that it can understand and execute.',
        'remote-cloud-server': 'A remote cloud server is a powerful computer located far away in a special data center. It can run applications and send the results to your device over the internet.'
    };

    return dictionary[term] || 'Explanation not available.';
}

// Call the function to create tooltips once the DOM is ready
document.addEventListener('DOMContentLoaded', createTooltips);

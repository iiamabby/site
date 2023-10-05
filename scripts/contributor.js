const modals = document.querySelectorAll('.modal-path');
const clickmeBoxes = document.querySelectorAll('.clickme-box');
const closeButtons = document.querySelectorAll('.close-2');
const squares = document.querySelectorAll('.square');
const modalOptions = document.querySelectorAll('.modal-option');
const img = document.getElementById('img');
const eve = document.getElementById('eve');
const next = document.getElementById('next');
const seeProg = document.getElementById('see-prog');
const seeProgModal = document.getElementById('see-prog-modal');
const nonCodeModal = document.getElementById('non-code-modal');
const gitModal = document.getElementById('tools-modal-git');
const commJoin = document.getElementById('comm-join-modal');
const commJoinClick = document.getElementById('comm-join');

const git = document.getElementById('git');
const waystocontribute = document.getElementById('waystocontribute');

const sectionSteps = [
    { id: 'community', step: 1 },
    { id: 'project', step: 2 },
    { id: 'documentation', step: 3 },
    { id: 'collab', step: 4 },
    { id: 'code', step: 5 },
    { id: 'non-code', step: 6 },
    { id: 'tools', step: 7 },
];



for (let i = 0; i < modalOptions.length; i++) {
    modalOptions[i].addEventListener('click', (event) => {
        const modalId = event.currentTarget.getAttribute('data-modal-id');
        showSingleModal(modalId);
    });
    closeButtons.forEach(e => {
        e.addEventListener('click', () => closeModal(modals[i]));
    });

}

 next.addEventListener('click', () => {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains('s-active') || squares[i].classList.contains('s-p-active')) {
            squares[i].classList.remove('s-active', 's-p-active');
            squares[i + 1].classList.add('s-active');
            img.style.left = `${205 * (i + 1)}px`; // Updated this line
            if (i === 4) {
                eve.src = "../images/eve3.png";
            } else if (i === 5) {
                eve.src = "../images/eve2.png";
            } else {
                eve.src = "../images/EVE-icon.png";
            }
            break;
        }
    }

    const currentStep = Array.from(squares).findIndex((square) => square.classList.contains('s-active')) + 1;

    for (const section of sectionSteps) {
        const sectionElement = document.getElementById(section.id);
        if (section.step === currentStep) {
            sectionElement.style.display = 'block';
            sectionElement.style.top = `${180}px`;
        } else {
            sectionElement.style.display = 'none';
        }
    }
});

const prev = document.getElementById('prev'); // Add a reference to the "Previous" button

prev.addEventListener('click', () => {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains('s-active') || squares[i].classList.contains('s-p-active')) {
            squares[i].classList.remove('s-active', 's-p-active');
            squares[i - 1].classList.add('s-active');
            img.style.left = `${205 * (i - 1)}px`; // Updated this line
            if (i === 1) {
                eve.src = "../images/eve2.png";
            } else if (i === 4) {
                eve.src = "../images/eve4.png";

            } else {
                eve.src = "../images/EVE-icon.png";
            }
            break;
        }
    }

    const currentStep = Array.from(squares).findIndex((square) => square.classList.contains('s-active')) + 1;

    for (const section of sectionSteps) {
        const sectionElement = document.getElementById(section.id);
        if (section.step === currentStep) {
            sectionElement.style.display = 'block';
            sectionElement.style.top = `${200}px`;
        } else {
            sectionElement.style.display = 'none';
        }
    }
});
function showSingleModal(modalId) {
    for (const modal of modals) {
        if (modal.id === modalId) {
            modal.style.display = 'block';
        } else {
            modal.style.display = 'none';
        }
    }
}
function showModal(modal) {
    modal.style.display = 'block'; // Changed display property to 'block'
}
function closeModal(modal) {
    modal.style.display = 'none';
}
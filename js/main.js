const titleGroup = document.querySelector(".transfer-navigation-title.group")
const titleIndividual = document.querySelector(".transfer-navigation-title.individual")
const transferGroup = document.querySelector(".group-transfer")
const transferIndividual = document.querySelector(".individual-transfer")
const ctaButton = document.querySelectorAll(".cta-button")
const flutter = document.querySelector(".flutter")
const contentForm = document.querySelector('.section-content-form');
const datesArrival = document.querySelector('.form-content-dates-arrival');
const humanData = document.querySelector('.form-content-human-data');
const thanksModalWrapper = document.querySelector('.thanks-modal-wrapper');
const buttonContinued = document.querySelectorAll(".form-button-continued")
const flutterClose = document.querySelector('.form-close')
const buttonVerify = document.querySelector('.form-button-verify')

ctaButton.forEach(item =>{
    item.addEventListener('click', () =>{
        flutter.classList.remove('none')
        document.body.style.overflow = 'hidden'
    })
})

const container = document.querySelector(".container-prices");
const image = document.querySelector(".prices-image");

document.getElementById('header-hamburger-menu').addEventListener('click', function () {
    const popupMenu = document.getElementById('header-popup-menu');
    const navItems = document.querySelectorAll('.nav-links-el');

    if (popupMenu.classList.contains('none')) {
        popupMenu.classList.remove('none');
    } else {
        popupMenu.classList.add('none');
    }

    navItems.forEach(function(navItem) {
        navItem.addEventListener('click', function() {
            popupMenu.classList.add('none');
        });
    });
});

document.getElementById('footer-hamburger-menu').addEventListener('click', function () {
    const popupMenu = document.getElementById('footer-popup-menu');
    const navItems = document.querySelectorAll('.nav-links-el');

    if (popupMenu.classList.contains('none')) {
        popupMenu.classList.remove('none');
    } else {
        popupMenu.classList.add('none');
    }

    navItems.forEach(function(navItem) {
        navItem.addEventListener('click', function() {
            popupMenu.classList.add('none');
        });
    });
});

const steps = Array.from(form.querySelectorAll('.form-content-human-data, .form-content-info-data, .form-content-dates-arrival'));
const prevButton = form.querySelectorAll('.form-prev');
const closeButton = form.querySelector('.form-close');
const formDataInputs = form.querySelectorAll('.form-data-input');
const errorMessage = form.querySelector('.error-message');
let currentStep = 0;

const updateForm = () => {
    steps.forEach((step, index) => {
        step.classList.toggle('none', index !== currentStep);
    });
    prevButton.forEach(item => {
        item.classList.toggle('none', currentStep === 0);
    })
};

function formData() {
    const form = document.querySelector('.form');

    form.addEventListener('change', function(event) {
        const target = event.target;
        if (target.classList.contains('form-checkIn')) {
            const checkInDateSpan = target.closest('.form-group-input-data').querySelector('.checkInDateSpan');
            checkInDateSpan.textContent = formatDate(target.value);
            checkInDateSpan.style.color = '#4d4d4d';
        }
        if (target.classList.contains('form-checkOut')) {
            const checkOutDateSpan = target.closest('.form-group-input-data').querySelector('.checkOutDateSpan');
            checkOutDateSpan.textContent = formatDate(target.value);
            checkOutDateSpan.style.color = '#4d4d4d';
        }
    });

    form.addEventListener('click', (event) => {
        if (event.target.closest('.form-button-continued')) {
            event.preventDefault(); 
            if (currentStep === 0) {
                let isValid = true;
                formDataInputs.forEach(input => {
                    const value = input.value.trim();
    
                    if (value === '') {
                        isValid = false;
                        errorMessage.classList.remove('none');
                        input.classList.add('input-error');
                    } else if (input.classList.contains('phone-input')) {
                        const phonePattern = /^(\+7|7|8)\d{10}$/;
                        if (!phonePattern.test(value)) {
                            isValid = false;
                            errorMessage.classList.remove('none');
                            input.classList.add('input-error');
                        } else {
                            input.classList.remove('input-error');
                        }
                    } else {
                        input.classList.remove('input-error');
                    }
                });
                if (isValid) {
                    errorMessage.classList.add('none');
                    currentStep++;
                    updateForm();
                }
            } else {
                currentStep++;
                updateForm();
            }            
        } else if (event.target.closest('.form-prev')) {
            event.preventDefault();
            formDataInputs.forEach(input => {
                input.classList.remove('input-error');
            });
            errorMessage.classList.add('none');
            if (currentStep > 0) {
                currentStep--;
                updateForm();
            }
        } else if (event.target.closest('.form-close')) {
            event.preventDefault();
            flutter.classList.add('none');
            document.body.style.overflow = 'visible';
            currentStep = 0;
            updateForm();
        }
    });
    
    function formatDate(date) {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = String(d.getFullYear()).slice(-2);
        return `${day}.${month}.${year}`;
    }

    document.addEventListener('click', (event) => {
        if (!form.contains(event.target) && !event.target.closest('.cta-button')) {
            flutter.classList.add('none');
            document.body.style.overflow = 'visible';
            currentStep = 0;
            updateForm();
        }
    });

    // Инициализация формы
    updateForm();
}

function formOrderCall() {
    const ordeCallBlock = document.querySelector('.form-order-call-block')
    const form = document.querySelector('.form')
    document.querySelector('.form-order-call-select-container-button').addEventListener('click', (e) =>{
        e.preventDefault()
        if (ordeCallBlock.classList.contains('none')) {
            ordeCallBlock.classList.remove('none');
        } else {
            ordeCallBlock.classList.add('none');
        }
    })

    ordeCallBlock.querySelectorAll('.form-order-call-list li').forEach(function(item) {
        const titleText = document.querySelector(".form-order-call-checkbox-title")
        item.addEventListener('click', function() {
            titleText.innerText = this.getAttribute('data-value');
            ordeCallBlock.classList.add('none');
        });
    });
}

if (titleGroup) {
    titleGroup.addEventListener("click", function(){
        document.querySelectorAll('.transfer-navigation-title').forEach(item => item.classList.remove('active'))
        titleGroup.classList.add('active')
        transferGroup.classList.remove('none')
        transferIndividual.classList.add('none')
    })
}

if (titleIndividual) {
    titleIndividual.addEventListener("click", function(){
        document.querySelectorAll('.transfer-navigation-title').forEach(item => item.classList.remove('active'))
        titleIndividual.classList.add('active')
        transferIndividual.classList.remove('none')
        transferGroup.classList.add('none')
    })
}

function faqAnswer() {
    const faqItems = document.querySelectorAll('.faq-content-item');

    faqItems.forEach(item => {
        const plusBtn = item.querySelector('.faq-content-item-image-plus');
        const answer = item.querySelector('.faq-content-item-info-answer');

        plusBtn.addEventListener('click', () => {
            if (plusBtn.classList.contains('active')) {
                answer.classList.remove('active');
                plusBtn.classList.remove('active');
            } else {
                answer.classList.add('active');
                plusBtn.classList.add('active');
            }
        });
    });
}

function scroll () {
    const roomsButton = document.querySelectorAll('.rooms-prices-button');
    const contactsButton = document.querySelectorAll('.contacts-button');
    const hotelNumberElement = document.getElementById('hotel-number');
    const contactsElement = document.getElementById('contacts');

    roomsButton.forEach(item => {
        item.addEventListener('click', function () {
            hotelNumberElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    contactsButton.forEach(item => {
        item.addEventListener('click', function () {
            contactsElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
};

let requests = [];

const inputs = {
    firstname: document.getElementById("form-name"),
    lastname: document.getElementById("form-surname"),
    phone: document.getElementById("form-phone"),
    needTransfer: document.getElementById("needTransfer"),
    isAnimals: document.getElementById("isAnimals"),
    needParking: document.getElementById("needParking"),
    checkIn: document.getElementById("form-checkIn"),
    checkOut: document.getElementById("form-checkOut"),
    connection: document.querySelector(".form-order-call-checkbox-title"),
};

class Request {
    constructor(firstname, lastname, phone, checkIn, checkOut, connection, needTransfer, isAnimals, needParking) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.connection = connection;
        this.needTransfer = needTransfer;
        this.isAnimals = isAnimals;
        this.needParking = needParking;
    }
}

function formatPhone(phoneNumber) {
    let cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.startsWith('7')) {
        return '7' + cleaned.substr(1);
    } else if (cleaned.startsWith('8')) {
        return '7' + cleaned.substr(1);
    }
    return cleaned;
}

function addRequest() {
    const connections = {
        'Позвоните мне': 'BY_PHONE',
        'Telegram': 'BY_TELEGRAM',
        'WhatsApp': 'BY_WHATS_APP',
    };

    const connectionValue = connections[inputs.connection.textContent.trim()];

    if (!connectionValue) {
        console.error('Invalid connection value:', inputs.connection.textContent.trim());
        return null;
    }

    const request = new Request(
        inputs.firstname.value.trim(),
        inputs.lastname.value.trim(),
        formatPhone(inputs.phone.value),
        inputs.checkIn.value.trim(),
        inputs.checkOut.value.trim(),
        connectionValue,
        inputs.needTransfer.checked,
        inputs.isAnimals.checked,
        inputs.needParking.checked,
    );

    requests.push(request);
    return request;
}

async function sendRequestToServer(request) {
    try {
        const response = await fetch('https://otel-u-morya.ru/api/create/client', {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });

        if (response.ok) {
            const form = document.querySelector('.form');
            form.reset();
            currentStep = 0;

            const steps = Array.from(form.querySelectorAll('.form-content-dates-arrival, .form-content-number-human, .form-content-human-data'));
            const prevButton = form.querySelectorAll('.form-prev');
            updateForm(steps, currentStep, prevButton);
            
            // Сброс значений и стилизации
            document.querySelector('.checkInDateSpan').textContent = 'Заезд';
            document.querySelector('.checkOutDateSpan').textContent = 'Выезд';
            document.querySelector('.checkInDateSpan').style.color = '#adadad';
            document.querySelector('.checkOutDateSpan').style.color = '#adadad';
            document.querySelector('.form-order-call-checkbox-title').textContent = 'Позвоните мне';
            inputs.connection = document.querySelector(".form-order-call-checkbox-title");
            formDataInputs.forEach(input => {
                input.classList.remove('input-error');
            })
            contentForm.classList.add('none');
            thanksModalWrapper.classList.remove('none');
            
            const closeThanksModal = (event) => {
                if (!thanksModalWrapper.contains(event.target)) {
                    thanksModalWrapper.classList.add('none');
                    contentForm.classList.remove('none');
                    humanData.classList.remove('none');
                    datesArrival.classList.add('none');
                    flutter.classList.add('none');
                    document.body.style.overflow = 'visible';
                    document.removeEventListener('click', closeThanksModal);
                }
            };
            document.addEventListener('click', closeThanksModal);
        } else {
            const errorData = await response.json();
            console.error('Server error:', response.status, errorData);
        }
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
}

buttonVerify.addEventListener('click', async (e) => {
    e.preventDefault();
    const request = addRequest(inputs);
    await sendRequestToServer(request);
});


faqAnswer()
scroll ()
formData ()
formOrderCall()
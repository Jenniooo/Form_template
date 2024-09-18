document.addEventListener("DOMContentLoaded", function () {
    const formSteps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next");
    const prevBtns = document.querySelectorAll(".prev");
    let currentStep = 0;

    function showStep(step) {
        formSteps.forEach((formStep, index) => {
            formStep.classList.toggle("active", index === step);
        });

        // Adjust button visibility based on the current step
        prevBtns.forEach(button => button.style.display = step === 0 ? 'none' : 'inline-block');
        nextBtns.forEach(button => button.style.display = step === formSteps.length - 1 ? 'none' : 'inline-block');
    }

    nextBtns.forEach(button => {
        button.addEventListener("click", () => {
            if (currentStep < formSteps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    prevBtns.forEach(button => {
        button.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    showStep(currentStep); // Show the first step initially
});


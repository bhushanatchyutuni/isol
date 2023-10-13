document.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById('multistepsform');
   const fieldsets = form.querySelectorAll('fieldset');
   const nextButtons = form.querySelectorAll('.next');
   const previousButtons = form.querySelectorAll('.previous');
   const progressBar = document.getElementById('progressbar').getElementsByTagName('li');
   let currentStep = 0;
   function showStep(stepIndex) {
       fieldsets.forEach((fieldset, index) => {
           if (index === stepIndex) {
               fieldset.style.display = 'block';
           } else {
               fieldset.style.display = 'none';
           }
       });
   }
   function goToStep(stepIndex) {
       if (stepIndex >= 0 && stepIndex < fieldsets.length) {
           currentStep = stepIndex;
           showStep(currentStep);
           updateProgressBar(currentStep);
       }
   }
   function updateProgressBar(step) {
       for (let i = 0; i < progressBar.length; i++) {
           if (i < step) {
               progressBar[i].classList.add('active');
           } else {
               progressBar[i].classList.remove('active');
           }
       }
   }
   nextButtons.forEach((button, index) => {
       button.addEventListener('click', (e) => {
           e.preventDefault();
           goToStep(currentStep + 1);
       });
   });
   previousButtons.forEach((button, index) => {
       button.addEventListener('click', (e) => {
           e.preventDefault();
           goToStep(currentStep - 1);
       });
   });
   showStep(currentStep);
   updateProgressBar(currentStep);
});

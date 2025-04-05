document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    document.getElementById('responseMessage').innerText = 'Thank you, ' + name + '! Your enquiry has been submitted. We will get back to you shortly.';

    document.getElementById('enquiryForm').reset();
})



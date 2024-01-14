document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    try {
      const response = fetch('/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result =  response.text();
        alert(result); // Display a success message
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to submit the form. Please try again.');
    }
  });
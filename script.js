document.getElementById("feedbackForm").addEventListener("submit", function(event) {
      event.preventDefault(); 

      const name = document.getElementById("name").value;
      alert(`Thank you for your feedback, ${name}!`);
      
      this.reset();
    });
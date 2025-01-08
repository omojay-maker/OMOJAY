function generateTicket() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const github = document.getElementById('github').value;

    if (!fullName || !email || !github) {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Ticket generated successfully for ${fullName}!\nCheck your email: ${email}`);
}
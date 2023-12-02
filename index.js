function scheduleAppointment() {
    const patientName = document.getElementById('patientName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    const successMessage = document.getElementById('appointment-success');

    if (patientName && appointmentDate && appointmentTime) {
        successMessage.innerHTML = `Appointment scheduled for ${patientName} on ${appointmentDate} at ${appointmentTime} is Successfully Completed.`;
        successMessage.style.display = 'block';
    } else {
        successMessage.innerHTML = 'Please fill in all fields.';
        successMessage.style.color = '#ff0000';
        successMessage.style.display = 'block';
    }
}
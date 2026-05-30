//Screen changer
let balanceVisible = true;
const originalBalance = "₦2,000,000.00";
const screens = document.querySelectorAll('.screen');
const message = document.getElementById('message');
document.getElementById('loginBtn').addEventListener('click', function() {
  
  const phone = document.getElementById('textField').value; // change to your input ID
  const password = document.getElementById('password').value;
  
  // Fake validation (demo purpose)
  if (phone === "" || password === "") {
    message.innerHTML="Please fill all fields!";
    return;
  }
  
  // You can change this to your own demo details
  if (phone.length >= 5 && password.length >= 3) {
    // Show loading effect
    this.innerHTML = "Logging in...";
    this.disabled = true;
    
    // Open dashboard after small delay (make am feel real)
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Important line!
    }, 1200);
  } else {
    message.innerHTML="Wrong details! Try any number and password";
  }
});
// Function to switch screens
function switchScreen(index) {
  screens.forEach(screen => screen.classList.add('d-none'));
  screens[index].classList.remove('d-none');
  
  // Highlight active button
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.nav-btn')[index].classList.add('active');
}

//Amount visibility
function visibletoggle() {
  const balanceEl = document.getElementById('balance');
  const eyeIcon = document.getElementById('eye-icon');
  
  balanceVisible = !balanceVisible;
  
  if (balanceVisible) {
    balanceEl.textContent = originalBalance;
    eyeIcon.classList.remove('bi-eye-slash');
    eyeIcon.classList.add('bi-eye');
  } else {
    balanceEl.textContent = "••••••••••";
    eyeIcon.classList.remove('bi-eye');
    eyeIcon.classList.add('bi-eye-slash');
  }
}
//Modal triggar
function showTransferModal() {
  const modal = new bootstrap.Modal(document.getElementById('transferModal'));
  modal.show();
}

function processTransfer() {
  const amount = document.getElementById('transferAmount').value;
  
  if (!amount || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }
  
  // Show success message
  const successMsg = `✅ Transfer of ₦${parseFloat(amount).toLocaleString()} successful!`;
  alert(successMsg);
  
  // Close modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('transferModal'));
  modal.hide();
  
  // Clear form
  document.getElementById('transferAmount').value = '';
  document.getElementById('accountNumber').value = '';
  document.getElementById('narration').value = '';
}

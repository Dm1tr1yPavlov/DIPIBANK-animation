function openModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

document.getElementById("openModal1Btn").addEventListener("click", () => {
  openModal("modal1");
});

document.getElementById("openModal2Btn").addEventListener("click", () => {
  closeModal("modal1");
  setTimeout(() => {
    openModal("modal2");
  }, 500);
});

document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    closeModal(modalId);
  });
});

document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      const modalId = modal.id;
      closeModal(modalId);
    }
  });
});

document.getElementById("birthForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const birthdateInput = document.getElementById("birthdate");
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();

  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  if (!birthdateInput.value || age < 18) {
    birthdateInput.classList.add("vibrate");

    setTimeout(() => {
      birthdateInput.classList.remove("vibrate");
    }, 600);
    
    return false;
  }

  window.location.href = "index.html";
});
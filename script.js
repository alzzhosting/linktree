document.getElementById("bioForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value.trim().toLowerCase();
  let tiktok = document.getElementById("tiktok").value.trim();
  let instagram = document.getElementById("instagram").value.trim();
  let whatsapp = document.getElementById("whatsapp").value.trim();
  let youtube = document.getElementById("youtube").value.trim();
  
  if (name.includes(" ")) {
    alert("Nama tidak boleh mengandung spasi! Gunakan underscore (_) jika perlu.");
    return;
  }
  
  let bioData = { tiktok, instagram, whatsapp, youtube };
  localStorage.setItem(name, JSON.stringify(bioData));
  
  let link = `${window.location.origin}/bio.html?id=${name}`;
  document.getElementById("generatedLink").innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
});
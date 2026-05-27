const members = [
  {
    id: 1,
    name: "Priyagung Wicaksono",
    nim: "NIM: 101032400059",
    initials: "PW",
    avatarClass: "av-blue"
  },
  {
    id: 2,
    name: "Deco Zahraan Saputra",
    nim: "NIM: 101032400150",
    initials: "DCS",
    avatarClass: "av-teal"
  },
  {
    id: 3,
    name: "Muh Aura Khaibran",
    nim: "NIM: 101032400141",
    initials: "MAK",
    avatarClass: "av-purple"
  }
];


function renderMembers() {
  members.forEach(member => {
    const nameEl = document.getElementById(`name${member.id}`);
    const nimEl  = document.getElementById(`nim${member.id}`);
    const avEl   = document.getElementById(`av${member.id}`);

    if (nameEl) nameEl.textContent = member.name;
    if (nimEl)  nimEl.textContent  = member.nim;
    if (avEl) {
      avEl.textContent  = member.initials;
      avEl.className    = `avatar ${member.avatarClass}`;
    }
  });
}


function initSmoothScroll() {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}


document.addEventListener('DOMContentLoaded', function () {
  renderMembers();
  initSmoothScroll();
});
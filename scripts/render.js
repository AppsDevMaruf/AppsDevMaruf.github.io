/* script.js – replace your current script.js with this */
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const gridEl = document.getElementById('projects-grid');
    const detailContainer = document.getElementById('detail-container');
    const body = document.body;

    /* ---------- 1. Render Cards ---------- */
    function renderCards() {
        gridEl.innerHTML = projects.map(p => `
        <div class="card-hover bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
             onclick="showProject('${p.id}')">
          <div class="h-48 bg-gradient-to-r ${p.gradient} flex items-center justify-center">
            <i class="${p.icon} text-white text-5xl"></i>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${p.title}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">${p.short}</p>
  
            <div class="flex flex-wrap gap-2 mb-4">
              ${p.tags.map(t => `
                <span class="text-xs px-2 py-1 bg-${getTagColor(t)}-100 dark:bg-${getTagColor(t)}-900
                             text-${getTagColor(t)}-800 dark:text-${getTagColor(t)}-200 rounded">
                  ${t}
                </span>`).join('')}
            </div>
  
            <div class="flex items-center justify-between">
              <span class="text-emerald-600 dark:text-emerald-400 font-medium">View Details</span>
              ${p.period ? `<span class="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900
                                   text-emerald-800 dark:text-emerald-200 rounded">${p.period}</span>` : ''}
            </div>
          </div>
        </div>
      `).join('');
    }

    function getTagColor(tag) {
        const map = {
            Kotlin: 'emerald', Java: 'amber', Maps: 'purple',
            MVVM: 'emerald', Retrofit: 'emerald', Firebase: 'blue',
            'Real-time': 'purple', Security: 'cyan'
        };
        return map[tag] || 'gray';
    }

    /* ---------- 2. Render Detail Pages (FIXED) ---------- */
    function renderDetails() {
        detailContainer.innerHTML = projects.map(p => `
        <section id="${p.id}" class="project-detail py-24 bg-white dark:bg-gray-800">
          <div class="container mx-auto px-6 max-w-4xl">
            <a href="#" onclick="showSection('projects')" 
               class="inline-block mb-6 text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
              Back to Projects
            </a>
  
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h1 class="text-3xl md:text-4xl font-bold mb-4">${p.title}</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">${p.description.trim()}</p>
  
                <div class="flex flex-wrap gap-3 mb-6">
                  ${p.tags.map(t => `
                    <span class="px-3 py-1 bg-${getTagColor(t)}-100 dark:bg-${getTagColor(t)}-900
                                 text-${getTagColor(t)}-800 dark:text-${getTagColor(t)}-200 rounded-full text-sm">
                      ${t}
                    </span>`).join('')}
                </div>
  
                <div class="flex gap-4">
                  ${p.github ? `<a href="${p.github}" target="_blank"
                     class="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                     GitHub</a>` : ''}
                  ${p.live ? `<a href="${p.live}" target="_blank"
                     class="px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                     Play Store</a>` : ''}
                </div>
              </div>
  
              <div class="flex items-center justify-center">
                <div class="h-64 w-full bg-gradient-to-r ${p.gradient} rounded-xl flex items-center justify-center">
                  <i class="${p.icon} text-white text-7xl"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      `).join('');
    }

    /* ---------- 3. Section Routing ---------- */
    function showSection(id) {
        const isProject = projects.some(p => p.id === id);

        if (isProject) {
            body.classList.add('project-mode');
            document.querySelectorAll('.project-detail').forEach(el => el.classList.remove('active'));
            const target = document.getElementById(id);
            if (target) target.classList.add('active');
        } else {
            body.classList.remove('project-mode');
            document.querySelectorAll('.project-detail').forEach(el => el.classList.remove('active'));
        }

        // update URL
        history.pushState({ section: id }, '', '#' + id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // expose for onclick
    window.showProject = id => showSection(id);

    // back/forward
    window.addEventListener('popstate', e => {
        const sec = (e.state && e.state.section) || 'home';
        showSection(sec);
    });

    // initial load
    const hash = location.hash.slice(1);
    const start = hash && document.getElementById(hash) ? hash : 'home';
    showSection(start);

    // render
    renderCards();
    renderDetails();

    /* ---------- Navbar active state ---------- */
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            showSection(targetId);
        });
    });
});
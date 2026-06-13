class AuthorSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <aside class="sidebar" aria-label="Author profile">
        <div class="author-profile">
          <img class="author-avatar" src="assets/profile.jpg" alt="He Cao">
          <h1>He Cao</h1>
          <p class="author-bio">he/him</p>
          <p class="author-note">Of all the people I’ve lost, I miss myself the most.</p>
          <ul class="author-links">
            <li><span class="link-icon">⌖</span><span>Shenzhen / Hong Kong</span></li>
            <li><a href="mailto:hcaoaf@connect.ust.hk"><span class="link-icon">@</span><span>Email</span></a></li>
            <li><a href="https://scholar.google.com/citations?user=tLZ2V2kAAAAJ&amp;hl=en"><span class="link-icon">G</span><span>Google Scholar</span></a></li>
            <li><a href="https://hk.linkedin.com/in/he-cao"><span class="link-icon">in</span><span>LinkedIn</span></a></li>
            <li><a href="https://github.com/CiaoHe"><span class="link-icon">gh</span><span>GitHub</span></a></li>
            <li><a href="https://www.xiaohongshu.com/user/profile/5d13776e0000000012002da9"><span class="link-icon">小</span><span>小红书</span></a></li>
            <li><a href="https://www.zhihu.com/people/caohe-22"><span class="link-icon">知</span><span>知乎</span></a></li>
            <li><a href="https://x.com/Shinichi_Izumm"><span class="link-icon">X</span><span>X / Twitter</span></a></li>
          </ul>
        </div>
      </aside>
    `;
  }
}

customElements.define("author-sidebar", AuthorSidebar);

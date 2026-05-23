---
layout: doc
sidebar: false
aside: false
---

<style>
/* 🎯 核心魔法：直接改造 VitePress 容器，模拟出一个真正的侧边栏空间 */
.vp-doc .container {
max-width: 100% !important; 
padding-left: 320px !important; /* 强制在页面最左侧腾出 320px 的“幽灵侧边栏”区域 */
padding-right: 60px !important;
}
.vp-doc .content {
max-width: 850px !important; /* 正文宽度，防止在大屏幕上字拉得太长，保持最佳阅读感 */
margin: 0 !important;
}
/* 响应式：当在屏幕较小的笔记本或手机上看时，照片自动回到正文顶部，防止遮挡文字 */
@media (max-width: 960px) {
.vp-doc .container { padding-left: 24px !important; }
.photo-wrapper { position: relative !important; left: 0 !important; top: 0 !important; margin-bottom: 30px !important; }
}
</style>

<div class="photo-wrapper" style="position: fixed; left: 60px; top: 120px; width: 200px; z-index: 10;">
<img src="/images/bisheng1.jpg" alt="Bisheng Wang" style="width: 200px; height: 266px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; margin: 0 !important; display: block;" />
</div>

<div style="color: var(--vp-c-text-1);">
<h1 style="font-size: 28px; font-weight: 800; margin: 0 0 4px 0 !important; padding: 0 !important; color: var(--vp-c-text-1); line-height: 1.2;">Introduction</h1>
<div style="line-height: 1.6; text-align: justify; font-size: 14px; margin: 0 0 16px 0 !important;">My name is Bisheng Wang. I am now an assistant researcher at INESC TEC in the Centre for Telecommunications and Multimedia, affiliated with the Visual Computing and Machine Intelligence Group (VCMI). Before this, I received my Bachelor's and PhD degrees from Nanjing University of Science and Technology (NJUST) and spent 2 years as a senior algorithm engineer at Huawei Technology Ltd.</div>

<div style="line-height: 1.6; text-align: justify; font-size: 14px; margin: 0 0 16px 0 !important;">You can find more information on...</div>

<div style="font-size: 13px; display: flex; gap: 12px; flex-wrap: wrap; margin: 0 0 30px 0 !important; padding: 0 !important; line-height: 1 !important;">
<a href="https://www.linkedin.com/in/bisheng-wang-271974147/" target="_blank" style="color: #0056b3; text-decoration: none; font-weight: 500;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">LinkedIn</a> | 
<a href="https://scholar.google.com/citations?user=MaY3KEAAAAAJ&hl=zh-CN" target="_blank" style="color: #0056b3; text-decoration: none; font-weight: 500;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Google Scholar</a> | 
<a href="https://github.com/BishengWangMW" target="_blank" style="color: #0056b3; text-decoration: none; font-weight: 500;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Github</a> | 
<a href="https://orcid.org/0000-0002-8462-6638" target="_blank" style="color: #0056b3; text-decoration: none; font-weight: 500;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Orcid</a> | 
<a href="https://vcmi.inesctec.pt/members/bisheng-wang" target="_blank" style="color: #0056b3; text-decoration: none; font-weight: 500;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">VCMI</a>
</div>

<h2 style="font-size: 22px; font-weight: 700; border-bottom: 1px solid #e2e8f0; padding: 0 0 6px 0 !important; margin: 0 0 4px 0 !important;">Experience</h2>
<div style="display: flex; flex-direction: column; gap: 4px; font-size: 14px; line-height: 1.5; margin: 0 0 24px 0 !important; padding: 0 !important;">
<div style="display: flex; align-items: flex-start; margin: 0 !important; padding: 0 !important;">
<div style="width: 180px; flex-shrink: 0; font-weight: 600; color: #718096; font-family: monospace; margin: 0 !important; padding: 0 !important;">03.2025 - present</div>
<div style="flex-grow: 1; margin: 0 !important; padding: 0 !important;">Assistant researcher at <strong>INESC TEC</strong>, Porto, Portugal.</div>
</div>
<div style="display: flex; align-items: flex-start; margin: 0 !important; padding: 0 !important;">
<div style="width: 180px; flex-shrink: 0; font-weight: 600; color: #718096; font-family: monospace; margin: 0 !important; padding: 0 !important;">07.2022 - 07.2024</div>
<div style="flex-grow: 1; margin: 0 !important; padding: 0 !important;">Senior algorithm engineer at <strong>Huawei Technology Ltd</strong>, Nanjing, China.</div>
</div>
<div style="display: flex; align-items: flex-start; margin: 0 !important; padding: 0 !important;">
<div style="width: 180px; flex-shrink: 0; font-weight: 600; color: #718096; font-family: monospace; margin: 0 !important; padding: 0 !important;">10.2019 - 09.2021</div>
<div style="flex-grow: 1; margin: 0 !important; padding: 0 !important;">Visiting PhD student at <strong>Graz University of Technology</strong>, Austria.</div>
</div>
<div style="display: flex; align-items: flex-start; margin: 0 !important; padding: 0 !important;">
<div style="width: 180px; flex-shrink: 0; font-weight: 600; color: #718096; font-family: monospace; margin: 0 !important; padding: 0 !important;">09.2016 - 06.2022</div>
<div style="flex-grow: 1; margin: 0 !important; padding: 0 !important;">PhD student at <strong>NJUST</strong>, Nanjing, China.</div>
</div>
<div style="display: flex; align-items: flex-start; margin: 0 !important; padding: 0 !important;">
<div style="width: 180px; flex-shrink: 0; font-weight: 600; color: #718096; font-family: monospace; margin: 0 !important; padding: 0 !important;">02.2014 - 07.2014</div>
<div style="flex-grow: 1; margin: 0 !important; padding: 0 !important;">Visiting Student at <strong>Chang Gung University</strong>.</div>
</div>
<div style="display: flex; align-items: flex-start; margin: 0 !important; padding: 0 !important;">
<div style="width: 180px; flex-shrink: 0; font-weight: 600; color: #718096; font-family: monospace; margin: 0 !important; padding: 0 !important;">09.2012 - 06.2016</div>
<div style="flex-grow: 1; margin: 0 !important; padding: 0 !important;">Bachelor student at <strong>NJUST</strong>, Nanjing, China.</div>
</div>
</div>

<h2 style="font-size: 22px; font-weight: 700; border-bottom: 1px solid #e2e8f0; padding: 0 0 6px 0 !important; margin: 0 0 4px 0 !important;">Curriculum Vitae</h2>
<div style="font-size: 14px; line-height: 1.6; margin: 0 0 24px 0 !important; padding: 0 !important;">
For more detailed information about my academic background, publications, and professional activities, please refer to my full CV. <br>
<a href="/cv/Bisheng_Wang_CV.pdf" target="_blank" style="color: #0056b3; text-decoration: none; font-weight: 600; display: inline-block; margin-top: 8px;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">[PDF] Download Detailed CV</a>
</div>

<h2 style="font-size: 22px; font-weight: 700; border-bottom: 1px solid #e2e8f0; padding: 0 0 6px 0 !important; margin: 0 0 4px 0 !important;">Contact</h2>
<div style="font-size: 14px; line-height: 1.6; margin: 0 0 30px 0 !important; padding: 0 !important;">
<strong>Email:</strong> bisheng.wang@inesctec.pt <br>
<strong>Address:</strong> INESC TEC, Campus da FEUP, Rua Dr. Roberto Frias, 4200-465 Porto, Portugal
</div>

</div>
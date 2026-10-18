---
layout: doc
outline: false
pageClass: home-page
---

<style>
.home-page .vp-doc h2 {
  margin: 48px 0 6px !important;
  padding-top: 24px !important;
  line-height: 1.3;
}
.home-page .vp-doc h2 + hr {
  margin: 6px 0 10px !important;
}
.home-page .vp-doc > p {
  margin: 8px 0;
  line-height: 1.5;
}
.home-page .vp-doc ul:not(.news-list) {
  margin: 8px 0 14px;
}
.home-page .vp-doc li:not(.news-item) {
  margin: 2px 0;
  line-height: 1.5;
}
.home-page .home-intro-text {
  line-height: 1.5 !important;
}
.home-page .news-list {
  margin: 8px 0 14px;
  padding: 0;
  list-style: none;
}
.home-page .news-item {
  display: grid;
  grid-template-columns: 8px 82px minmax(0, 1fr);
  column-gap: 8px;
  margin: 3px 0;
  line-height: 1.5;
}
.home-page .news-item::before {
  content: "•";
}
.home-page .news-date {
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
</style>

# Bisheng Wang {#about}


<div class="vp-raw home-intro" style="display: flex; align-items: flex-start; gap: 30px; margin-top: 20px;">
  
  <div style="flex-shrink: 0;">
  <img 
    src="/images/bisheng1.jpg" 
    alt="Bisheng Wang" 
    style="width: 120px; height: 120px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"
  />
  </div>

  <div class="home-intro-text" style="flex-grow: 1; line-height: 1.7; color: var(--vp-c-text-1); text-align: justify;">
  I am an assistant researcher at INESC TEC, Porto, Portugal. I am currently doing researches in Computer Vision, and Medical Image Analysis (OCTA Segmentation and Cell segmentation). Please find more information about me <a href="/cv" style="color: #0056b3; font-weight: 600; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">here</a>.
  </div>

</div>


## News {#news}
---
<ul class="news-list">
  <li class="news-item"><span class="news-date">[2026/10]</span><span>One paper was accepted to WACV 2027.</span></li>
  <li class="news-item"><span class="news-date">[2026/04]</span><span>One paper was accepted for publication in the IEEE Open Journal of Signal Processing (OJ-SP).</span></li>
  <li class="news-item"><span class="news-date">[2026/01]</span><span>One paper was accepted to ICASSP 2026.</span></li>
  <li class="news-item"><span class="news-date">[2025/12]</span><span>Appointed as an Assistant Researcher at INESC TEC.</span></li>
  <li class="news-item"><span class="news-date">[2025/03]</span><span>Joined CTM (VCMI group) at INESC TEC as a postdoctoral researcher.</span></li>
</ul>



## Selected Publications {#publications}
---
Please see the complete list on my [Publications](/Publications) page or at [Google Scholar](https://scholar.google.com/citations?user=MaY3KEAAAAAJ&hl=zh-CN).

<div class="vp-raw" style="display: flex; align-items: flex-start; gap: 20px; margin-top: 16px; margin-bottom: 20px; padding-bottom: 16px;">
<div style="flex-shrink: 0; width: 110px;">
<img src="/images/framework_ojsp.png" alt="Paper Framework" style="width: 110px; height: 80px; object-fit: cover; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin: 0 !important; display: block;" />
</div>
<div style="flex-grow: 1; font-size: 14px; line-height: 1.35; color: var(--vp-c-text-1);">
<div style="margin: 0 0 3px 0 !important; font-size: 15px; font-weight: 700; color: #0056b3; padding: 0 !important; line-height: 1.3;">Depth Enhanced Cascaded Framework for OCTA Segmentation with Structure and Connectivity-Aware Losses</div>
<div style="color: #4a5568; margin: 0 0 2px 0 !important; padding: 0 !important;"><strong><u>Wang B</u></strong>, Wang Y, Cardoso J S, et al.</div>
<div style="color: #718096; font-style: italic; margin: 0 0 4px 0 !important; padding: 0 !important;">IEEE Open Journal of Signal Processing, 2026.</div>
<div style="font-size: 13px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin: 0 !important; padding: 0 !important; line-height: 1 !important; position: relative;">
<a href="https://ieeexplore.ieee.org/abstract/document/11503897" target="_blank" style="color: #0056b3; text-decoration: none; font-weight: 500; display: inline-block; padding: 0 !important; margin: 0 !important; line-height: 1 !important;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">[PDF]</a>
<a href="https://github.com/BishengWangMW/OCTA_SEG" target="_blank" style="color: #0056b3; text-decoration: none; font-weight: 500; display: inline-block; padding: 0 !important; margin: 0 !important; line-height: 1 !important;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">[Code]</a>
<details style="display: inline-block; padding: 0 !important; margin: 0 !important; line-height: 1 !important;">
<summary style="color: #0056b3; font-weight: 500; cursor: pointer; list-style: none; user-select: none; padding: 0 !important; margin: 0 !important; line-height: 1 !important;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">[BibTeX]</summary>
<pre style="position: absolute; left: 0; background: #f7fafc; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 12px; color: #4a5568; margin-top: 4px; white-space: pre; z-index: 100; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: auto; max-width: 100%; overflow-x: auto; line-height: 1.4;">@article{wang2026depth,
  title={Depth Enhanced Cascaded Framework for OCTA Segmentation with Structure and Connectivity-Aware Losses},
  author={Wang, Bisheng and Wang, Yuexuan and Cardoso, Jaime S and Wu, Lin},
  journal={IEEE Open Journal of Signal Processing},
  year={2026},
  publisher={IEEE}
}</pre>
</details>
</div>
</div>
</div>

<div class="vp-raw" style="display: flex; align-items: flex-start; gap: 20px; margin-top: 16px; margin-bottom: 20px; padding-bottom: 16px;">
<div style="flex-shrink: 0; width: 110px;">
<img src="/images/PerCS_framework.png" alt="PerCS Framework" style="width: 110px; height: 110px; object-fit: cover; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin: 0 !important; display: block;" />
</div>
<div style="flex-grow: 1; font-size: 14px; line-height: 1.35; color: var(--vp-c-text-1);">
<div style="margin: 0 0 3px 0 !important; font-size: 15px; font-weight: 700; color: #0056b3; padding: 0 !important; line-height: 1.3;">Personalized Cell Segmentation: Benchmark and Framework for Reference-Guided Cell Type Segmentation</div>
<div style="color: #4a5568; margin: 0 0 2px 0 !important; padding: 0 !important;"><strong><u>Wang B</u></strong>, Cardoso J S, Wu L.</div>
<div style="color: #718096; font-style: italic; margin: 0 0 4px 0 !important; padding: 0 !important;">IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2026.</div>
<div style="font-size: 13px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin: 0 !important; padding: 0 !important; line-height: 1 !important; position: relative;">
<a href="https://ieeexplore.ieee.org/document/11460778?denied=" target="_blank" style="color: #0056b3; text-decoration: none; font-weight: 500; display: inline-block; padding: 0 !important; margin: 0 !important; line-height: 1 !important;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">[PDF]</a>
<a href="javascript:void(0);" style="color: #718096; text-decoration: none; font-weight: 500; display: inline-block; padding: 0 !important; margin: 0 !important; line-height: 1 !important; cursor: not-allowed;">[Code]</a>
<details style="display: inline-block; padding: 0 !important; margin: 0 !important; line-height: 1 !important;">
<summary style="color: #0056b3; font-weight: 500; cursor: pointer; list-style: none; user-select: none; padding: 0 !important; margin: 0 !important; line-height: 1 !important;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">[BibTeX]</summary>
<pre style="position: absolute; left: 0; background: #f7fafc; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 12px; color: #4a5568; margin-top: 4px; white-space: pre; z-index: 100; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: auto; max-width: 100%; overflow-x: auto; line-height: 1.4;">@inproceedings{wang2026personalized,
  title={Personalized Cell Segmentation: Benchmark and Framework for Reference-Guided Cell Type Segmentation},
  author={Wang, Bisheng and Cardoso, Jaime S and Wu, Lin},
  booktitle={ICASSP 2026-2026 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages={7532--7536},
  year={2026},
  organization={IEEE}
}</pre>
</details>
</div>
</div>
</div>

[//]: # ([1] **Wang B**, Wang Y, Cardoso J S, et al. Depth Enhanced Cascaded Framework for OCTA Segmentation with Structure and Connectivity-Aware Losses[J]. IEEE Open Journal of Signal Processing, 2026.)

[//]: # (1. **Bisheng Wang**, et al. "A Great Paper about OCTA Segmentation." *CVPR*, 2025. [PDF]&#40;#&#41; | [Code]&#40;#&#41;)
[//]: # (2. **Bisheng Wang**, et al. "Another paper about Cell tracking." *MICCAI*, 2024.)



## Data {#data}
---



## Contact {#contact}
---
* **Email:** bisheng.wang@inesctec.pt
* **Address:** INESC TEC, Campus da FEUP, Rua Dr. Roberto Frias, 4200-465 Porto, Portugal

const interests = ['Medical image segmentation', 'Biomedical signal processing', 'Clinical AI', 'Medical computer vision', 'Reproducible evaluation', 'AI-assisted diagnostics', 'DICOM and volumetric data', 'Research deployment'];
const projects = [
  ['Complete Blood Cell Counter', 'Curated 1,294 annotated microscopy images into a checked YOLO pipeline for platelet, RBC, and WBC detection, then exported the model to ONNX for a Dockerized Gradio app.', ['YOLOv11', 'OpenCV', 'ONNX', 'Docker'], '97.6% mAP@50 · 94.5% precision'],
  ['AI-powered Dental DICOM Annotation System', 'Developed a U-Net model to segment nerves, roots, and enamel structures in dental CT scans, with volumetric preprocessing and 3D visualization.', ['PyTorch', 'U-Net', 'pydicom', '3D Slicer'], null],
  ['Multimodal RAG for Chest X-ray Analysis', 'Built cross-modal retrieval over MIMIC-CXR using image-text embeddings and FAISS, with structured findings generated from retrieved clinical cases.', ['CLIP', 'FAISS', 'Groq LLM', 'Streamlit'], null],
  ['NeuroGenesis: Synthetic Brain Tumor Scans', 'Designed a DCGAN pipeline for synthetic MRI generation and augmentation in brain-tumor analysis.', ['PyTorch', 'DCGAN', 'NumPy'], '>90% authenticity rating from experienced radiologists'],
  ['AI-Assisted Clinical Exam Preparation', 'Fine-tuned Meditron with LoRA and QLoRA to generate multi-step USMLE-style explanations, validated with domain experts.', ['Meditron', 'LoRA', 'QLoRA', 'Transformers'], '>92% accuracy · 40% less annotation workload']
];
const experience = [
  ['Aug 2026 – Present', 'Research Assistant', 'University of Saskatchewan · KAIT collaborative project', 'Diagnosing systematic connector–wire confusion in SegFormer-B5 semantic segmentation and designing targeted interventions for three-class RGB segmentation.'],
  ['Jun 2024 – Present', 'Research Assistant', 'KICS, UET Lahore', 'Built EEG emotion-recognition pipelines across three datasets and predictive models for Alzheimer’s/MCI classification from patient EEG data.'],
  ['Jul 2025 – Present', 'Research Assistant', 'Dpoint Technologies Ltd · Cyprus', 'Researching predictive-maintenance systems for industrial cranes using vibration, temperature, and current sensor data.'],
  ['Mar 2024 – Jun 2024', 'Machine Learning Intern', 'Datalabb, Lahore', 'Designed a U-Net segmentation framework for 10k+ medical images and fine-tuned domain-adapted LLMs for clinical text.']
];
const publications = [
  ['TriNet-MTL: A Multi-Branch Deep Learning Framework for Biometric Identification and Cognitive State Inference from Auditory-Evoked EEG', 'Noor Fatima, Ghulam Nabi', 'eNeuro · 2026 · Accepted · DOI 10.1523/ENEURO.0265-25.2025', 'https://www.eneuro.org/content/13/2/ENEURO.0265-25.2025.abstract'],
  ['Multimodal EEG-Based Classification of Alzheimer’s and MCI Using Olfactory Event-Related Potentials and Transformers', 'Noor Fatima, Ghulam Nabi', 'Brain-Apparatus Communication · 2025 · Published', 'https://doi.org/10.1080/27706710.2025.2602997'],
  ['Machine Learning-Based Classification for High-Efficiency Perovskite Solar Cell Material Screening', 'Iqra Ashfaq, Hassan Saeed, Zaki Uddin, Aaisha Abid, Noor Fatima', 'IEEE ICRAI · 2026 · Published', 'https://ieeexplore.ieee.org/abstract/document/11551959/']
];
const el = (id) => document.getElementById(id);
el('interest-list').innerHTML = interests.map((item) => `<span>${item}</span>`).join('');
el('project-list').innerHTML = projects.map(([title, description, tags, result], index) => `<article class="project-card"><div class="card-index">${String(index + 1).padStart(2, '0')}</div><h3>${title}</h3><p>${description}</p><div class="tags">${tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>${result ? `<div class="result">${result}</div>` : ''}</article>`).join('');
el('experience-list').innerHTML = experience.map(([date, title, place, description]) => `<article class="role"><time>${date}</time><div><h3>${title}</h3><p>${description}</p></div><span class="place">${place}</span></article>`).join('');
el('publication-list').innerHTML = publications.map(([title, authors, meta, link]) => `<article class="publication"><div><span class="pub-status">${meta.includes('Accepted') ? 'Accepted' : 'Published'}</span><h3>${title}</h3><p>${authors}</p><a href="${link}" rel="noreferrer">Read publication ↗</a></div><div class="pub-meta">${meta}</div></article>`).join('');
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => { const nav = document.querySelector('nav'); const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => { document.querySelector('nav').classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));

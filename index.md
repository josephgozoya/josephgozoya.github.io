---
layout: home
author_profile: true
entries_layout: list
pagination:
  enabled: true
header:
  overlay_image: /assets/images/image.png
  overlay_filter: 0.5
  actions:
    - label: "View Research"
      url: "/about/"
    - label: "Download CV"
      url: "https://drive.google.com/file/d/1-usu1GNkJpZRoTYnQOJKcp-fLh-WavZy/view"
---

<script async src="https://www.googletagmanager.com/gtag/js?id=G-CCD8WD25BZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-CCD8WD25BZ');
</script>

## Bridging Data & Policy for Economic Inclusion

[cite_start]I am an economist dedicated to addressing economic challenges through high-quality empirical research[cite: 5, 7]. [cite_start]My work leverages administrative big data to provide insights into development economics[cite: 5, 6], specifically focusing on:

* [cite_start]**Poverty & Inequality:** Understanding and designing data-driven strategies to reduce economic disparities[cite: 7].
* [cite_start]**Labor Markets:** Investigating worker vulnerability and sectoral resilience, particularly in the context of climate change[cite: 6, 52].
* [cite_start]**Big Data Analytics:** Managing and auditing millions of records within the **SA-TIED** administrative tax dataset to support evidence-based policy.

---

## Recent Posts

{% for post in site.posts limit:5 %}
  {% include archive-single.html %}
{% endfor %}

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

I am an economist dedicated to addressing economic challenges through high-quality empirical research. My work leverages administrative big data to provide insights into development economics, specifically focusing on:

* **Poverty & Inequality:** Understanding and designing data-driven strategies to reduce economic disparities.
* **Labor Markets:** Investigating worker vulnerability and sectoral resilience, particularly in the context of climate change.
* **Big Data Analytics:** Managing and auditing millions of records within the **SA-TIED** administrative tax dataset to support evidence-based policy.

---


## Recent Research & Insights
{% for post in site.posts limit:5 %}
  <article class="archive__item">
    <h2 class="archive__item-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="archive__item-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
  </article>
{% endfor %}

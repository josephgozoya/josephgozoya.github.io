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
## Recent Insights
{% if site.posts.size > 0 %}
  {% for post in site.posts limit:5 %}
    <article class="archive__item" style="margin-bottom: 20px;">
      <h3 class="archive__item-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <p style="font-size: 0.8em; color: #666;">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
    </article>
  {% endfor %}
{% else %}
  <p>No posts found. Please check your _posts folder naming and file dates.</p>
{% endif %}

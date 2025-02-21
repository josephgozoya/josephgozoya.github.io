<footer>
  <!-- Powered By Section -->
  <div class="powered-by">
    © 2025 Joseph Gozoya. All rights reserved.
  </div>

  <!-- Social Links Section -->
  <div class="footer-links">
    {% for link in site.footer.links %}
      <a href="{{ link.url }}" class="footer-link" title="{{ link.label }}">
        <i class="{{ link.icon }}"></i> {{ link.label }}
      </a>
    {% endfor %}
  </div>
</footer>

<!-- Optional: Add CSS styling to your footer -->
<style>
  footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
  }
  .footer-links {
    margin-top: 10px;
  }
  .footer-link {
    margin: 0 15px;
    color: white;
    font-size: 20px;
    text-decoration: none;
  }
  .footer-link:hover {
    color: #f1c40f;
  }
  .powered-by {
    margin-bottom: 10px;
    font-size: 14px;
  }
</style>

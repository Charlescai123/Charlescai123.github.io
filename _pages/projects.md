---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
title_display: false
---

<div class="main">
  <ul style="list-style-type: none;">
  {% for proj in site.projects %}
    {% if proj.path contains 'introductions' %}
      <li>
        {{ proj.content }}
      </li>
    {% endif %}
  {% endfor %}
  </ul>
</div><br>
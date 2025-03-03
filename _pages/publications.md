---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
title_display: false
---

{% if author.googlescholar %}
  You can also find my articles on
  <u>
    <a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

Conference
======
------
<div class="main">
  <ul>
  {% for pub in site.publications %}
    {% if pub.venue == "conference" %}
    <li>
      {{ pub.content }}
    </li>
    {% endif %}
  {% endfor %}
  </ul>
</div><br>

Journal
======
------
<div class='main'>
  <ul>
  {% for pub in site.publications %}
    {% if pub.venue == "journal" %}
    <li>
      {{ pub.content }}
    </li>
    {% endif %}
  {% endfor %}
  </ul>
</div>
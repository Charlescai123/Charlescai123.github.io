---
layout: archive
title: "Robotics Engineering Practicum: Leveraging 3D Semantic Instance Segmentation for Robot Manipulation Task"
collection: projects
permalink: /projects/rbe-practicum
author_profile: true
title_display: false
---
{% include base_path %}

<div>
  <div class="back-button" id="back-key1">
    <a href="/projects" target="_self">
      <span>&lt; Back</span>
    </a>
  </div>
  <div class="overview-title"><b>{{ page.title }}</b></div>
  <div class="overview-content">
    <div class="overview-param">
      <b class="overview-key">Background</b> The pick-and-place task stands out as one of the most common manipulation tasks for robotics arms, encompassing object detection and motion planning for efficient item picking. The key focus of object detection is to accurately segment different types of items, typically achieved through 2D-based approaches. However, these 2D models exhibit inherent limitations in scenarios where the depth information is required to differentiate objects with similar colors and shapes, prompting interest in further exploring 3D Deep Learning frameworks and their applications in the industry.
    </div>
    <div style="text-align:center">
      <p style="margin-bottom:.5em; margin-top:.5em">
        <img src="/images/Projects/4-RBE-Practicum/pick-and-place.gif" width="50%">
      </p>
      <p style="margin-bottom:.25em; margin-top:0">
        <b>Pick-and-place Robot</b>
      </p>
    </div>
    <div class="overview-param">
      <b class="overview-key">Overview</b> During my internship, I leveraged the available resources to explore state-of-the-art Deep Learning (DL) frameworks. After analyzing different metrics, such as model architecture, pros and cons, and ease of deployment, I integrated the Mask3D model into production use. The implementation involves model testing with benchmark datasets, establishment of a local training pipeline, and model deployment on Nvidia Jetson platform for accelerating the inference process. The final results have been highly promising, showcasing the potential for incorporating 3D DL models into warehouse automation for industry-specific applications.
    </div>
    <div class="overview-param">
      <div>
        <b class="overview-key">Summary</b>
      </div>
      <div class="overview-list">
        <ul>
          <li>
            <span>Explore cutting-edge DL neural networks in 3D semantic instance segmentation to provide alternatives for current model and set up high-performance training pipeline locally</span> 
          </li>
          <li>
            <span>Innovate a 2D Image-based approach for 3D point cloud data labeling and batch data generation</span> 
          </li>
          <li>
            <span>Configure and build a framework on Nvidia Jetson for testing and optimizing model inference process</span> 
          </li>
          <li>
            <span>Organize and document for the code while keeping records of each testing and experimental step</span> 
          </li>
        </ul>
      </div>
    </div>
    <div class="overview-param">
      <div>
        <b class="overview-key">Result</b>
      </div>
      <div style="padding-bottom:1em">
        <div class="overview-pic">
          <p style="padding-bottom:.75em; padding-top:1em">
            <img class="fig" src="/images/Projects/4-RBE-Practicum/RBE-Practicum.png" width="95%" alignment="center">
          </p>
          <p>
            <b>Integrated Object 3D Segmentation Pipeline for Pick-and-place</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

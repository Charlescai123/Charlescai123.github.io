---
layout: archive
title: "Perception Action Coupling in the Remote Active Telepresence"
collection: projects
permalink: /projects/pac
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
  <div class="overview-title">
    <b>{{ page.title }}</b>
  </div>
  <div class="overview-content">
    <div class="overview-param">
      <b class="overview-key">Background</b> Robots have consistently demonstrated their value as indispensable human assistants, with widespread applications especially in executing remote tasks. One notable example is the tele-nursing robot, which offers essential support and aid in the medical field. However, constructing a dependable tele-robotic system presents numerous challenges, with one of the biggest concerns being how to address the perception issues. Potential challenges could be <em><b>unconventional viewpoints</b></em>, <em><b>limited field of view</b></em>, and <em><b>loss of depth</b></em>. Lack of adequate visual feedback could result in a decrease in the operator's situational awareness, significantly impacting their performance.
    </div>
    <div class="overview-param">
      <b class="overview-key">Overview</b> With the objective of creating effective interfaces to enhance visual assistance for telerobotics, I developed a physical wearable multi-camera system which includes cameras, headset and trackers. The camera transmits collected RGB views to the headset for presence as the visual feedback. Users can easily switch between different cameras according to their preferences while performing tasks. In additional, the headset is equipped with gaze tracking to capture the user's attention, and the motion trackers can record the user's body movements. By studying how subjects utilize their actions in conjunction with visual input during experiments using this system, we can facilitate the design of a powerful telerobotics platform for human-robot collaboration, and improve some aspects such as the autonomous camera view selection for perception and camera positioning for ergonomic considerations.
    </div>
    <div class="overview-param">
      <div>
        <b class="overview-key">Summary</b>
      </div>
      <div class="overview-list">
        <ul>
          <li>
            <span>Design and build a multi-camera physical platform with cameras, headset and motion trackers</span> 
          </li>
          <li>
            <span>Integrate gaze tracking in HTC VR headset and develop an algorithm for calculating the fixation time</span> 
          </li>
          <li>
            <span>Utilize Unity as the intermediary for transmitting camera views and voice input for camera switching</span> 
          </li>
          <li>
            <span>Undertake the design and execution of a user study, carefully observing and analyzing the participants' behavior throughout the experiment</span> 
          </li>
        </ul>
      </div>
    </div>
    <div class="overview-param">
      <div>
        <b class="overview-key">Result</b>
      </div>
      <div style="padding-bottom:1em; padding-top:1em">
        <div class="overview-pic">
          <p style="padding-bottom:.75em;">
            <img src="/images/Projects/3-PAC/wearable-system.jpg" width="50%" alignment="center">
          </p>
          <p>
            <b>Physical Wearable Multi-Camera System</b>
          </p>
        </div>
      </div>
      <div style="display:flex">
        <div class="overview-pic">
          <p style="padding:.3em">
            <img class="fig" src="/images/Projects/1-RLTCP/BW.png" width="100%" alignment="center">
          </p>
        </div>
        <div class="overview-pic">
          <p style="padding:.3em">
            <img class="fig" src="/images/Projects/1-RLTCP/Quene.png" width="100%" alignment="center">
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

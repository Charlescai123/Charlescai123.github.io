---
layout: archive
title: "Occlusion-Free Visual Servoing for the Shared Autonomy Teleoperation of Dual-Arm Robots"
collection: projects
permalink: /projects/ibvs-control
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
      <b class="overview-key">Background</b> Teleoperation has emerged as a crucial field during the Covid-19 period, playing a significant role in enabling humans to carry out complex remote jobs effectively. Robotic arm, as one of the human-friendly tools, provides convience for the users to perform simple tasks like grasping and placing. However, this advancement has also brought some challenges including but not limited to <b><em>Perception</em></b>, <b><em>Non-haptic Feedback</em></b> and <b><em>Motion Sickness</em></b>, which has sparked the interest of researchers, leading them to explore effective solutions to provide a stable and robust control for the robot arms.
    </div>
    <div style="text-align: center">
      <p style="margin-bottom:.5em; margin-top:.75em">
        <img src="/images/Projects/2-IBVS-Control/Teleoperation.jpeg">
      </p>
      <p style="margin-bottom:.25em; margin-top:0">
        <b>Teleoperation</b>
      </p>
    </div>
    <div class="overview-param">
      <b class="overview-key">Overview</b> A <b>VR-based</b> teleoperation system has been established in this project to help facilitate human experience while performing remote work. The entire framework is set up under a simulation environment <b>(Unity3D)</b> with two Kinova arms -- One arm called <b>Manipulator Arm</b> is operated by users to execute remote task; Another called <b>Camera Arm</b> is designed to provide real-time views for the users using a single camera as their perception input, which is attached to the end-effector. Shared autonomous control is achieved by applying <b>IBVS (Image-based Visual Servoing)</b> algorithm to the Camera Arm. Also, interfaces for VR device <b>(Oculus)</b> have been integrated, allowing users to get a view presence in the headset and enabling them to control the Manipulator Arm using the controller.
    </div>
    <div class="overview-param">
      <div>
        <b class="overview-key">Summary</b>
      </div>
      <div class="overview-list">
        <ul>
          <li>
            <span>Design and implement a distributed RL-based framework to train data-based model for networking congestion control</span> 
          </li>
          <li>
            <span>Provide and extend the interfaces in <b>Mininet</b> virtual environment for testing different topologies</span> 
          </li>
          <li>
            <span>Take <b>Bandwidth</b> and <b>Router Buffer Usage</b> as the network performance metrics</span> 
          </li>
          <li>
            <span>Deploy <b>Dumbbell</b> Topology and compare performance using RL scheme with <b>TCP Cubic</b></span> 
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
          <p style="padding-bottom:.75em;">
            <img src="/images/Projects/2-IBVS-Control/KinovaModel.png" width="75%" alignment="center">
          </p>
          <p>
            <b>Kinova Arm DH Parameters</b>
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

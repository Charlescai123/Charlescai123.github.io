---
layout: archive
title: "Using Reinforcement Learning to Provide More Robust Congestion Control under Virtual Network Environment"
collection: projects
permalink: /projects/rltcp
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
      <b class="overview-key">Background</b> Congestion Control, serving as a vital link between high-level internet applications and low-level physical network adapters, has been a extensively researched subject for several years. Some traditional approaches, such as TCP Cubic and Reno, have proven successful in specific industries, aiming to uphold system stability and optimize data transmission efficiency within computer networks. However, these model-based methods heavily reply on pre-defined parameters, exhibiting their lack of flexibility to work in modern dynamic networking environments compared with other data-based schemes.
    </div>
    <div class="overview-param">
      <b class="overview-key">Overview</b> In this project, I implemented a framework which ultilizes Reinforcement Learning (RL) algorithm to deal with Congestion Control problem. It also benefits from the Mininet emulator to generate data and feed the RL model. To narrow down the state space, I also tried with Deep Reinforcement Learning (DRL) which restricts the congestion policy. Additionally, the testbed is designed using distributed architecture to increase the training efficiency and fully leverage the computation resources. In the experiment, a dumbbell topology network is tested and the result indicates the RL-based approach outperforms classical TCP Cubic model, which is promising.
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
            <img src="/images/Projects/1-RLTCP/Dumbbell.png" width="50%" alignment="center">
          </p>
          <p>
            <b>Dumbbell Topology</b>
          </p>
        </div>
      </div>
      <div style="display:flex">
        <div class="overview-pic">
          <p style="padding:.3em">
            <img class="fig" src="/images/Projects/1-RLTCP/BW.png" width="100%" alignment="center" style="height:400px; width:500px;">
          </p>
        </div>
        <div class="overview-pic">
          <p style="padding:.3em">
            <img class="fig" src="/images/Projects/1-RLTCP/Quene.png" width="100%" alignment="center" style="height:400px; width:500px;">
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


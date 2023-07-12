---
permalink: /
title: "About"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

This is Yihao Cai, AKA Charles. I'm currently a PhD student in the Department of Electrical and Computer Engineering at [Wayne State University](https://engineering.wayne.edu/electrical-computer) (WSU). My advisor is Prof. [Yanbing Mao](https://scholar.google.com/citations?user=kN1IRpsAAAAJ&hl=en). My research direction lies primarily in Physics-AI, Cyber Physical Systems (CPS) and Robotics. My goal is to dedicate myself to the advancement of the AI field within the aim of enhancing the safety and intelligence of robots. 

As a passionate technology enthusiast, I'm also a big fan of [Ironman](https://en.wikipedia.org/wiki/Iron_Man), and my curiosity extends to exploring various computer-related technologies, encompassing but not limited to computer systems and cybersecurity.


News
======
------

<html>
<head>
  <title>Toggle White/Dark Mode Demo</title>
  <style>
    /* Styles for light mode */
    body {
      background-color: #ffffff;
      color: #000000;
    }
    
    /* Styles for dark mode */
    body.dark-mode {
      background-color: #1a1a1a;
      color: #ffffff;
    }
    
    .toggle-btn {
      padding: 10px 20px;
      font-size: 16px;
    }
  </style>
  <script>
    function toggleMode() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.toggle("dark-mode");
    }
  </script>
</head>
<body>
  <h1>Toggle White/Dark Mode Demo</h1>
  
  <button class="toggle-btn" onclick="toggleMode()">Toggle Mode</button>
</body>
</html>


<style>
table td, table th {
    color: var(--global-text-color);
}

.badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.badge {
    color: #fff !important;
    border-radius: 0.125rem;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}

.font-weight-bold {
    font-weight: 700!important;
}

.text-uppercase {
    text-transform: uppercase!important;
}

.align-middle {
    vertical-align: middle!important;
}

.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
</style>

<ul>
  <li> ajsdklasjldajsldkjas</li>
</ul>

<div class="table-responsive" style="max-height: 10vw"> 
  <table class="table table-sm table-borderless"> 
    <tbody>
      <tr> 
        <th scope="row"> 
          <span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width: 100px;"> Apr 15, 2023 </span> 
        </th> <td> I will join MIT EECS as a Ph.D. student this fall! </td> 
      </tr> 
      <tr> <th scope="row"> <span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width: 100px;"> Nov 3, 2022 </span> </th> <td> Our new work <a href="www.cs.cmu.edu/~sige/"><strong>SIGE</strong></a> has been accepted by NeurIPS 2022! Our <a href="https://github.com/lmxyy/sige" target="_blank" rel="noopener noreferrer">code</a> and benchmark are publicly available! </td> </tr> <tr> <th scope="row"> <span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width: 100px;"> Nov 3, 2022 </span> </th> <td> <a href="https://github.com/mit-han-lab/gan-compression" target="_blank" rel="noopener noreferrer"><strong>GAN Compression</strong></a> got 1k stars in Github! </td> </tr> <tr> <th scope="row"> <span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width: 100px;"> Mar 2, 2022 </span> </th> <td> <strong>Lite Pose</strong> has been accepted by CVPR2022! Our <a href="https://github.com/mit-han-lab/litepose" target="_blank" rel="noopener noreferrer">code</a> is publicly available! </td> </tr> <tr> <th scope="row"> 
        <span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width: 100px;"> Oct 26, 2021 </span> 
      </th> 
        <td> 
          <strong>GAN Compression</strong> has been accepted by T-PAMI! 
        </td> 
      </tr>
    </tbody>
  </table> 
</div>

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

Hobbies
======
League of Legends | CS Online | Basketball | Soccer | Chinese Chess | Hacking | Sleeping~zzz

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.

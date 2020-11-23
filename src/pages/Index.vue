<template>
  <!-- Create new pages: https://gridsome.org/docs/pages/ -->
  <Layout>

    <div class="title-header">
      <div class="header-gradient header-offset" />
      <div class="header-container">
        <g-image class="profile-img" alt="Profile picture" src="~/assets/images/profile-pic.jpg" height="200" width="200" quality="100" fit="cover" blur="10" />
        <div class="header-text">
          I am a:<br>
          <span class='blue-text'>switch</span> user.kind {<br>
            &nbsp;<span class='blue-text'>case</span>&nbsp;<span class='green-text'>"recruiter"</span>:&nbsp;<span class='blue-text'>return</span>&nbsp;<span><a href="#about">"Software Engineer"</a></span><br>
            &nbsp;<span class='blue-text'>case</span>&nbsp;<span class='green-text'>"viewer"</span>:&nbsp;<span class='blue-text'>return</span>&nbsp;<span><a href="https://www.youtube.com/channel/UC7tKYiFtH_6HCBD4hh7hTWw" target="_blank">"Video Maker"</a></span><br>
            &nbsp;<span class='blue-text'>case</span>&nbsp;<span class='green-text'>"chatter"</span>:&nbsp;<span class='blue-text'>return</span>&nbsp;<span><a href="https://www.twitch.tv/preethamrn" target="_blank">"Live Streamer"</a></span><br>
          }
        </div>
      </div>
    </div>
    <div class="header-offset"></div>

    <div class='info-grid'>
      <div class='about'>
        <h1 id='about'>About me</h1>
        <span>
          <i class='highlight-red subheader'>PAST. </i>I started programming sometime between 5th and 10th grade depending on what you call programming, gaining various levels of experience in VB6, C++, Java, Python, HTML, Javascript, and PHP. After a bout in competitive programming, a few internships, and some web and app development, I graduated from UCLA with a GPA of 3.97.<br>
          <i class='highlight-green subheader'>PRESENT. </i>I currently work on Uber's Storage Platform Infrastructure using Go, Java, Javascript and technologies like Cassandra, Docstore, Spark, Hive, and Kafka. Outside of work I enjoy cubing, bouldering, and video making.<br>
          <i class='highlight-blue subheader'>FUTURE. </i>I'd like to explore new ways to leverage programming in fields like video making and live streaming and learn more about Machine Learning and App Development. I also want to teach others more about programming and inspire the next generation of programmers to get excited about coding just like I was when I was young.<br>
        </span>
      </div>

      <div class='experience'>
        <h1 id='experience'>Experience</h1>
        <div class='experience-container'>
          <div class='experience-date'>Jan 2019 - Present</div>
          <div class='experience-item-text'>
            <div class='experience-item-title'>Uber Software Engineer</div>
            Working on the Storage Platform team in Uber Infrastructure. Building workflows to streamline datastore provisioning for various storage engines and use cases. Creating a backend gateway and portal UI to interface with datastores. Creating tools to increase developer efficiency and velocity.
          </div>

          <div class='experience-date'>Summer 2017, Summer 2018</div>
          <div class='experience-item-text'>
            <div class='experience-item-title'>Uber Software Engineering Intern</div>
            Worked in Uber Infrastructure. Built a metrics aggregation workflow and dashboard to track the storage usage, trends, and query patterns for various teams and Cassandra datastores. Integrated an incremental monitoring and auditing system for Uber’s Kafka pipeline which handles up to 13 million messages/sec.
          </div>

          <div class='experience-date'>Summer 2016</div>
          <div class='experience-item-text'>
            <div class='experience-item-title'>Symantec Software Engineering Intern</div>
            Worked on the Symantec STAR team. Generated features from big data telemetry logs to train a classifier using machine learning to distinguish between targeted and non-targetted threats with 65% recall and 97% precision using technologies like Hadoop, Hive, Python (pandas and scikit).
          </div>

          <div class='experience-date'>2015 - 2018</div>
          <div class='experience-item-text'>
            <div class='experience-item-title'>University of California, Los Angeles</div>
            Graduated with 3.97 GPA in a B.S. in Computer Science. Worked as a learning assistant for an Intro to C++ Programming class. Help the professor with creating problem sets and holding office hours and discussions. Worked as a grader for Computer Networks: Physical Layer.
          </div>
        </div>
      </div>
      
      <div class='projects'>
        <h1 id='projects'>Projects</h1>
        <Projects />
      </div>
    </div>

  </Layout>
</template>

<script>
import Projects from "@/components/Homepage/Projects"
export default {
  components: {
    Projects,
  },
  data: () => ({}),
  methods: {
  },
  metaInfo: {
    title: '@preethamrn'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.header-offset {
  min-height: 300px;
}

.header-container {
  flex-direction: row;
}
.header-gradient {
  z-index: -1;
  background-image: linear-gradient(rgb(221, 199, 0), rgb(0, 193, 207));
  left: 0;
  width: 100%;
  position: absolute;
}
.profile-img {
  left: 20vw;
  position: absolute;
}
.header-text {
  position: absolute;
  margin-top: 20px;
  padding-top: 10px;
  padding-right: 40px;
  padding-left: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  left: 50vw;
  font-weight: 600;
  font-family: monospace;
  font-size: 2em;
  color: white;
}
.blue-text {
  color: rgb(0, 0, 182);
}
.green-text {
  color: rgb(43, 221, 43);
}
a:hover {
  color: rgb(102, 255, 102);
}

.info-grid {
  display: grid;
  margin: 0 auto;
  max-width: 2000px;
  grid-template-areas: 
    "about projects projects"
    "experience projects projects";
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}
@media only screen and (max-width: 1500px) {
  .info-grid {
    grid-template-areas:
      "about"
      "experience"
      "projects";
    grid-template-columns: 1fr;
    max-width: 760px;
  }
  .project-grid {
    max-width: unset;
  }
}
.about {
  padding-left: 50px;
  grid-area: about;
}
.experience {
  padding-left: 50px;
  grid-area: experience;
}
.projects {
  padding-left: 50px;
  grid-area: projects;
  justify-content: left !important;
  margin: 0;
}

@media only screen and (max-width: 1500px) {
  .header-offset {
    min-height: 450px;
  }
}
@media only screen and (max-width: 1000px) {
  .header-offset {
    min-height: 350px;
    position: absolute;
  }
  .header-container {
    flex-direction: column;
  }
  .profile-img {
    position: static;
    width: 150px;
  }
  .header-text {
    position: static;
    font-size: 1.1em;
    padding-right: 0;
  }
}


.subheader {
  font-size: 2em;
  margin-right: 8px;
  color: white;
}
.highlight-red {
  background-color: rgb(255, 70, 70);
}
.highlight-green {
  background-color: rgb(0, 204, 0);
}
.highlight-blue {
  background-color: rgb(94, 94, 255);
}

.experience-container {
  display: flex;
  flex-wrap: wrap;
}
.experience-date {
  flex: 0 20%;
  font-weight: 500;
}
.experience-date:before {
  display: inline-block;
  content: '';
  height: 0.75rem;
  width: 0.75rem;
  margin-right: 1em;

  -webkit-border-radius: 1em;
  border-radius: 1em;
  background-color: rgb(0, 183, 207);
}
.experience-item-title {
  font-size: 1.7em;
  font-weight: 500;
}
.experience-item-text {
  margin-left: 20px;
  flex: 0 70%;
  font-size: 0.9em;
}
</style>

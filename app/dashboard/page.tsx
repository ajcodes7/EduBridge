import "../../styles/profile.css";
import React from "react";

function Profile() {
  return (
    <>
      <header className="header">
        <section className="flex">
          <a href="home.html" className="logo">
            {" "}
            EduBridge{" "}
          </a>
          <div className="icons">
            <div id="menu-btn" className="fas fa-bars"></div>
            <div id="search-btn" className="fas fa-search"></div>
            <div id="user-btn" className="fas fa-user"></div>
            <div id="toggle-btn" className="fas fa-sun"></div>
            <div id="notification-btn" className="fas fa-bell"></div>
            <div id="leaderboard-btn" className="fas fa-star"></div>
          </div>

          <div className="profile">
            <h3 className="name">
              <span className="addfullName"></span>
            </h3>
            <p className="role">
              {" "}
              <span className="addwho"> </span>
            </p>
            <a href="profile.html" className="btn">
              view profile
            </a>
            <a href="#l" className="btn">
              Log out
            </a>
          </div>
          <div className="leaderboard">
            <ol>
              <li>john</li>
              <li>hu</li>
            </ol>
          </div>
          <div className="notification">
            <ul>
              <li>notification 1</li>
              <li>notification 1</li>
              <li>notification 1</li>
            </ul>
          </div>
        </section>
      </header>

      <div className="side-bar">
        <div id="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <div className="profile">
          <h3 className="name">
            <span className="addfullName"></span>
          </h3>
          <p className="role">
            <span className="addwho"></span>
          </p>
          <a href="profile.html" className="btn">
            view profile
          </a>
        </div>

        <nav className="navbar">
          <a href="home.html">
            <i className="fas fa-home"></i>
            <span>home</span>
          </a>
          <a href="about.html">
            <i className="fas fa-question"></i>
            <span>about</span>
          </a>
          <a href="courses.html">
            <i className="fas fa-graduation-cap"></i>
            <span>courses</span>
          </a>
          <a href="mentor.html">
            <i className="fas fa-chalkboard-user"></i>
            <span>mentors</span>
          </a>
          <a href="contact.html">
            <i className="fas fa-headset"></i>
            <span>contact us</span>
          </a>
          <a href="#">
            <i className="fas fa-book"></i>
            <span>library</span>
          </a>
          <a href="#">
            <i className="fas fa-microscope"></i>
            <span>research</span>
          </a>
        </nav>
      </div>
      <section className="teachers">
        <h1 className="heading">My mentors</h1>

        <div className="box-container">
          <div className="box">
            <div className="tutor">
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <a href="mentor_profile.html" className="inline-btn">
              view profile
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <a href="mentor_profile.html" className="inline-btn">
              view profile
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <a href="mentor_profile.html" className="inline-btn">
              view profile
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <a href="mentor_profile.html" className="inline-btn">
              view profile
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <a href="mentor_profile.html" className="inline-btn">
              view profile
            </a>
          </div>

          <a href="mentor.html" className="inline-btn">
            Show more{" "}
          </a>
        </div>
      </section>

      <section className="courses">
        <h1 className="heading">our courses</h1>

        <div className="box-container">
          <div className="box">
            <div className="tutor">
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <span>10 videos</span>
            </div>
            <h3 className="title">complete HTML tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <span>10 videos</span>
            </div>
            <h3 className="title">complete CSS tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <span>10 videos</span>
            </div>
            <h3 className="title">complete JS tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>
        </div>

        <div className="more-btn">
          <a href="courses.html" className="inline-option-btn">
            view all courses
          </a>
        </div>
      </section>
      <section className="courses">
        <h1 className="heading">Opportunity alert</h1>

        <div className="">
          <div className="box">
            <div className="tutor">
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <h3 className="title">complete HTML tutorial</h3>
            <a href="#" className="inline-btn">
              view more
            </a>
          </div>
          <div className="box">
            <div className="tutor">
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <h3 className="title">complete CSS tutorial</h3>
            <a href="#" className="inline-btn">
              view more
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <h3 className="title">complete JS tutorial</h3>
            <a href="#" className="inline-btn">
              view more
            </a>
          </div>
        </div>

        <div className="more-btn">
          <a href="#" className="inline-option-btn">
            view all opportunities
          </a>
        </div>
      </section>
      <footer className="footer">
        &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights
        reserved!
      </footer>
    </>
  );
}

export default Profile;

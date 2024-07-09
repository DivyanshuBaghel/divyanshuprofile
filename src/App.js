function App() {
  return (
    <div className="container">
      <div id="section1" className="section">
        <div className="about">
          <p>Hello .. My name is</p>
          <h1>Divyanshu Baghel</h1>
          <p>
            I am a <b>Web developer</b>
          </p>
          👇🏻
        </div>
      </div>
      
      <div id="section2" className="section"> 
        <div className="table-container">
          <table className="styled-table">
              <thead>
                  <tr>
                      <th>Skill Set</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th>Web</th>
                      <td>HTML, CSS, JavaScript, React, Node.js, PHP</td>
                  </tr>
                  <tr>
                      <th>Mobile</th>
                      <td>Expo</td>
                  </tr>
                  <tr>
                      <th>Database</th>
                      <td>MySQL, MS Access, MongoDB</td>
                  </tr>
                  <tr>  
                      <th>Cloud Platform</th>
                      <td>Aws and Microsoft Azure</td>
                  </tr>
                  <tr>
                      <th>Programing Lang</th>
                      <td> C/C++, Python, Java</td>
                  </tr>
                  <tr>
                      <th>Tools & Technologies</th>
                      <td>Linux, Git, API, Data Structures & Algorithms (DSA - Arrays, Lists,
                        String Manipulation)</td>
                  </tr>
              </tbody>
          </table>
      </div>
      </div>
      <div id="section3" className="section">
            <div>Projects</div>
            <div class="card">  
              <div class="card-body">
                  <h3 class="card-title">WordleDemo</h3>
                  <p class="card-text">Web based word guessing game</p>
                  <a href="https://d21xv1xsoblqc2.cloudfront.net/" class="card-button">Visit Page</a>
              </div>
          </div>
          <div class="card">  
              <div class="card-body">
                  <h3 class="card-title">WeatherApp</h3>
                  <p class="card-text">Get Weather info near you</p>
                  <a href="https://divyanshubaghel.github.io/weatherAppV2/" class="card-button">Visit Page</a>
              </div>
          </div>
      </div>
      <div id="section4" className="section">
        <div>
          <p>To Know about more</p>
          <a href="https://myamazons3bucket4783.s3.ap-south-1.amazonaws.com/DivyanshuResume.pdf"><h2>Download Resume</h2></a>
        </div>
      </div>
    </div>
  );
}

export default App;

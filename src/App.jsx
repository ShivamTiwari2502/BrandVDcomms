import "./App.css"
import reebok from "./assets/reebok.jpg";
// import logo from "./assets/logo1.jpg"
import apollo from "./assets/apollo.png";
import aurelia from "./assets/aurelia.png";
import career from "./assets/career-logo-2a.jpg";
import CBRE from "./assets/CBRE.png";
import delhidynamos from "./assets/delhidynamos.jpg";
import Dennetwork from "./assets/Dennetwork.png";
import DLF from "./assets/DLF.png";
import dlfmalls from "./assets/dlfmalls.jpg";
import havells from "./assets/havells.png";
import hello from "./assets/hello.png";
import housing from "./assets/housing.png";
import jphospital from "./assets/jphospital.jpg";
import nsdc from "./assets/nsdc.png";
import ola from "./assets/ola.svg";
import pnbmetlife from "./assets/pnbmetlife.png";
import rea from "./assets/rea.png";
import NavBar from "./NavBar";

function App() {
  return (
    <div className='p-1 flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <NavBar />

        <div id='body' className='grid grid-cols-1 items-center '>

          {/* page 1 */}
          <div className="text-blue-900 bg-blue-100 rounded-2xl text-7xl font-semibold p-10 text-center">
            <div className="p-5 mb-4">
              Crafting Conversations
            </div>
            <div>
              Building Brands
            </div>
          </div>


          <div className=" text-4xl w-4xl m-5 mx-auto">
            <div>
              A new-age Public Relations and Communications consultancy that blends strategy, storytelling, and stakeholder engagement to drive long-term brand value.
            </div>
          </div>

          <div className="mt-10">

            <div className="text-5xl text-center text-blue-900 font-bold">
              Vision & Mission
            </div>
            <div className="text-4xl text-center w-5xl m-5 font-inter" >
              Building strong narratives on the back of content and industry relations.
            </div>
            <div className="text-4xl text-center w-5xl m-5 font-inter">
              To help brands create meaningful visibility and trust through sustained communication and authentic storytelling.
            </div>

          </div>


          {/* page 2 */}

          <div className="m-5">
            <div className="text-5xl text-center text-blue-900 font-bold">
              Our Experience</div>

            <div className="text-4xl w-5xl m-5 font-inter grid grid-cols-1 " >
              <div className="text-center mb-6">
                Worked with brands across industries:
              </div>
              <ul className="list-disc grid grid-cols-2 mb-5 mx-auto">
                <li className="mb-5 p-3 pr-4 pl-4">FMCG</li>
                <li className="mb-5 p-3 pr-4 pl-4">Retail</li>
                <li className="mb-5 p-3 pr-4 pl-4">Real Estate</li>
                <li className="mb-5 p-3 pr-4 pl-4">GCC</li>
                <li className="mb-5 p-3 pr-4 pl-4">Pharma & Healthcare</li>
                <li className="mb-5 p-3 pr-4 pl-4">Startups</li>
                <li className="mb-5 p-3 pr-4 pl-4">Services</li>
                <li className="mb-5 p-3 pr-4 pl-4">Sports & Lifestyle</li>
                <li className="mb-5 p-3 pr-4 pl-4">Insurance</li>
                <li className="mb-5 p-3 pr-4 pl-4">Fintech</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-1.5 place-items-center">
              <img src={reebok} alt="reebok" className="w-32 object-cover" />
              <img src={apollo} alt="apollo" className="w-32 object-cover" />
              <img src={aurelia} alt="aurelia" className="w-32 object-cover" />
              <img src={CBRE} alt="CBRE" className="w-32 object-cover" />
              <img src={career} alt="career" className="w-32 object-cover" />
              <img src={delhidynamos} alt="delhi dynamos" className="w-32 object-cover" />
              <img src={DLF} alt="DLF" className="w-32 object-cover" />
              <img src={Dennetwork} alt="Den Network" className="w-32 object-cover" />
              <img src={dlfmalls} alt="dlf malls" className="w-32 object-cover" />
              <img src={havells} alt="Havells" className="w-32 object-cover" />
              <img src={hello} alt="hello" className="w-32 object-cover" />
              <img src={housing} alt="housing" className="w-32 object-cover" />
              <img src={jphospital} alt="jphospital" className="w-32 object-cover" />
              <img src={nsdc} alt="nsdc" className="w-32 object-cover" />
              <img src={ola} alt="ola" className="w-32 object-cover" />
              <img src={pnbmetlife} alt="pnb metlife" className="w-32 object-cover" />
              <img src={rea} alt="rea" className="w-32 object-cover" />

            </div>
          </div>

          {/* page number 3 */}
          <div className="mx-auto mt-8">
            <div className="text-5xl text-center p-5 text-blue-900 font-bold">
              Our Philosophy
            </div>

            <div className="text-5xl w-5xl m-5 p-4 font-inter text-center">
              PR is built over time — Sustenance is the key.
            </div>

            <div className="text-4xl w-5xl m-5 font-inter">
              We believe that impactful communication is not about
              momentary spikes in visibility, but about long-term reputation building, consistent storytelling, and authentic engagement.
            </div>

          </div>

          {/* page number 4 */}
          <div className="mt-8 mx-auto">
            <div className="text-5xl text-center p-5 text-blue-900 font-bold">
              Our Services
            </div>
            <div className="text-4xl m-5 font-inter">
              <ul className="list-disc mb-5 mx-auto p-2 m-2"  >
                <li className="mt-5">
                  Corporate Brand Building
                </li>
                <li className="mt-5">
                  Thought Leadership Positioning
                </li>
                <li className="mt-5">
                  Personal Branding for Founders & CXOs
                </li>
                <li className="mt-5">
                  Digital Brand Building
                </li>
                <li className="mt-5">
                  Social Media Management
                </li>
                <li className="mt-5">
                  Crisis Communication
                </li>
                <li className="mt-5">
                  Industry Body Relations
                </li>
                <li className="mt-5">
                  Government Relations
                </li>
                <li className="mt-5">
                  Book Writing & Promotion Support
                </li>
              </ul>
            </div>
          </div>

          {/* page number 5 */}

          <div className="mt-8 mx-auto" >
            <div className="text-5xl text-center p-5 text-blue-900 font-bold" >
              Tools & Channels
            </div>

            <div className="text-4xl m-5 font-inter" >
              <ul className="list-disc mb-5 mx-auto p-2 m-2" >
                <li className="mt-5">Media Relations (Traditional + Digital)</li>
                <li className="mt-5">Influencer Engagement</li>
                <li className="mt-5">Podcasts / Vodcasts</li>
                <li className="mt-5">Social Media Campaigns</li>
                <li className="mt-5">Event & Conclave Participation</li>
                <li className="mt-5">Award Nominations & Positioning</li>
                <li className="mt-5">Moment Marketing & Topical Opportunities</li>
              </ul>
            </div>
          </div>

          {/* page number 6 */}

          <div className="mt-8 mx-auto">
            <div className="text-5xl text-center p-5 text-blue-900 font-bold">
              Our Edge
            </div>
            <div className="text-4xl m-5 font-inter" >
              <ul className="list-disc mb-5 mx-auto p-2 m-2" >
                <li className="mt-5">Strong CXO-level media and industry connects</li>
                <li className="mt-5">Blend of traditional PR insight with digital-first execution</li>
                <li className="mt-5">Strategic storytelling rooted in brand and business</li>
                <li className="mt-5">objectives Nimble, result-driven, and relationship-focused team</li>
              </ul>
            </div>
          </div>

          {/* page number 7 */}
          <div className="mt-8 mx-auto mb-5">
            <div className="text-5xl text-center p-5 text-blue-900 font-bold">
              Leadership
            </div>
            <div className=" bg-gray-200 p-4 rounded-2xl">
              <div className="text-center" >
                <span className="text-3xl font-bold">Amit Arora</span>
                <span className="text-2xl">- Founder & Principal Consultant</span>
              </div>
              <div className="text-2xl w-3xl mt-5" >
                A communications strategist with over a decade of experience leading corporate reputation programs and brand storytelling across industries.
              </div>
            </div>


          </div>
          <div className="w-5xl">
            <div className="text-5xl text-center p-5 text-blue-900 font-bold">
              Let’s Build Your Brand Story
            </div>
            <div className="text-center text-3xl">
              Together, let’s create narratives that matter — stories that inspire trust, relevance, and impact.
            </div>

          </div>
          <div id='footer' className="text-center text-2xl mt-4 mb-3 w-full">
            <span className="mt-4 pl-5 pr-5"><b>Contact:</b> 0123456789</span>
            <span className="mt-4 pl-5 pr-5"><b>Email:</b> <a > example@gmail.com</a> </span>
            <span className="mt-4 pl-5 pr-5"><b>Phone:</b> 123456</span>
            <span className="mt-4 pl-5 pr-5"><b>Website/LinkedIn:</b> BranVDPR.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const contact = () => {
  return (
    <>
      <div id="contact" className="w-full bg-indigo-900">
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
          <h2 className="text-3xl md:text-3xl tracking-wider p-10 uppercase text-white font-bold">
            Let's talk
          </h2>
          <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-black bg-white mt-4">
            <div className="w-full md:w-1/2 h-full rounded-xl p-4">
              <p className="pt-10 pb-10 md:m-10">
                I'm currently looking for new opportunities. my inbox is always
                open. Whether you have any question or just want to say hi.
              </p>
              <h2 className="text-1xl md:text-2xl tracking-wider p-10 uppercase  font-bold">
                Connect with me!
              </h2>
              <div className="grid grid-cols-4 mx-10 w-3/2 md:w-2/5">
                <div className="flex items-center justify-center p-3 rounded-x shadow-md shadow-black hover:scale-105 duration-200 cursor-pointer">
                  <a href="https://www.linkedin.com/in/clement-sijo-l-421a42222">
                    <FaLinkedin size={25} />
                  </a>
                </div>
                <div className="flex items-center justify-center p-3 rounded-x shadow-md shadow-black hover:scale-105 duration-200 cursor-pointer">
                  <a href="https://github.com/sijo07">
                    <FaGithub size={25} />
                  </a>
                </div>
                <div className="flex items-center justify-center p-3 rounded-x shadow-md shadow-black hover:scale-105 duration-200 cursor-pointer">
                  <a href="mailto:clementsijo@gmail.com">
                    <FaEnvelope size={25} />
                  </a>
                </div>
                <div className="flex items-center justify-center p-3 rounded-x shadow-md shadow-black hover:scale-105 duration-200 cursor-pointer">
                  <a href="tel:+91 6362529465">
                    <FaPhone size={25} />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full rounded-xl p-4">
              <div className="p-4 text-left">
                <form
                  action="https://getform.io/f/14ebe776-f3da-4bcf-a8af-85222e57a410"
                  method="post"
                >
                  <div className="grid md:grid-col-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="capitalize text-sm py-2 font-semibold">
                        name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blur-200"
                      ></input>
                    </div>
                    <div className="flex flex-col">
                      <label className="capitalize text-sm py-2 font-semibold">
                        phone
                      </label>
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blur-200"
                      ></input>
                    </div>
                    <div className="flex flex-col  md:col-span-2">
                      <label className="capitalize text-sm py-2 font-semibold">
                        email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blur-200"
                      ></input>
                    </div>
                    <div className="flex flex-col md:col-span-2">
                      <label className="capitalize text-sm py-2 font-semibold">
                        message
                      </label>
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Message"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blur-200"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="group my-4  bg-indigo-900 text-white px-3 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                      hit me up!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;

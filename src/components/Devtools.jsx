import Section from "./Section";
import Heading from "./Heading";
import { terminal, vim, desktop } from "../assets";
import {
  Gradient,
} from "./design/Devtools.jsx";

const Devtools = () => {
    return <Section id="dev-tools" crosses>
        <div className="container">
            <Heading
              title="Dev Tools"
              text="What i use and setup"
            />

            <Gradient />
            <div className="relative">
                <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div className="absolute top-0 left-0 w-full h-full md:w-3/5 xl:w-auto">
                        <a href="https://github.com/wreckitral/nvim-config">
                        <img
                            className="w-full h-full object-right transition-transform duration-300 hover:scale-125"
                            width={800}
                            alt="Smartest AI"
                            height={730}
                            src={vim}
                        />
                        </a>
                    </div>
                    <div className="relative z-1 max-w-[17rem] ml-auto">
                        <h4 className="h4 mb-4">NEOVIM</h4>
                        <p className="body-2 mb-[3rem] text-n-3">
                            neovim config inspired by theprimeagen
                        </p>
                    </div>
                </div>  

                <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                src={terminal}
                                className="h-full w-full object-cover"
                                width={630}
                                height={750}
                                alt="robot"
                            />
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                            <h4 className="h4 mb-4"><a href="https://medium.com/" className="hover:text-n-13">Terminal</a></h4>
                            <p className="body-2 mb-[3rem] text-n-3">
                                I script some of the things i do in terminal
                            </p>
                        </div>
                    </div>

                    <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                        <div className="py-12 px-4 xl:px-8">
                            <h4 className="h4 mb-4">
                                <a href="https://medium.com/" target="_blank" className="hover:text-n-13">Setup</a>
                            </h4>
                            <p className="body-2 mb-[2rem] text-n-3">
                                My laptop, OS, and etc
                            </p>
                        </div>

                        <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                            <img
                                src={desktop}
                                className="w-full h-full object-cover"
                                width={520}
                                height={400}
                                alt="Scary robot"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section> 
}

export default Devtools

import Image from "next/image"

export const auditRelease = () => {
    return (
        <>
            <div className="pt-44 pb-28 px-4 sm:px-8 md:px-12 lg:px-28 bg-[#E8ECEF] dark:bg-[#1B1F28] text-black dark:text-white transition-all duration-500">
                {/* DIV 1 */}
                <div className="w-20 rounded-md bg-[#26293A] border border-[#575757] px-5 py-1">
                    <p className="font-[Inter] font-light text-base text-white">Audit</p>
                </div>
                {/* DIV 2 */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-6 w-full">
                    {/* DIV 2 #1 */}
                    <div className="w-full pl-5 py-5 rounded-md dark:border-none bg-white dark:bg-[#26293A]">
                        <div className="flex gap-3 items-center">
                            <Image src="/images/auditrelease/virtualrobot.svg" width='40' height='40' />
                            <p className="font-[Inter] font-semibold text-2xl text-black dark:text-white mr-2">Virtual Robot</p>
                            <p className="flex justify-center items-center w-20 h-9 font-semibold rounded-md border border-[#5B4C7C]">VR</p>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <p className="w-48 h-9 flex items-center text-left pl-6 bg-white dark:bg-[#1A1D2F] rounded-md border border-[#5B4C7C] font-[Inter] text-base font-normal dark:font-light">Audit Release #1</p>
                            <p className="w-20 h-9 flex justify-center items-center text-left rounded-md border border-[#5B4C7C] font-[Inter] text-base font-normal dark:font-light">
                                <div className="flex justify-center gap-[6px]">
                                    <Image src="/images/auditrelease/bsc.svg" width="20" height="20" />
                                    <p>BSC</p>
                                </div>
                            </p>
                            <p className="w-20 lg:w-16 xl:w-20 flex justify-center items-center h-9 rounded-md border border-[#5B4C7C] font-[Inter] text-base font-normal dark:font-light">DEFI</p>
                            <button className="w-24 h-9 text-left rounded-md border border-[#5B4C7C] font-[Inter] text-base font-normal dark:font-light">
                                <div className="flex justify-center gap-2">
                                    <Image src="/images/auditrelease/share.svg" width="19" height="20" />
                                    <p>Share</p>
                                </div>
                            </button>
                            <p className="w-52 h-9 flex justify-center items-center mt-0 rounded-md border border-[#5B4C7C] font-[Inter] text-base font-normal dark:font-light">Smart Contract Platform</p>
                        </div>
                        <div className="mt-4 lg:inline-block">
                            <Image src="/images/auditrelease/blocksafu.svg" width="138" height="40" />
                        </div>
                    </div>
                    {/* DIV 2 #2 */}
                    <div className="w-full px-5 py-6 rounded-md dark:border-none bg-white dark:bg-[#26293A] flex justify-center gap-5">
                        <div className="w-full mt-2">
                            <p className="text-center font-[Inter] font-semibold text-lg leading-4">Content Score</p>
                            <Image src="/images/auditrelease/auditmeter.svg" width="100" height="100" className="mx-auto mt-5 sm:mt-4"/>
                            <p className="text-center font-[Inter] font-semibold text-lg"><span className="text-xl text-[#D171FF]">75</span>/100</p>
                            <p className="text-center text-sm sm:text-base font-[Inter] font-medium dark:font-light">You have a good score</p>
                        </div>
                        <div className="w-20 h-52 border border-[#5B4C7C] rounded-[5px]">
                                <div className="mx-5">
                                    <div className="flex mt-4 items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1.5" y="1.5" width="15" height="15" rx="3.5" fill="#D9D9D9" stroke="#D9D9D9" stroke-width="3"/>
                                        </svg>
                                        <p className="ml-2 font-semibold font-[Inter]">1</p>
                                    </div>
                                    <div className="flex mt-3 items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1.5" y="1.5" width="15" height="15" rx="3.5" fill="#FFEE51" stroke="#FFEE51" stroke-width="3"/>
                                        </svg>
                                        <p  className="ml-2 font-semibold font-[Inter]">0</p>
                                    </div>
                                    <div className="flex mt-3 items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1.5" y="1.5" width="15" height="15" rx="3.5" fill="#FB8F03" stroke="#FB8F03" stroke-width="3"/>
                                        </svg>
                                        <p  className="ml-2 font-semibold font-[Inter]">4</p>
                                    </div>
                                    <div className="flex mt-3 items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1.5" y="1.5" width="15" height="15" rx="3.5" fill="#FE1A64" stroke="#FE1A64" stroke-width="3"/>
                                        </svg>
                                        <p  className="ml-2 font-semibold font-[Inter]">3</p>
                                    </div>
                                    <div className="flex mt-3 items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.8" x="1.5" y="1.5" width="15" height="15" rx="3.5" fill="#38F982" stroke="#38F982" stroke-width="3"/>
                                        </svg>
                                        <p  className="ml-2 font-semibold font-[Inter]">5</p>
                                    </div>
                                </div>
                        </div>
                        <div className="w-full mt-2">
                            <p className="font-[Inter] sm:text-center lg:text-left font-semibold text-lg leading-4">Informations</p>
                            <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 w-full sm:w-52 lg:w-full mt-4 gap-5">
                                <button className="w-8 h-8 bg-[#1B1F28] text-white rounded-full">
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="fill-current" d="M20.905 11.0013C20.145 11.0012 19.4153 11.2994 18.8729 11.8319C18.3305 12.3643 18.0189 13.0884 18.005 13.8483L17.977 15.4233C17.9754 15.5079 17.9559 15.5911 17.9198 15.6676C17.8837 15.7441 17.8319 15.8121 17.7676 15.8672C17.7034 15.9222 17.6283 15.9631 17.5472 15.987C17.4661 16.011 17.3808 16.0176 17.297 16.0063L15.736 15.7943C13.682 15.5143 11.714 14.5683 9.826 12.9953C9.228 16.3053 10.396 18.5983 13.209 20.3673L14.956 21.4653C15.039 21.5175 15.108 21.5892 15.1568 21.6741C15.2057 21.7591 15.233 21.8548 15.2364 21.9528C15.2397 22.0507 15.219 22.1481 15.1761 22.2362C15.1331 22.3243 15.0692 22.4006 14.99 22.4583L13.398 23.6213C14.345 23.6803 15.244 23.6383 15.99 23.4903C20.708 22.5483 23.845 18.9983 23.845 13.1423C23.845 12.6643 22.833 11.0013 20.905 11.0013ZM16.005 13.8113C16.0225 12.8473 16.3239 11.91 16.8716 11.1165C17.4192 10.3231 18.1888 9.70881 19.0839 9.35065C19.979 8.9925 20.9599 8.90637 21.9037 9.10303C22.8476 9.2997 23.7124 9.77043 24.39 10.4563C25.101 10.4513 25.706 10.6313 27.059 9.81129C26.724 11.4513 26.559 12.1633 25.845 13.1423C25.845 20.7843 21.148 24.5003 16.382 25.4513C13.114 26.1033 8.362 25.0323 7 23.6103C7.694 23.5563 10.514 23.2533 12.144 22.0603C10.765 21.1513 5.276 17.9213 8.883 9.23729C10.576 11.2143 12.293 12.5603 14.033 13.2743C15.191 13.7493 15.475 13.7393 16.006 13.8123L16.005 13.8113Z" fill="white"/>
                                    </svg>
                                </button>
                                <button className="w-8 h-8 bg-[#1B1F28] text-white flex justify-center items-center rounded-full">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="fill-current" d="M5.25301 16.494L5.97701 16.917C7.19795 17.6291 8.5866 18.0029 10 18C11.5823 18 13.129 17.5308 14.4446 16.6518C15.7602 15.7727 16.7855 14.5233 17.3911 13.0615C17.9966 11.5997 18.155 9.99113 17.8463 8.43928C17.5376 6.88743 16.7757 5.46197 15.6569 4.34315C14.538 3.22433 13.1126 2.4624 11.5607 2.15372C10.0089 1.84504 8.40036 2.00346 6.93855 2.60896C5.47674 3.21447 4.22731 4.23984 3.34826 5.55544C2.46921 6.87103 2.00001 8.41775 2.00001 10C2.00001 11.436 2.37701 12.813 3.08401 14.024L3.50601 14.748L2.85301 17.149L5.25301 16.494ZM0.00401338 20L1.35601 15.032C0.465151 13.5049 -0.00289063 11.768 1.34322e-05 10C1.34322e-05 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.23279 20.0029 6.49667 19.5352 4.97001 18.645L0.00401338 20ZM6.39101 5.308C6.52501 5.298 6.66001 5.298 6.79401 5.304C6.84801 5.308 6.90201 5.314 6.95601 5.32C7.11501 5.338 7.29001 5.435 7.34901 5.569C7.64701 6.245 7.93701 6.926 8.21701 7.609C8.27901 7.761 8.24201 7.956 8.12401 8.146C8.04286 8.27448 7.95507 8.39865 7.86101 8.518C7.74801 8.663 7.50501 8.929 7.50501 8.929C7.50501 8.929 7.40601 9.047 7.44401 9.194C7.45801 9.25 7.50401 9.331 7.54601 9.399L7.60501 9.494C7.86101 9.921 8.20501 10.354 8.62501 10.762C8.74501 10.878 8.86201 10.997 8.98801 11.108C9.45601 11.521 9.98601 11.858 10.558 12.108L10.563 12.11C10.648 12.147 10.691 12.167 10.815 12.22C10.877 12.246 10.941 12.269 11.006 12.286C11.0732 12.3031 11.1439 12.2999 11.2093 12.2767C11.2746 12.2536 11.3316 12.2116 11.373 12.156C12.097 11.279 12.163 11.222 12.169 11.222V11.224C12.2193 11.1771 12.2791 11.1415 12.3443 11.1196C12.4095 11.0977 12.4786 11.09 12.547 11.097C12.607 11.101 12.668 11.112 12.724 11.137C13.255 11.38 14.124 11.759 14.124 11.759L14.706 12.02C14.804 12.067 14.893 12.178 14.896 12.285C14.9 12.352 14.906 12.46 14.883 12.658C14.851 12.917 14.773 13.228 14.695 13.391C14.6416 13.5022 14.5707 13.6042 14.485 13.693C14.3841 13.7989 14.2736 13.8954 14.155 13.981C14.114 14.0119 14.0723 14.0419 14.03 14.071C13.9056 14.1499 13.7778 14.2233 13.647 14.291C13.3895 14.4278 13.1052 14.5063 12.814 14.521C12.629 14.531 12.444 14.545 12.258 14.535C12.25 14.535 11.69 14.448 11.69 14.448C10.2683 14.074 8.9534 13.3735 7.85001 12.402C7.62401 12.203 7.41501 11.989 7.20101 11.776C6.31101 10.891 5.63901 9.936 5.23101 9.034C5.02218 8.59129 4.90938 8.1094 4.90001 7.62C4.89589 7.01285 5.09436 6.42167 5.46401 5.94C5.53701 5.846 5.60601 5.748 5.72501 5.635C5.85201 5.515 5.93201 5.451 6.01901 5.407C6.13469 5.34903 6.26088 5.31502 6.39001 5.307L6.39101 5.308Z" fill="white"/>
                                    </svg>
                                </button>
                                <button className="w-8 h-8 bg-[#1B1F28] text-white flex justify-center items-center rounded-full">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="fill-current" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM6.89 11.17L4.392 10.391C3.852 10.226 3.849 9.854 4.513 9.587L14.246 5.827C14.811 5.597 15.131 5.888 14.948 6.617L13.291 14.437C13.175 14.994 12.84 15.127 12.375 14.87L9.824 12.982L8.635 14.13C8.513 14.248 8.414 14.349 8.226 14.374C8.039 14.4 7.885 14.344 7.772 14.034L6.902 11.163L6.89 11.17Z" fill="white"/>
                                    </svg>
                                </button>
                                <button className="w-8 h-8 bg-[#1B1F28] text-white flex justify-center items-center rounded-full">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="fill-current" d="M3.04533 16.1552C2.74533 15.9552 2.48733 15.7002 2.18533 15.3392C2.02858 15.1474 1.87324 14.9544 1.71933 14.7602C1.25633 14.1852 0.964333 13.9202 0.662333 13.8112C0.412632 13.7216 0.208768 13.5364 0.0955903 13.2965C-0.0175879 13.0565 -0.0308096 12.7814 0.0588335 12.5317C0.148477 12.282 0.333642 12.0782 0.573595 11.965C0.813547 11.8518 1.08863 11.8386 1.33833 11.9282C2.09033 12.1982 2.59933 12.6632 3.28533 13.5162C3.19133 13.3992 3.62533 13.9432 3.71833 14.0552C3.90833 14.2822 4.04833 14.4202 4.15833 14.4932C4.36233 14.6302 4.74533 14.6892 5.30833 14.6332C5.33133 14.2512 5.40233 13.8802 5.51033 13.5382C2.54233 12.8122 0.862333 10.8982 0.862333 7.14222C0.862333 5.90222 1.23233 4.78622 1.92033 3.85022C1.70233 2.95622 1.73533 1.87522 2.22233 0.65822C2.2776 0.520555 2.3628 0.396911 2.47177 0.296249C2.58073 0.195587 2.71073 0.120428 2.85233 0.0762203C2.93333 0.0522203 2.97933 0.0412204 3.06033 0.0292204C3.86333 -0.0937796 4.99733 0.19922 6.47533 1.12522C7.35613 0.919303 8.25779 0.81595 9.16233 0.81722C10.0743 0.81722 10.9803 0.92122 11.8463 1.12522C13.3233 0.19222 14.4593 -0.10078 15.2683 0.0292204C15.3533 0.0422204 15.4253 0.0592203 15.4863 0.0792203C15.6252 0.124997 15.7523 0.200654 15.8587 0.300863C15.9651 0.401072 16.0483 0.523396 16.1023 0.65922C16.5893 1.87522 16.6223 2.95622 16.4043 3.84922C17.0953 4.78522 17.4623 5.89422 17.4623 7.14222C17.4623 10.8992 15.7883 12.8072 12.8203 13.5342C12.9453 13.9492 13.0103 14.4132 13.0103 14.9142C13.0104 15.8196 13.0064 16.7249 12.9983 17.6302C13.2229 17.6792 13.4238 17.8041 13.5671 17.9838C13.7104 18.1635 13.7874 18.3871 13.7852 18.6169C13.7829 18.8468 13.7016 19.0689 13.5548 19.2458C13.408 19.4227 13.2048 19.5436 12.9793 19.5882C11.8403 19.8162 10.9963 19.0562 10.9963 18.0632L10.9983 17.6172L11.0033 16.9122C11.0083 16.2042 11.0103 15.5742 11.0103 14.9142C11.0103 14.2172 10.8273 13.7622 10.5853 13.5542C9.92433 12.9842 10.2593 11.8992 11.1253 11.8022C14.0923 11.4692 15.4623 10.3202 15.4623 7.14222C15.4623 6.18722 15.1503 5.39822 14.5493 4.73822C14.4227 4.59946 14.3377 4.42785 14.3041 4.24303C14.2705 4.05821 14.2897 3.86767 14.3593 3.69322C14.5253 3.27922 14.5963 2.73622 14.4553 2.07922L14.4453 2.08222C13.9543 2.22122 13.3353 2.52222 12.5873 3.03122C12.4667 3.11308 12.3297 3.16757 12.1858 3.19089C12.0419 3.21421 11.8946 3.20579 11.7543 3.16622C10.9102 2.93251 10.0382 2.81509 9.16233 2.81722C8.27233 2.81722 7.39033 2.93622 6.57033 3.16722C6.43055 3.20648 6.2839 3.21483 6.14057 3.19168C5.99723 3.16854 5.86066 3.11447 5.74033 3.03322C4.98833 2.52622 4.36633 2.22622 3.87233 2.08622C3.72833 2.73922 3.79933 3.28022 3.96433 3.69322C4.03414 3.86758 4.05344 4.05807 4.02001 4.24288C3.98659 4.4277 3.90179 4.59936 3.77533 4.73822C3.17833 5.39222 2.86233 6.19622 2.86233 7.14222C2.86233 10.3142 4.23333 11.4702 7.18433 11.8022C8.04933 11.8992 8.38533 12.9792 7.72833 13.5502C7.53633 13.7182 7.29933 14.2822 7.29933 14.9142V18.0642C7.29933 19.0502 6.46433 19.7892 5.33933 19.5922C5.1111 19.5521 4.90387 19.4341 4.75305 19.2581C4.60223 19.0822 4.5172 18.8593 4.51248 18.6277C4.50775 18.396 4.58363 18.1699 4.72715 17.9879C4.87067 17.806 5.07292 17.6796 5.29933 17.6302V16.6402C4.38933 16.7012 3.63733 16.5522 3.04533 16.1552Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* DIV 3 */}
                <div className="w-full mt-5 rounded-md dark:bg-[#26293A] bg-white dark:border-none">
                    <div className="py-6 px-5 text-black dark:text-white">
                        <h2 className="font-[Inter] font-semibold text-xl">About Project</h2>
                        <p className="font-[Poppins] font-normal dark:font-light text-base leading-6 mt-3">It's not an ordinary meme token. Become a part of a powerful ecosystem and win more FROG CEO! Ecosystem Products: 🐸Apps, 🐸Game, 🐸Wallet, 🐸Swap, 🐸Chain, 🐸 AI, 🐸NFT, 🐸Browser, 🐸Pay, 🐸Clothing With the powerful Frog CEO, 6% of every transaction is automatically given to the owners in real time.</p>
                        <h3 className="font-[Inter] font-semibold text-xl mt-5">Audit Timeline</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 mt-8 font-[Poppins] font-normal dark:font-light text-base">
                            <div className="text-center w-36">
                                <svg className="mx-auto" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#D171FF"/>
                                    <path d="M11.783 10.826L20 9L28.217 10.826C28.4391 10.8754 28.6377 10.999 28.78 11.1764C28.9224 11.3538 29 11.5745 29 11.802V21.789C28.9999 22.7767 28.756 23.7492 28.2899 24.62C27.8238 25.4908 27.1499 26.2331 26.328 26.781L20 31L13.672 26.781C12.8503 26.2332 12.1765 25.4911 11.7103 24.6205C11.2442 23.7498 11.0002 22.7776 11 21.79V11.802C11 11.5745 11.0776 11.3538 11.22 11.1764C11.3623 10.999 11.5609 10.8754 11.783 10.826ZM13 12.604V21.789C13 22.4475 13.1626 23.0957 13.4733 23.6763C13.7839 24.2568 14.2332 24.7517 14.781 25.117L20 28.597L25.219 25.117C25.7667 24.7518 26.2158 24.2571 26.5265 23.6767C26.8372 23.0964 26.9998 22.4483 27 21.79V12.604L20 11.05L13 12.604Z" fill="white"/>
                                </svg>
                                <p className="mt-2">Audit Request</p>
                                <p>2023-10-21</p>
                            </div>
                            <div className="text-center w-36">
                                <svg className="mx-auto" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#D171FF"/>
                                    <path d="M17 15.078L23 29.078L26.659 20.539H31V18.539H25.341L23 24L17 10L13.341 18.539H9V20.539H14.659L17 15.078Z" fill="white"/>
                                </svg>
                                <p className="mt-2">Audit Onboard</p>
                                <p>2023-10-25</p>
                            </div>
                            <div className="text-center w-36">
                                <svg className="mx-auto" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#D171FF"/>
                                    <path d="M28.5 9C28.7652 9 29.0196 9.10536 29.2071 9.29289C29.3946 9.48043 29.5 9.73478 29.5 10V15C29.5 15.2652 29.3946 15.5196 29.2071 15.7071C29.0196 15.8946 28.7652 16 28.5 16H23.5V29C23.5 29.2652 23.3946 29.5196 23.2071 29.7071C23.0196 29.8946 22.7652 30 22.5 30H18.5C18.2348 30 17.9804 29.8946 17.7929 29.7071C17.6054 29.5196 17.5 29.2652 17.5 29V16H12C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V12.618C11.0001 12.4323 11.0519 12.2504 11.1496 12.0925C11.2472 11.9346 11.3869 11.807 11.553 11.724L17 9H28.5ZM23.5 11H17.472L13 13.236V14H19.5V28H21.5V14H23.5V11ZM27.5 11H25.5V14H27.5V11Z" fill="white"/>
                                </svg>
                                <p className="mt-2">Revision At</p>
                                <p>2023-10-26</p>
                            </div>
                            <div className="text-center w-36">
                                <svg className="mx-auto" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#D171FF"/>
                                    <path d="M12 18.4V12C12 11.7348 12.1054 11.4804 12.2929 11.2929C12.4804 11.1054 12.7348 11 13 11H18V9H22V11H27C27.2652 11 27.5196 11.1054 27.7071 11.2929C27.8946 11.4804 28 11.7348 28 12V18.4L29.086 18.726C29.3321 18.8001 29.5402 18.966 29.6672 19.1895C29.7942 19.4129 29.8303 19.6767 29.768 19.926L28.252 25.994C27.6064 26.0273 26.9604 25.935 26.35 25.722L27.6 20.37L20 18L12.4 20.37L13.65 25.721C13.0397 25.9343 12.3937 26.027 11.748 25.994L10.232 19.926C10.1697 19.6767 10.2058 19.4129 10.3328 19.1895C10.4598 18.966 10.6679 18.8001 10.914 18.726L12 18.4ZM14 17.8L20 16L26 17.8V13H14V17.8ZM12 28C13.4763 28.002 14.9011 27.4578 16 26.472C17.0989 27.4578 18.5237 28.002 20 28C21.4763 28.002 22.9011 27.4578 24 26.472C25.0989 27.4578 26.5237 28.002 28 28H30V30H28C26.5956 30.0023 25.2157 29.6331 24 28.93C22.7843 29.6331 21.4044 30.0023 20 30C18.5956 30.0023 17.2157 29.6331 16 28.93C14.7843 29.6331 13.4044 30.0023 12 30H10V28H12Z" fill="white"/>
                                </svg>
                                <p className="mt-2">Release At</p>
                                <p>2023-10-27</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Features() {
    return (
        <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl mb-8">
          <div className="w-full mx-auto text-left">
            <div className="relative flex-col items-center m-auto align-middle">
              <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
                <div className="order-first block w-full mt-12 aspect-square lg:mt-0 flex justify-center items-center">
                <img className="object-cover bg-gray-300 border border-gray-400 rounded-lg" style={{ maxWidth: "100%", maxHeight: "100%" }} alt="hero" src="/cooffe.png" />
                </div>
                <div className="flex flex-col mt-6 lg:mt-0">
                  <div className="max-w-xl">
                    <div>
                      <p className="text-2xl font-medium tracking-tight text-black sm:text-3xl">
                        Unlocking the Essence of Coffee
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto mt-6 lg:max-w-7xl">
                    <ul role="list" className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-3">
                      <li>
                        <div>
                          <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Discover the Perfect Brew
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-500">
                         Crafting the ultimate coffee experience is our passion. From sourcing the finest beans to brewing with precision, were committed.
                        </div>
                      </li>
                      <li>
                        <div>
                          <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Unparalleled Flavor Profiles
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-500">
                        Our dedication to quality shines through in every roast. Explore a diverse range of flavors, from rich and bold to smooth and velvety.
                        </div>
                      </li>
                      <li>
                        <div>
                          <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Expertly Roasted Beans
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-500">
                        With meticulous attention to detail, our master roasters ensure that each batch is roasted to perfection, unlocking the full potential.
                        </div>
                      </li>
                      <li>
                        <div>
                          <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Elevate Your Coffee Routine
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-500">
                        Experience the convenience and joy of brewing exceptional coffee right at home. Our easy-to-follow brewing guides and premium coffee.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>  
                </div>
            </div>
        </div>
    )
}

